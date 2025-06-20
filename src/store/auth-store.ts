import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Customer, Admin, Consortium, Waiter } from "@/types"

interface AuthState {
  // Customer auth
  customer: Customer | null
  isCustomerAuthenticated: boolean

  // Admin auth
  admin: Admin | null
  isAdminAuthenticated: boolean

  // Consortium auth
  consortium: Consortium | null
  isConsortiumAuthenticated: boolean

  // Waiter auth
  waiter: Waiter | null
  isWaiterAuthenticated: boolean

  // Actions
  loginCustomer: (customer: Customer) => void
  logoutCustomer: () => void
  loginAdmin: (admin: Admin) => void
  logoutAdmin: () => void
  loginConsortium: (consortium: Consortium) => void
  logoutConsortium: () => void
  loginWaiter: (waiter: Waiter) => void
  logoutWaiter: () => void
  clearAllAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      customer: null,
      isCustomerAuthenticated: false,
      admin: null,
      isAdminAuthenticated: false,
      consortium: null,
      isConsortiumAuthenticated: false,
      waiter: null,
      isWaiterAuthenticated: false,

      // Customer actions
      loginCustomer: (customer) => {
        set({
          customer,
          isCustomerAuthenticated: true,
          // Clear other auth states
          admin: null,
          isAdminAuthenticated: false,
          consortium: null,
          isConsortiumAuthenticated: false,
          waiter: null,
          isWaiterAuthenticated: false,
        })
      },

      logoutCustomer: () => {
        set({
          customer: null,
          isCustomerAuthenticated: false,
        })
      },

      // Admin actions
      loginAdmin: (admin) => {
        set({
          admin,
          isAdminAuthenticated: true,
          // Clear other auth states
          customer: null,
          isCustomerAuthenticated: false,
          consortium: null,
          isConsortiumAuthenticated: false,
          waiter: null,
          isWaiterAuthenticated: false,
        })
      },

      logoutAdmin: () => {
        set({
          admin: null,
          isAdminAuthenticated: false,
        })
      },

      // Consortium actions
      loginConsortium: (consortium) => {
        set({
          consortium,
          isConsortiumAuthenticated: true,
          // Clear other auth states
          customer: null,
          isCustomerAuthenticated: false,
          admin: null,
          isAdminAuthenticated: false,
          waiter: null,
          isWaiterAuthenticated: false,
        })
      },

      logoutConsortium: () => {
        set({
          consortium: null,
          isConsortiumAuthenticated: false,
        })
      },

      // Waiter actions
      loginWaiter: (waiter) => {
        set({
          waiter,
          isWaiterAuthenticated: true,
          // Clear other auth states
          customer: null,
          isCustomerAuthenticated: false,
          admin: null,
          isAdminAuthenticated: false,
          consortium: null,
          isConsortiumAuthenticated: false,
        })
      },

      logoutWaiter: () => {
        set({
          waiter: null,
          isWaiterAuthenticated: false,
        })
      },

      // Clear all auth
      clearAllAuth: () => {
        set({
          customer: null,
          isCustomerAuthenticated: false,
          admin: null,
          isAdminAuthenticated: false,
          consortium: null,
          isConsortiumAuthenticated: false,
          waiter: null,
          isWaiterAuthenticated: false,
        })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
