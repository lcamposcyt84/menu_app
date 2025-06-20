import type React from "react"
import { EnhancedHeader } from "@/components/enhanced-header"
import { EnhancedRestaurantGrid } from "@/components/enhanced-restaurant-grid"
import { PromotionsSection } from "@/components/promotions-section"
import { WifiBannerSection } from "@/components/wifi-banner-section"
import { WifiFloatingButton } from "@/components/wifi-floating-button"
import { Footer } from "@/components/footer"
import { CustomerAuthModal } from "@/components/customer-auth-modal"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{"¡Descubre los mejores sabores!"}</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Ordena desde tu mesa con nuestro menú digital</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Ver Restaurantes
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Escanear QR
              </button>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <PromotionsSection />

        {/* Restaurants Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Restaurantes Destacados</h2>
            <EnhancedRestaurantGrid />
          </div>
        </section>

        {/* WiFi Banner */}
        <WifiBannerSection />
      </main>

      <Footer />
      <WifiFloatingButton />
      <CustomerAuthModal />
    </div>
  )
}

export default HomePage
