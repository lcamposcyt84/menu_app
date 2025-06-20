"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Clock, Star, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnhancedHeader } from "@/components/enhanced-header"
import { MenuGrid } from "@/components/menu-grid"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { getRestaurantById, getProductsByRestaurant, getPromotionsByRestaurant } from "@/lib/data"
import type { Restaurant, Product, Promotion } from "@/types"

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const restaurantData = getRestaurantById(id)
        const productsData = getProductsByRestaurant(id)
        const promotionsData = getPromotionsByRestaurant(id)

        setRestaurant(restaurantData || null)
        setProducts(productsData)
        setPromotions(promotionsData)
        setLoading(false)
      }, 1000)
    }
  }, [id])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <EnhancedHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Restaurante no encontrado</h1>
            <Button onClick={() => navigate("/")}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    )
  }

  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>

        {/* Restaurant Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={restaurant.image || "/placeholder.svg"}
              alt={restaurant.name}
              className="w-full md:w-64 h-48 object-cover rounded-lg"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
                  <p className="text-muted-foreground mb-4">{restaurant.description}</p>
                </div>
                <Badge variant={restaurant.isOpen ? "default" : "secondary"}>
                  {restaurant.isOpen ? "Abierto" : "Cerrado"}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{restaurant.rating}</span>
                  <span className="text-muted-foreground">• Excelente</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{restaurant.deliveryTime}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{restaurant.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{restaurant.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {restaurant.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Promotions */}
        {promotions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Promociones Activas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promotions.map((promotion) => (
                <div
                  key={promotion.id}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg"
                >
                  <h3 className="font-bold mb-2">{promotion.title}</h3>
                  <p className="text-sm opacity-90">{promotion.description}</p>
                  {promotion.code && (
                    <div className="mt-2">
                      <Badge variant="secondary">Código: {promotion.code}</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Menú</h2>

          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <MenuGrid
                  products={products.filter((product) => product.category === category)}
                  restaurantId={restaurant.id}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default RestaurantPage
