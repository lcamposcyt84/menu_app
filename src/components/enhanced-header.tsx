"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/cart-store"
import { useCustomerAuth } from "@/hooks/use-customer-auth"
import { CustomerAuthModal } from "@/components/customer-auth-modal"
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-react"
import { toast } from "sonner"

export function EnhancedHeader() {
  const { items, getTotalItems, setIsOpen } = useCartStore()
  const { customer, isAuthenticated, logout } = useCustomerAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const totalItems = getTotalItems()

  const handleCartClick = () => {
    if (items.length === 0) {
      toast.info("Tu carrito está vacío")
      return
    }
    setIsOpen(true)
  }

  const handleLogout = () => {
    logout()
    toast.success("Sesión cerrada correctamente")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Menuya
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/restaurants" className="text-sm font-medium hover:text-primary transition-colors">
                Restaurantes
              </Link>
              {isAuthenticated && (
                <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                  Mi Perfil
                </Link>
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleCartClick}
                className="relative bg-white text-black hover:bg-gray-50"
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500 hover:bg-orange-600">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* User Actions */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Link to="/profile">
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="hidden lg:inline">{customer?.name.split(" ")[0]}</span>
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setShowAuthModal(true)}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <User className="h-4 w-4 mr-2" />
                  Ingresar
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  to="/restaurants"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Restaurantes
                </Link>
                {isAuthenticated && (
                  <Link
                    to="/profile"
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mi Perfil
                  </Link>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleCartClick()
                      setIsMobileMenuOpen(false)
                    }}
                    className="relative flex-1 mr-2"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Carrito
                    {totalItems > 0 && <Badge className="ml-2 bg-orange-500 hover:bg-orange-600">{totalItems}</Badge>}
                  </Button>

                  {isAuthenticated ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        handleLogout()
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => {
                        setShowAuthModal(true)
                        setIsMobileMenuOpen(false)
                      }}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Ingresar
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Customer Auth Modal */}
      <CustomerAuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}
