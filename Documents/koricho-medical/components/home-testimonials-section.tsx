import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function HomeTestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Abebe Tadesse",
      role: "Hospital Director",
      image: "/professional-ethiopian-male-doctor.jpg",
      content:
        "Koricho has been our trusted partner for over 5 years. Their reliability and quality products have been instrumental in our patient care.",
      rating: 5,
    },
    {
      name: "Marta Bekele",
      role: "Pharmacy Manager",
      image: "/professional-ethiopian-female-executive.jpg",
      content:
        "The delivery service is exceptional. We always receive our orders on time, and the customer support team is very responsive.",
      rating: 5,
    },
    {
      name: "Solomon Gebre",
      role: "Clinic Owner",
      image: "/professional-ethiopian-male-manager.jpg",
      content:
        "Quality products at competitive prices. Koricho understands the healthcare needs of Ethiopia and delivers accordingly.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by healthcare professionals across Ethiopia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
