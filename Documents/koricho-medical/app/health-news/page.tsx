import HealthNewsFeed from "@/components/health-news-feed"

export const metadata = {
  title: "Health News | Koricho",
}

export const dynamic = "force-dynamic"

export default function HealthNewsPage() {
  return (
    <section className="relative py-12 bg-background overflow-hidden">
      {/* Water wave animation to footer */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z" fill="#00c98a" opacity="0.7">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z;
                      M0,50 C150,0 350,90 600,50 C850,10 1050,100 1200,50 L1200,120 L0,120 Z;
                      M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z" />
          </path>
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="#00c98a" opacity="0.5">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z;
                      M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z;
                      M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" />
          </path>
          <path d="M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z" fill="#00c98a">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z;
                      M0,70 C250,30 450,110 600,70 C750,30 950,110 1200,70 L1200,120 L0,120 Z;
                      M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z" />
          </path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Latest Health News</h1>
          <p className="text-muted-foreground">Aggregated from trusted public sources</p>
        </div>
        <HealthNewsFeed />
      </div>
    </section>
  )
}
