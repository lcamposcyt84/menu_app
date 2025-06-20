import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Menuya
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma digital de pedidos para la feria de comidas del Club Social Árabe. Descubre los mejores sabores
              en un solo lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-muted-foreground hover:text-primary transition-colors">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Club Social Árabe, Buenos Aires</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@menuya.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Horarios</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Lun - Jue: 11:00 - 22:00</span>
              </div>
              <div className="ml-6">Vie - Sáb: 11:00 - 23:00</div>
              <div className="ml-6">Domingo: 12:00 - 22:00</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Síguenos</h4>
              <div className="flex space-x-2">
                <a
                  href="https://instagram.com/menuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://facebook.com/menuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 Menuya. Todos los derechos reservados.</div>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
