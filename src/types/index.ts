export interface Restaurant {
  id: string
  name: string
  description: string
  image: string
  rating: number
  deliveryTime: string
  deliveryFee: number
  category: string
  isOpen: boolean
  address: string
  phone: string
  email: string
  website?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  operatingHours: {
    [key: string]: {
      open: string
      close: string
      isOpen: boolean
    }
  }
  tags: string[]
  promotions?: Promotion[]
}

export interface Product {
  id: string
  restaurantId: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isAvailable: boolean
  preparationTime: number
  ingredients: string[]
  allergens: string[]
  nutritionalInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  customizations?: ProductCustomization[]
  tags: string[]
  rating: number
  reviewCount: number
}

export interface ProductCustomization {
  id: string
  name: string
  type: "single" | "multiple"
  required: boolean
  options: CustomizationOption[]
}

export interface CustomizationOption {
  id: string
  name: string
  price: number
  isDefault?: boolean
}

export interface CartItem {
  id: string
  productId: string
  restaurantId: string
  name: string
  price: number
  image: string
  quantity: number
  customizations?: {
    [customizationId: string]: string[]
  }
  specialInstructions?: string
}

export interface Order {
  id: string
  customerId: string
  restaurantId: string
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  tax: number
  total: number
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered" | "cancelled"
  paymentMethod: "cash" | "card" | "digital"
  paymentStatus: "pending" | "paid" | "failed"
  deliveryAddress?: Address
  customerInfo: CustomerInfo
  orderDate: Date
  estimatedDeliveryTime?: Date
  actualDeliveryTime?: Date
  notes?: string
  tableNumber?: string
  waiterId?: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface CustomerInfo {
  name: string
  phone: string
  email?: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  addresses: Address[]
  favoriteRestaurants: string[]
  orderHistory: string[]
  preferences: {
    dietary: string[]
    allergies: string[]
    spiceLevel: "mild" | "medium" | "hot"
  }
  loyaltyPoints: number
  createdAt: Date
}

export interface Promotion {
  id: string
  restaurantId: string
  title: string
  description: string
  type: "discount" | "bogo" | "free_delivery" | "combo"
  value: number
  minOrderAmount?: number
  validFrom: Date
  validUntil: Date
  isActive: boolean
  applicableProducts?: string[]
  maxUses?: number
  currentUses: number
  code?: string
}

export interface Waiter {
  id: string
  restaurantId: string
  name: string
  email: string
  phone: string
  isActive: boolean
  tables: string[]
  currentOrders: string[]
  totalOrdersServed: number
  rating: number
  createdAt: Date
}

export interface Table {
  id: string
  restaurantId: string
  number: string
  capacity: number
  isOccupied: boolean
  currentOrderId?: string
  waiterId?: string
  qrCode: string
}

export interface Inventory {
  id: string
  restaurantId: string
  productId: string
  currentStock: number
  minStock: number
  maxStock: number
  unit: string
  lastUpdated: Date
  supplier?: string
  cost: number
}

export interface Consortium {
  id: string
  name: string
  email: string
  phone: string
  address: string
  restaurants: string[]
  isActive: boolean
  subscriptionPlan: "basic" | "premium" | "enterprise"
  subscriptionExpiry: Date
  createdAt: Date
}

export interface Admin {
  id: string
  name: string
  email: string
  role: "super_admin" | "admin"
  permissions: string[]
  isActive: boolean
  createdAt: Date
}
