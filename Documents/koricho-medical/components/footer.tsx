import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#00c98a] border-t border-border overflow-hidden">
      {/* Water wave animation at top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
            fill="#00c98a"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z;
                      M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 L1200,120 L0,120 Z;
                      M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
            />
          </path>
          <path
            d="M0,50 C250,90 450,10 600,50 C750,90 950,10 1200,50 L1200,120 L0,120 Z"
            fill="#00c98a"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,50 C250,90 450,10 600,50 C750,90 950,10 1200,50 L1200,120 L0,120 Z;
                      M0,50 C250,10 450,90 600,50 C750,10 950,90 1200,50 L1200,120 L0,120 Z;
                      M0,50 C250,90 450,10 600,50 C750,90 950,10 1200,50 L1200,120 L0,120 Z"
            />
          </path>
          <path d="M0,60 C300,100 500,20 600,60 C700,100 900,20 1200,60 L1200,120 L0,120 Z" fill="#00c98a">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0,60 C300,100 500,20 600,60 C700,100 900,20 1200,60 L1200,120 L0,120 Z;
                      M0,60 C300,20 500,100 600,60 C700,20 900,100 1200,60 L1200,120 L0,120 Z;
                      M0,60 C300,100 500,20 600,60 C700,100 900,20 1200,60 L1200,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/koricho-logo-transparent.png"
                alt="Koricho Logo"
                width={140}
                height={140}
                className="w-28 h-28"
              />
              <span className="font-bold text-xl">Koricho</span>
            </div>
            <p className="text-sm text-white/80 font-medium leading-relaxed">
              Your trusted partner for quality medicine supply across Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 font-semibold hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 font-semibold hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-white/80 font-semibold hover:text-white transition-colors"
                >
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 font-semibold hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/80 font-medium">Medicine Supply</li>
              <li className="text-sm text-white/80 font-medium">Healthcare Products</li>
              <li className="text-sm text-white/80 font-medium">Medical Equipment</li>
              <li className="text-sm text-white/80 font-medium">Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80 font-medium">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80 font-medium">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+251 11 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80 font-medium">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@koricho.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-white/80">
          <p className="font-semibold">&copy; {new Date().getFullYear()} Koricho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
