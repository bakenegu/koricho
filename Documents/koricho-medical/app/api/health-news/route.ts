import { NextResponse } from "next/server"
import Parser from "rss-parser"
import * as cheerio from "cheerio"
import NodeCache from "node-cache"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

const cache = new NodeCache({ stdTTL: 60 * 15 })
const CACHE_KEY = "health_news_v1"

const parser = new Parser({
  timeout: 15_000,
  requestOptions: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
    },
  },
})

type Source =
  | {
      name: string
      type: "rss"
      url: string
    }
  | {
      name: string
      type: "html"
      url: string
      selector: {
        item: string
        title: string
        link: string
        date?: string
        summary?: string
      }
      resolveAbsoluteLinks?: boolean
    }

const sources: Source[] = [
  {
    name: "Addis Standard",
    type: "rss",
    url: "https://addisstandard.com/feed/",
  },
  {
    name: "WHO Newsroom",
    type: "rss",
    url: "https://www.who.int/news-room/releases/rss.xml",
  },
  // WHO Ethiopia Country news (HTML)
  {
    name: "WHO Ethiopia",
    type: "html",
    url: "https://www.afro.who.int/countries/ethiopia/news",
    selector: {
      item: "article, .views-row, .card",
      title: "h2, h3, .card-title, .node__title",
      link: "a[href]",
      date: "time, .date, .published, .card-date",
      summary: ".field--name-body p, .summary, .card-text, p",
    },
    resolveAbsoluteLinks: true,
  },
  // EPHI News (HTML) - best-effort selectors
  {
    name: "EPHI",
    type: "html",
    url: "https://ephi.gov.et/category/news/",
    selector: {
      item: "article, .post, .blog-post, .et_pb_post",
      title: "h2 a, h2.entry-title a, h3 a, .entry-title a",
      link: "h2 a, h3 a, .entry-title a",
      date: "time, .post-meta, .entry-date",
      summary: ".entry-content p, .post-content p, p",
    },
    resolveAbsoluteLinks: true,
  },
  // MoH Ethiopia (HTML) - best-effort selectors
  {
    name: "MoH Ethiopia",
    type: "html",
    url: "https://moh.gov.et/news",
    selector: {
      item: "article, .news-item, .views-row, .card",
      title: "h2 a, h3 a, .card-title a",
      link: "h2 a, h3 a, .card-title a",
      date: "time, .date, .published",
      summary: ".summary, .card-text, p",
    },
    resolveAbsoluteLinks: true,
  },
]

function normalizeItem(source: string, item: any) {
  const publishedAt = item.isoDate || item.pubDate || null
  return {
    source,
    title: item.title || "",
    link: item.link || "",
    publishedAt,
    summary: item.contentSnippet || item.summary || "",
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const refresh = searchParams.get("refresh") === "1"

  if (!refresh) {
    const cached = cache.get(CACHE_KEY)
    if (cached) {
      return NextResponse.json({ cached: true, items: cached }, { status: 200 })
    }
  }

  const results: any[] = []

  async function fetchRssXml(url: string): Promise<string | null> {
    try {
      const res = await fetch(url, {
        // Many RSS providers require a UA; some block default fetch UA
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        },
        cache: "no-store",
      })
      if (!res.ok) return null
      return await res.text()
    } catch {
      return null
    }
  }

  async function fetchHtml(url: string): Promise<string | null> {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        cache: "no-store",
      })
      if (!res.ok) return null
      return await res.text()
    } catch {
      return null
    }
  }

  await Promise.all(
    sources.map(async (s) => {
      try {
        if (s.type === "rss") {
          // Prefer manual fetch to set headers; fall back to parser.parseURL
          const xml = await fetchRssXml(s.url)
          if (xml) {
            const feed = await parser.parseString(xml)
            const items = (feed.items || []).slice(0, 30).map((it) => normalizeItem(s.name, it))
            results.push(...items)
          } else {
            const feed = await parser.parseURL(s.url)
            const items = (feed.items || []).slice(0, 30).map((it) => normalizeItem(s.name, it))
            results.push(...items)
          }
        } else if (s.type === "html") {
          const html = await fetchHtml(s.url)
          if (!html) return
          const $ = cheerio.load(html)
          const out: any[] = []
          $(s.selector.item)
            .slice(0, 20)
            .each((_, el) => {
              const getText = (sel: string) => $(el).find(sel).first().text().trim()
              const getAttr = (sel: string, attr: string) => $(el).find(sel).first().attr(attr) || ""
              const title = getText(s.selector.title)
              const href = getAttr(s.selector.link, "href")
              if (!title || !href) return
              const link = s.resolveAbsoluteLinks && href.startsWith("/") ? new URL(href, s.url).toString() : href
              const date = s.selector.date ? getText(s.selector.date) : ""
              const summary = s.selector.summary ? getText(s.selector.summary) : ""
              out.push({ source: s.name, title, link, publishedAt: date || null, summary })
            })
          results.push(...out)
        }
      } catch (e) {
        // ignore individual source errors, continue
      }
    }),
  )

  const unique = new Map<string, any>()
  for (const it of results) {
    const key = it.link || `${it.source}-${it.title}`
    if (!unique.has(key)) unique.set(key, it)
  }

  const items = Array.from(unique.values()).sort((a, b) => {
    const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0
    const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0
    return tb - ta
  })

  cache.set(CACHE_KEY, items)
  return NextResponse.json({ cached: false, items }, { status: 200 })
}
