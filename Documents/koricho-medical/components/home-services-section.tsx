import { Card, CardContent } from "@/components/ui/card"
import { Pill, Stethoscope, Syringe, HeartPulse, Microscope, Ambulance } from "lucide-react"

export function HomeServicesSection() {
  const services = [
    {
      icon: Pill,
      title: "Pharmaceutical Products",
      description: "Wide range of prescription and over-the-counter medications",
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Medical Equipment",
      description: "Quality diagnostic and treatment equipment for healthcare facilities",
      color: "secondary",
    },
    {
      icon: Syringe,
      title: "Vaccines & Immunization",
      description: "Complete vaccine supply chain with proper cold storage",
      color: "accent",
    },
    {
      icon: HeartPulse,
      title: "Chronic Disease Management",
      description: "Specialized medications for diabetes, hypertension, and more",
      color: "primary",
    },
    {
      icon: Microscope,
      title: "Laboratory Supplies",
      description: "Comprehensive lab equipment and testing materials",
      color: "secondary",
    },
    {
      icon: Ambulance,
      title: "Emergency Supplies",
      description: "Critical care medications and emergency medical supplies",
      color: "accent",
    },
  ]

  return (
    <section
      className="py-20 bg-muted bg-cover bg-center"
      style={{ backgroundImage: "url('/Herosection.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive healthcare solutions tailored to meet the needs of medical facilities across Ethiopia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className={`w-14 h-14 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
