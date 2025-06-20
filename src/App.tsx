import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/toaster"

// Pages
import HomePage from "@/pages/HomePage"
import RestaurantPage from "@/pages/RestaurantPage"
import ProductPage from "@/pages/ProductPage"
import CheckoutPage from "@/pages/CheckoutPage"
import SuccessPage from "@/pages/SuccessPage"
import ProfilePage from "@/pages/ProfilePage"

// Admin Pages
import AdminLoginPage from "@/pages/admin/AdminLoginPage"
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage"

// Consortium Pages
import ConsortiumLoginPage from "@/pages/consortium/ConsortiumLoginPage"
import ConsortiumRegisterPage from "@/pages/consortium/ConsortiumRegisterPage"
import ConsortiumDashboardPage from "@/pages/consortium/ConsortiumDashboardPage"
import ConsortiumProductsPage from "@/pages/consortium/ConsortiumProductsPage"
import ConsortiumNewProductPage from "@/pages/consortium/ConsortiumNewProductPage"
import ConsortiumOrdersPage from "@/pages/consortium/ConsortiumOrdersPage"
import ConsortiumWaitersPage from "@/pages/consortium/ConsortiumWaitersPage"
import ConsortiumPromotionsPage from "@/pages/consortium/ConsortiumPromotionsPage"
import ConsortiumInventoryPage from "@/pages/consortium/ConsortiumInventoryPage"
import ConsortiumMenuPage from "@/pages/consortium/ConsortiumMenuPage"

// Waiter Pages
import WaiterLoginPage from "@/pages/waiter/WaiterLoginPage"
import WaiterDashboardPage from "@/pages/waiter/WaiterDashboardPage"
import WaiterOrderPage from "@/pages/waiter/WaiterOrderPage"
import WaiterMenuPage from "@/pages/waiter/WaiterMenuPage"
import WaiterPaymentPage from "@/pages/waiter/WaiterPaymentPage"

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/product/:restaurantId/:productId" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

            {/* Consortium Routes */}
            <Route path="/consortium/login" element={<ConsortiumLoginPage />} />
            <Route path="/consortium/register" element={<ConsortiumRegisterPage />} />
            <Route path="/consortium/dashboard" element={<ConsortiumDashboardPage />} />
            <Route path="/consortium/products" element={<ConsortiumProductsPage />} />
            <Route path="/consortium/products/new" element={<ConsortiumNewProductPage />} />
            <Route path="/consortium/orders" element={<ConsortiumOrdersPage />} />
            <Route path="/consortium/waiters" element={<ConsortiumWaitersPage />} />
            <Route path="/consortium/promotions" element={<ConsortiumPromotionsPage />} />
            <Route path="/consortium/inventory" element={<ConsortiumInventoryPage />} />
            <Route path="/consortium/menu" element={<ConsortiumMenuPage />} />

            {/* Waiter Routes */}
            <Route path="/waiter/login" element={<WaiterLoginPage />} />
            <Route path="/waiter/dashboard" element={<WaiterDashboardPage />} />
            <Route path="/waiter/order" element={<WaiterOrderPage />} />
            <Route path="/waiter/menu" element={<WaiterMenuPage />} />
            <Route path="/waiter/payment/:orderId" element={<WaiterPaymentPage />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
