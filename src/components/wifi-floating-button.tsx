"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, X, Copy, Check } from "lucide-react"
import { toast } from "sonner"

export function WiFiFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
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
    <>
      {/* Floating Button */}
      <Button
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Wifi className="h-6 w-6 text-white" />
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="flex items-center space-x-2">
                <Wifi className="h-5 w-5 text-blue-500" />
                <span>WiFi Gratuito</span>
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Conéctate a nuestra red WiFi gratuita mientras disfrutas en el Club Social Árabe
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Red WiFi</p>
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {wifiCredentials.network}
                    </code>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard(wifiCredentials.network, "Red")}>
                    {copiedField === "Red" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Contraseña</p>
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {wifiCredentials.password}
                    </code>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(wifiCredentials.password, "Contraseña")}
                  >
                    {copiedField === "Contraseña" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                💡 Tip: Toca los botones de copiar para usar las credenciales fácilmente
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
