import HealthNewsFeed from "@/components/health-news-feed"

export const metadata = {
  title: "Health News | Koricho",
}

export const dynamic = "force-dynamic"

export default function HealthNewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Latest Health News</h1>
        <p className="text-muted-foreground">Aggregated from trusted public sources</p>
      </div>
      <HealthNewsFeed />
    </div>
  )
}
