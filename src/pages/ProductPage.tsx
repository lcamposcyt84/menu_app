"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Clock, Star, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedHeader } from "@/components/enhanced-header"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { useCartStore } from "@/store/cart-store"
import { useToast } from "@/components/ui/use-toast"
import { getProductById, getRestaurantById } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import type { Product, Restaurant } from "@/types"

const ProductPage: React.FC = () => {
  const { restaurantId, productId } = useParams<{ restaurantId: string; productId: string }>()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { addItem } = useCartStore()

  const [product, setProduct] = useState<Product | null>(null)
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (productId && restaurantId) {
      // Simulate API call
      setTimeout(() => {
        const productData = getProductById(productId)
        const restaurantData = getRestaurantById(restaurantId)

        setProduct(productData || null)
        setRestaurant(restaurantData || null)
        setLoading(false)
      }, 1000)
    }
  }, [productId, restaurantId])

  const handleAddToCart = () => {
    if (!product || !restaurant) return

    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      restaurantId: restaurant.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    }

    addItem(cartItem)

    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    })
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (!product || !restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <EnhancedHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
            <Button onClick={() => navigate("/")}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">
                {restaurant.name}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.description}</p>
            </div>

            {/* Rating and Preparation Time */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reseñas)</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{product.preparationTime} min</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Ingredientes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="secondary">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Allergens */}
            {product.allergens && product.allergens.length > 0 && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-red-600">Alérgenos</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <Badge key={index} variant="destructive">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Cantidad:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button onClick={handleAddToCart} className="w-full" size="lg" disabled={!product.isAvailable}>
              {product.isAvailable ? (
                <>Agregar al carrito • {formatPrice(product.price * quantity)}</>
              ) : (
                "No disponible"
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage
