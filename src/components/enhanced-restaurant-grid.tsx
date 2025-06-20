"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCustomerAuth } from "@/hooks/use-customer-auth"
import type { Restaurant } from "@/lib/data"
import { Star, Clock, MapPin, Heart, Phone, Instagram, Facebook } from "lucide-react"
import { toast } from "sonner"

interface EnhancedRestaurantGridProps {
  restaurants: Restaurant[]
  searchQuery?: string
  selectedCategory?: string | null
}

export function EnhancedRestaurantGrid({ restaurants, searchQuery, selectedCategory }: EnhancedRestaurantGridProps) {
  const { customer, isAuthenticated, addFavoriteRestaurant, removeFavoriteRestaurant } = useCustomerAuth()
  const [loadingFavorites, setLoadingFavorites] = useState<string[]>([])

  const handleFavoriteToggle = async (restaurantId: string) => {
    if (!isAuthenticated) {
      toast.error("Debes iniciar sesión para guardar favoritos")
      return
    }

    setLoadingFavorites((prev) => [...prev, restaurantId])

    try {
      const isFavorite = customer?.preferences.favoriteRestaurants.includes(restaurantId)

      if (isFavorite) {
        removeFavoriteRestaurant(restaurantId)
        toast.success("Restaurante eliminado de favoritos")
      } else {
        addFavoriteRestaurant(restaurantId)
        toast.success("Restaurante agregado a favoritos")
      }
    } catch (error) {
      toast.error("Error al actualizar favoritos")
    } finally {
      setLoadingFavorites((prev) => prev.filter((id) => id !== restaurantId))
    }
  }

  if (restaurants.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No hay restaurantes disponibles</h3>
        <p className="text-muted-foreground">
          {searchQuery || selectedCategory
            ? "Intenta con otros filtros de búsqueda"
            : "Vuelve más tarde para ver las opciones disponibles"}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => {
        const isFavorite = customer?.preferences.favoriteRestaurants.includes(restaurant.id) || false
        const isLoadingFavorite = loadingFavorites.includes(restaurant.id)

        return (
          <Card key={restaurant.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Status Badge */}
              <Badge
                className={`absolute top-3 left-3 ${
                  restaurant.isOpen ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {restaurant.isOpen ? "Abierto" : "Cerrado"}
              </Badge>

              {/* Featured Badge */}
              {restaurant.featured && (
                <Badge className="absolute top-3 right-12 bg-orange-500 hover:bg-orange-600">Destacado</Badge>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-3 right-3 h-8 w-8 rounded-full ${
                  isFavorite ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/80 hover:bg-white text-gray-600"
                }`}
                onClick={() => handleFavoriteToggle(restaurant.id)}
                disabled={isLoadingFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
              </Button>

              {/* Promotions Indicator */}
              {restaurant.promotions.length > 0 && (
                <Badge className="absolute bottom-3 left-3 bg-purple-500 hover:bg-purple-600">
                  {restaurant.promotions.length} Promoción{restaurant.promotions.length > 1 ? "es" : ""}
                </Badge>
              )}
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{restaurant.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{restaurant.description}</p>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{restaurant.location}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1 mb-3">
                {restaurant.categories.slice(0, 3).map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
                {restaurant.categories.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{restaurant.categories.length - 3}
                  </Badge>
                )}
              </div>

              {/* Specialties */}
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Especialidades:</p>
                <p className="text-sm font-medium">
                  {restaurant.specialties.slice(0, 2).join(", ")}
                  {restaurant.specialties.length > 2 && "..."}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-3 text-muted-foreground">
                {restaurant.phone && <Phone className="h-4 w-4" />}
                {restaurant.socialMedia.instagram && <Instagram className="h-4 w-4" />}
                {restaurant.socialMedia.facebook && <Facebook className="h-4 w-4" />}
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="text-sm">
                  <span className="text-muted-foreground">Pedido mínimo: </span>
                  <span className="font-medium">${restaurant.minimumOrder}</span>
                </div>
                <Link to={`/restaurant/${restaurant.id}`}>
                  <Button size="sm" disabled={!restaurant.isOpen} className="bg-orange-500 hover:bg-orange-600">
                    Ver Menú
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
