"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Copy, Check } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function WiFiBannerSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const wifiCredentials = {
    network: "ClubArabe_Guest",
    password: "Menuya2024!",
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      toast.success(`${field} copiado al portapapeles`)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      toast.error("Error al copiar")
    }
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Wifi className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">WiFi Gratuito Disponible</h3>
              <p className="text-blue-700 dark:text-blue-200 text-sm">
                Conéctate a nuestra red WiFi mientras disfrutas
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border">
              <span className="text-sm font-medium">Red:</span>
              <code className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {wifiCredentials.network}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(wifiCredentials.network, "Red")}
              >
                {copiedField === "Red" ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>

            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border">
              <span className="text-sm font-medium">Clave:</span>
              <code className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {wifiCredentials.password}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(wifiCredentials.password, "Clave")}
              >
                {copiedField === "Clave" ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
