import * as cheerio from "cheerio"
import Link from "next/link"

export const metadata = {
  title: "Article | Koricho",
}

function pickText($: cheerio.CheerioAPI, selectors: string[]): string | null {
  for (const sel of selectors) {
    const t = $(sel).first().text().trim()
    if (t) return t
  }
  return null
}

function pickHtml($: cheerio.CheerioAPI, selectors: string[]): string | null {
  for (const sel of selectors) {
    const el = $(sel).first()
    if (el && el.length) {
      // Clean up common noisy elements
      el.find("script, style, noscript, iframe, svg").remove()
      return el.html() || null
    }
  }
  return null
}

export default async function ArticleView({ searchParams }: { searchParams: { url?: string } }) {
  const url = searchParams?.url

  if (!url) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-destructive">Missing article URL.</p>
        <Link href="/health-news" className="text-primary hover:underline mt-4 inline-block">← Back to Health News</Link>
      </div>
    )
  }

  let title: string | null = null
  let contentHtml: string | null = null
  let fetched = false

  try {
    const res = await fetch(url, { cache: "no-store" })
    if (res.ok) {
      const html = await res.text()
      const $ = cheerio.load(html)
      fetched = true

      title =
        pickText($, [
          "meta[property='og:title']",
          "meta[name='twitter:title']",
        ]) ||
        $("title").first().text().trim() ||
        pickText($, ["h1", ".article-title", ".post-title"]) ||
        url

      // Prefer typical article containers
      contentHtml =
        pickHtml($, [
          "article .content, article, .article-content, .entry-content, .post-content, #content",
        ]) ||
        pickHtml($, ["main"]) ||
        null
    }
  } catch (e) {
    // ignore and fall back
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold line-clamp-2 mr-4">{title ?? "Article"}</h1>
        <Link href="/health-news" className="text-sm text-primary hover:underline">← Back</Link>
      </div>

      {!fetched && (
        <div className="mb-4 text-muted-foreground">Could not fetch the article content. Opening source instead.</div>
      )}

      {contentHtml ? (
        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      ) : (
        <div className="rounded-md border p-6 bg-card">
          <p className="text-sm text-muted-foreground mb-4">
            We couldn't extract a clean preview for this article. Please view it at the source link below.
          </p>
          <Link href={url} target="_blank" className="text-primary hover:underline break-all">
            {url}
          </Link>
        </div>
      )}
    </div>
  )
}
