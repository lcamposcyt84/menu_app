import type {
  Restaurant,
  Product,
  Promotion,
  Customer,
  Order,
  Waiter,
  Table,
  Inventory,
  Consortium,
  Admin,
} from "@/types"

// Mock data for restaurants
export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Parrilla Criolla",
    description: "Auténtica comida criolla con los mejores cortes de carne",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 3500,
    category: "Parrilla",
    isOpen: true,
    address: "Calle 85 #15-20, Bogotá",
    phone: "+57 1 234-5678",
    email: "info@laparrillacriolla.com",
    operatingHours: {
      monday: { open: "11:00", close: "22:00", isOpen: true },
      tuesday: { open: "11:00", close: "22:00", isOpen: true },
      wednesday: { open: "11:00", close: "22:00", isOpen: true },
      thursday: { open: "11:00", close: "22:00", isOpen: true },
      friday: { open: "11:00", close: "23:00", isOpen: true },
      saturday: { open: "11:00", close: "23:00", isOpen: true },
      sunday: { open: "12:00", close: "21:00", isOpen: true },
    },
    tags: ["Parrilla", "Carne", "Tradicional"],
    promotions: [],
  },
  {
    id: "2",
    name: "Sushi Zen",
    description: "Sushi fresco y auténtico preparado por chefs japoneses",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: 4000,
    category: "Japonesa",
    isOpen: true,
    address: "Carrera 11 #93-15, Bogotá",
    phone: "+57 1 345-6789",
    email: "info@sushizen.com",
    operatingHours: {
      monday: { open: "12:00", close: "22:00", isOpen: true },
      tuesday: { open: "12:00", close: "22:00", isOpen: true },
      wednesday: { open: "12:00", close: "22:00", isOpen: true },
      thursday: { open: "12:00", close: "22:00", isOpen: true },
      friday: { open: "12:00", close: "23:00", isOpen: true },
      saturday: { open: "12:00", close: "23:00", isOpen: true },
      sunday: { open: "12:00", close: "21:00", isOpen: true },
    },
    tags: ["Sushi", "Japonés", "Fresco"],
    promotions: [],
  },
  {
    id: "3",
    name: "Pizza Napoletana",
    description: "Pizzas artesanales al horno de leña con ingredientes importados",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 3000,
    category: "Italiana",
    isOpen: true,
    address: "Calle 70 #10-25, Bogotá",
    phone: "+57 1 456-7890",
    email: "info@pizzanapoletana.com",
    operatingHours: {
      monday: { open: "17:00", close: "23:00", isOpen: true },
      tuesday: { open: "17:00", close: "23:00", isOpen: true },
      wednesday: { open: "17:00", close: "23:00", isOpen: true },
      thursday: { open: "17:00", close: "23:00", isOpen: true },
      friday: { open: "17:00", close: "24:00", isOpen: true },
      saturday: { open: "12:00", close: "24:00", isOpen: true },
      sunday: { open: "12:00", close: "22:00", isOpen: true },
    },
    tags: ["Pizza", "Italiana", "Artesanal"],
    promotions: [],
  },
]

// Mock data for products
export const products: Product[] = [
  {
    id: "1",
    restaurantId: "1",
    name: "Churrasco Argentino",
    description: "Jugoso churrasco de 300g con chimichurri, papas criollas y ensalada",
    price: 28000,
    image: "/placeholder.svg?height=200&width=300",
    category: "Carnes",
    isAvailable: true,
    preparationTime: 20,
    ingredients: ["Carne de res", "Chimichurri", "Papas criollas", "Ensalada mixta"],
    allergens: [],
    tags: ["Parrilla", "Carne"],
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "2",
    restaurantId: "2",
    name: "Sashimi Variado",
    description: "Selección de sashimi fresco: salmón, atún y pargo",
    price: 35000,
    image: "/placeholder.svg?height=200&width=300",
    category: "Sashimi",
    isAvailable: true,
    preparationTime: 15,
    ingredients: ["Salmón fresco", "Atún", "Pargo", "Wasabi", "Jengibre"],
    allergens: ["Pescado"],
    tags: ["Sashimi", "Fresco"],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "3",
    restaurantId: "3",
    name: "Pizza Margherita",
    description: "Pizza clásica con tomate San Marzano, mozzarella di bufala y albahaca",
    price: 22000,
    image: "/placeholder.svg?height=200&width=300",
    category: "Pizzas",
    isAvailable: true,
    preparationTime: 18,
    ingredients: ["Masa artesanal", "Tomate San Marzano", "Mozzarella di bufala", "Albahaca"],
    allergens: ["Gluten", "Lácteos"],
    tags: ["Pizza", "Clásica"],
    rating: 4.7,
    reviewCount: 234,
  },
]

// Mock data for promotions
export const promotions: Promotion[] = [
  {
    id: "1",
    restaurantId: "1",
    title: "2x1 en Parrilladas",
    description: "Lleva 2 parrilladas por el precio de 1. Válido de lunes a miércoles.",
    type: "bogo",
    value: 50,
    validFrom: new Date("2024-01-01"),
    validUntil: new Date("2024-12-31"),
    isActive: true,
    currentUses: 45,
    maxUses: 100,
  },
  {
    id: "2",
    restaurantId: "2",
    title: "Descuento 20% Sushi",
    description: "20% de descuento en todos los rolls de sushi",
    type: "discount",
    value: 20,
    minOrderAmount: 30000,
    validFrom: new Date("2024-01-01"),
    validUntil: new Date("2024-12-31"),
    isActive: true,
    currentUses: 78,
    code: "SUSHI20",
  },
]

// Mock data for customers
export const customers: Customer[] = [
  {
    id: "1",
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    phone: "+57 300 123 4567",
    addresses: [
      {
        street: "Calle 100 #15-20",
        city: "Bogotá",
        state: "Cundinamarca",
        zipCode: "110111",
        country: "Colombia",
      },
    ],
    favoriteRestaurants: ["1", "2"],
    orderHistory: ["1", "2", "3"],
    preferences: {
      dietary: ["Sin gluten"],
      allergies: ["Mariscos"],
      spiceLevel: "medium",
    },
    loyaltyPoints: 150,
    createdAt: new Date("2024-01-15"),
  },
]

// Mock data for orders
export const orders: Order[] = [
  {
    id: "1",
    customerId: "1",
    restaurantId: "1",
    items: [
      {
        id: "1",
        productId: "1",
        restaurantId: "1",
        name: "Churrasco Argentino",
        price: 28000,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 1,
      },
    ],
    subtotal: 28000,
    deliveryFee: 3500,
    tax: 2240,
    total: 33740,
    status: "delivered",
    paymentMethod: "card",
    paymentStatus: "paid",
    customerInfo: {
      name: "Juan Pérez",
      phone: "+57 300 123 4567",
      email: "juan.perez@email.com",
    },
    orderDate: new Date("2024-01-20T19:30:00"),
    estimatedDeliveryTime: new Date("2024-01-20T20:15:00"),
    actualDeliveryTime: new Date("2024-01-20T20:10:00"),
  },
]

// Mock data for waiters
export const waiters: Waiter[] = [
  {
    id: "1",
    restaurantId: "1",
    name: "María González",
    email: "maria.gonzalez@laparrilla.com",
    phone: "+57 300 234 5678",
    isActive: true,
    tables: ["1", "2", "3"],
    currentOrders: ["1"],
    totalOrdersServed: 245,
    rating: 4.8,
    createdAt: new Date("2024-01-01"),
  },
]

// Mock data for tables
export const tables: Table[] = [
  {
    id: "1",
    restaurantId: "1",
    number: "Mesa 1",
    capacity: 4,
    isOccupied: false,
    qrCode: "QR_MESA_1_REST_1",
  },
  {
    id: "2",
    restaurantId: "1",
    number: "Mesa 2",
    capacity: 2,
    isOccupied: true,
    currentOrderId: "1",
    waiterId: "1",
    qrCode: "QR_MESA_2_REST_1",
  },
]

// Mock data for inventory
export const inventory: Inventory[] = [
  {
    id: "1",
    restaurantId: "1",
    productId: "1",
    currentStock: 25,
    minStock: 10,
    maxStock: 50,
    unit: "kg",
    lastUpdated: new Date(),
    supplier: "Carnes Premium SAS",
    cost: 15000,
  },
]

// Mock data for consortiums
export const consortiums: Consortium[] = [
  {
    id: "1",
    name: "Grupo Gastronómico Bogotá",
    email: "admin@grupogastronomico.com",
    phone: "+57 1 234 5678",
    address: "Carrera 15 #85-20, Bogotá",
    restaurants: ["1", "2", "3"],
    isActive: true,
    subscriptionPlan: "premium",
    subscriptionExpiry: new Date("2024-12-31"),
    createdAt: new Date("2024-01-01"),
  },
]

// Mock data for admins
export const admins: Admin[] = [
  {
    id: "1",
    name: "Admin Principal",
    email: "admin@menuya.com",
    role: "super_admin",
    permissions: ["all"],
    isActive: true,
    createdAt: new Date("2024-01-01"),
  },
]

// Helper functions
export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find((restaurant) => restaurant.id === id)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByRestaurant = (restaurantId: string): Product[] => {
  return products.filter((product) => product.restaurantId === restaurantId)
}

export const getPromotionsByRestaurant = (restaurantId: string): Promotion[] => {
  return promotions.filter((promotion) => promotion.restaurantId === restaurantId)
}

export const getOrdersByCustomer = (customerId: string): Order[] => {
  return orders.filter((order) => order.customerId === customerId)
}

export const getOrdersByRestaurant = (restaurantId: string): Order[] => {
  return orders.filter((order) => order.restaurantId === restaurantId)
}

export const getWaitersByRestaurant = (restaurantId: string): Waiter[] => {
  return waiters.filter((waiter) => waiter.restaurantId === restaurantId)
}

export const getTablesByRestaurant = (restaurantId: string): Table[] => {
  return tables.filter((table) => table.restaurantId === restaurantId)
}

export const getInventoryByRestaurant = (restaurantId: string): Inventory[] => {
  return inventory.filter((item) => item.restaurantId === restaurantId)
}
