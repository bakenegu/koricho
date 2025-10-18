import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Have questions about our services? We're here to help. Reach out to us and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@koricho.com</p>
                <p className="text-sm text-muted-foreground">support@koricho.com</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+251 11 XXX XXXX</p>
                <p className="text-sm text-muted-foreground">+251 91 XXX XXXX</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">Bole Road, Addis Ababa</p>
                <p className="text-sm text-muted-foreground">Ethiopia</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Fri: 8AM - 6PM</p>
                <p className="text-sm text-muted-foreground">Sat: 9AM - 2PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-balance">Send Us a Message</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-balance">Our Location</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Visit our office in Addis Ababa. We're conveniently located in the heart of the city.
                </p>
              </div>
              <div className="h-[500px]">
                <LocationMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">What areas do you serve?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We serve all regions of Ethiopia with our extensive distribution network, ensuring timely delivery
                    of quality medicines and healthcare products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">How can I place an order?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can place orders by contacting us via phone, email, or by visiting our office. Our team will
                    guide you through the ordering process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Do you offer emergency deliveries?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, we provide emergency delivery services for urgent medical supply needs. Contact our 24/7
                    support line for immediate assistance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Are your products certified?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All our products are certified and meet international quality standards. We work only with reputable
                    manufacturers and suppliers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
