"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getActivePromotions, type Promotion } from "@/lib/data"
import { ChevronLeft, ChevronRight, Tag, Clock } from "lucide-react"

export function PromotionsSection() {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setPromotions(getActivePromotions())
  }, [])

  const nextPromotion = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length)
  }

  const prevPromotion = () => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length)
  }

  if (promotions.length === 0) {
    return null
  }

  const currentPromotion = promotions[currentIndex]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Tag className="h-6 w-6 text-orange-500" />
          Promociones Especiales
        </h2>
        {promotions.length > 1 && (
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevPromotion}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} de {promotions.length}
            </span>
            <Button variant="outline" size="icon" onClick={nextPromotion}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <Card className="overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  {currentPromotion.discountType === "percentage"
                    ? `${currentPromotion.discount}% OFF`
                    : `$${currentPromotion.discount} OFF`}
                </Badge>
                <div className="flex items-center space-x-1 text-white/80">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">
                    Válido hasta {new Date(currentPromotion.validUntil).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2">{currentPromotion.title}</h3>

              <p className="text-white/90 mb-4">{currentPromotion.description}</p>

              {currentPromotion.code && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Código:</span>
                  <Badge className="bg-white text-orange-500 font-mono">{currentPromotion.code}</Badge>
                </div>
              )}
            </div>

            {currentPromotion.image && (
              <div className="w-full md:w-48 h-32 md:h-24 rounded-lg overflow-hidden bg-white/10">
                <img
                  src={currentPromotion.image || "/placeholder.svg"}
                  alt={currentPromotion.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Promotion indicators */}
      {promotions.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {promotions.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
