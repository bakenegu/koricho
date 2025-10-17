"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type NewsItem = {
  source: string
  title: string
  link: string
  publishedAt?: string | null
  summary?: string
}

function formatDate(iso?: string | null) {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.valueOf())) return ""
  return d.toLocaleString()
}

export default function HealthNewsFeed() {
  const [items, setItems] = useState<NewsItem[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const apiUrl = useMemo(() => {
    const base =
      (typeof window !== "undefined" && window.location.origin) ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      ""
    return `${base}/api/health-news`
  }, [])

  const load = async (opts?: { refresh?: boolean }) => {
    setLoading(true)
    setError(null)
    try {
      const url = opts?.refresh ? `${apiUrl}?refresh=1` : apiUrl
      const res = await fetch(url, { cache: "no-store" })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setItems(data.items ?? [])
    } catch (e: any) {
      setError(e?.message || "Failed to load news")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // initial fetch
    load()
    // auto-refresh every 5 minutes
    const id = setInterval(() => load({ refresh: true }), 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center justify-center h-9 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
          onClick={() => load({ refresh: true })}
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
        {error ? <span className="text-destructive text-sm">{error}</span> : null}
        <span className="text-xs text-muted-foreground">Auto-refresh every 5 min</span>
      </div>

      {(!items || items.length === 0) && !loading ? (
        <div className="text-muted-foreground">No news available yet.</div>
      ) : null}

      {items && items.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const detailHref = `/health-news/view?url=${encodeURIComponent(it.link)}`
            return (
              <Card key={idx} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="capitalize">{it.source}</Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(it.publishedAt)}</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-snug">
                    <Link href={detailHref} className="hover:underline">
                      {it.title}
                    </Link>
                  </h3>
                  {it.summary ? (
                    <p className="text-sm text-muted-foreground line-clamp-4">{it.summary}</p>
                  ) : null}
                  <div className="flex gap-3 pt-2">
                    <Link href={detailHref} className="text-primary text-sm hover:underline">
                      Read here
                    </Link>
                    <Link href={it.link} target="_blank" className="text-sm text-muted-foreground hover:underline">
                      Source ↗
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
