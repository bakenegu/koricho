import { Hero3D } from "@/components/hero-3d"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Truck, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HomeServicesSection } from "@/components/home-services-section"
import { HomeTestimonialsSection } from "@/components/home-testimonials-section"
import { HomeLocationSection } from "@/components/home-location-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00c98a] via-[#14b8a6] to-[#0ea5e9]">
        {/* Gradient fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-white">
              Trusted Healthcare Partner
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Quality Medicine
              <span className="block text-primary">Supply in Ethiopia</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Koricho provides reliable access to quality medicines and healthcare products across Ethiopia, ensuring
              health and wellness for all communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/60 hover:bg-white/20" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-white/80">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-white/80">Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>

          {/* Right 3D Animation */}
          <div className="h-[400px] lg:h-[600px]">
            <Hero3D />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Koricho</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We are committed to providing the highest quality healthcare products with exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All products are certified and meet international quality standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reliable delivery network covering all regions of Ethiopia
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Round-the-clock customer support for all your healthcare needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Years of experience serving healthcare providers across Ethiopia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <HomeServicesSection />

      {/* Testimonials Section */}
      <HomeTestimonialsSection />

      {/* Location Section */}
      <HomeLocationSection />

      {/* CTA Section */}
      <section className="relative py-12 bg-muted overflow-hidden">
        {/* Water wave animation */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
          <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z" fill="#00c98a" opacity="0.7">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                values="M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z;
                        M0,50 C150,0 350,90 600,50 C850,10 1050,100 1200,50 L1200,120 L0,120 Z;
                        M0,50 C150,90 350,0 600,50 C850,100 1050,10 1200,50 L1200,120 L0,120 Z"/>
            </path>
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="#00c98a" opacity="0.5">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z;
                        M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z;
                        M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"/>
            </path>
            <path d="M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z" fill="#00c98a">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z;
                        M0,70 C250,30 450,110 600,70 C750,30 950,110 1200,70 L1200,120 L0,120 Z;
                        M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z"/>
            </path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto lg:mx-0 flex flex-col gap-6 items-start lg:flex-row lg:items-center lg:gap-10">
            <Image
              src="/koricho-logo-transparent.png"
              alt="Koricho Logo"
              width={380}
              height={380}
              className="w-44 h-44 lg:w-72 lg:h-72 drop-shadow-xl"
            />
            <div className="text-center space-y-6 w-full lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Join hundreds of healthcare providers who trust Koricho for their medicine supply needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
