import { fetchHealthArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default async function ArticlesPage() {
  const articles = await fetchHealthArticles()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Health Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Health Articles</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Stay informed with the latest health news, medical research, and wellness tips from trusted sources
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found. Please try again later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popular Topics</h2>
            <p className="text-muted-foreground">Explore articles by category</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Diabetes",
              "Cardiovascular Health",
              "Mental Health",
              "Nutrition",
              "Vaccination",
              "Maternal Health",
              "Infectious Diseases",
              "Pain Management",
              "Sleep Health",
              "Exercise & Fitness",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-background border-2 border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-balance">Stay Updated</h2>
            <p className="text-muted-foreground leading-relaxed">
              Subscribe to our newsletter to receive the latest health articles and updates directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
