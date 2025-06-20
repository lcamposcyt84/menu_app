import { useAuthStore } from "@/store/auth-store"
import type { Customer } from "@/types"
import { customers } from "@/lib/data"

export const useCustomerAuth = () => {
  const { customer, isCustomerAuthenticated, loginCustomer, logoutCustomer } = useAuthStore()

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock authentication - in real app, this would be an API call
      const foundCustomer = customers.find((c) => c.email === email)

      if (foundCustomer) {
        loginCustomer(foundCustomer)
        return true
      }

      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (
    customerData: Omit<Customer, "id" | "createdAt" | "orderHistory" | "loyaltyPoints">,
  ): Promise<boolean> => {
    try {
      // Mock registration - in real app, this would be an API call
      const newCustomer: Customer = {
        ...customerData,
        id: `customer-${Date.now()}`,
        createdAt: new Date(),
        orderHistory: [],
        loyaltyPoints: 0,
      }

      loginCustomer(newCustomer)
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = () => {
    logoutCustomer()
  }

  return {
    customer,
    isAuthenticated: isCustomerAuthenticated,
    login,
    register,
    logout,
  }
}
