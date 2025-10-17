import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Heart, Briefcase, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              About Koricho
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Committed to Healthcare Excellence in Ethiopia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We are dedicated to improving healthcare accessibility by providing quality medicines and healthcare
              products to communities across Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform healthcare accessibility in Ethiopia, Koricho has grown to become a
                  trusted partner for healthcare providers and institutions across the country.
                </p>
                <p>
                  Our journey began with a simple mission: to ensure that quality medicines reach every corner of
                  Ethiopia. Today, we work with leading pharmaceutical manufacturers and healthcare organizations to
                  deliver reliable, certified products that meet international standards.
                </p>
                <p>
                  Through our extensive distribution network and commitment to excellence, we have successfully served
                  hundreds of healthcare facilities, pharmacies, and medical institutions, contributing to better health
                  outcomes for Ethiopian communities.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted">
              <Image src="/modern-medical-facility-in-ethiopia.jpg" alt="Koricho medical facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20 bg-muted bg-cover bg-center"
        style={{ backgroundImage: "url('/Herosection.png')" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and quality healthcare products to all communities in Ethiopia,
                  ensuring that no one is left behind in their journey to better health. We strive to build lasting
                  partnerships with healthcare providers and maintain the highest standards of service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading healthcare supply partner in Ethiopia, recognized for our commitment to quality,
                  reliability, and innovation. We envision a future where every Ethiopian has access to the medicines
                  and healthcare products they need to live healthy, fulfilling lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We operate with honesty and transparency in all our dealings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build strong partnerships with healthcare providers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We maintain the highest standards in product quality and service
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We continuously improve our processes and services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experienced professionals dedicated to healthcare excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Abebe Tadesse",
                role: "Chief Executive Officer",
                image: "/professional-ethiopian-male-doctor.jpg",
              },
              {
                name: "Marta Bekele",
                role: "Chief Operations Officer",
                image: "/professional-ethiopian-female-executive.jpg",
              },
              {
                name: "Solomon Gebre",
                role: "Head of Supply Chain",
                image: "/professional-ethiopian-male-manager.jpg",
              },
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden border-2">
                <div className="relative h-64 bg-muted">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
