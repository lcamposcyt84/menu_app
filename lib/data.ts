export interface SideOption {
  name: string
  extraCost?: number
}

export interface SideGroup {
  category: string
  required: boolean
  options: SideOption[]
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  isPopular?: boolean
  sides?: SideGroup[]
  available?: boolean
  preparationTime?: number
  image?: string
  category?: string
}

export interface Restaurant {
  id: string
  name: string
  description: string
  emoji: string
  estimatedTime: string
  rating: number
  categories: string[]
  menu: MenuItem[]
  isOpen?: boolean
  openHours?: string
  phone?: string
}

export const restaurants: Restaurant[] = [
  {
    id: "al-andalus",
    name: "Al Andalus",
    description: "Pizzas árabes, shawarmas y knafe - dulces árabes exquisitos",
    emoji: "🥙",
    estimatedTime: "15-20 min",
    rating: 4.9,
    isOpen: true,
    openHours: "10:00 AM - 10:00 PM",
    phone: "0414-123-4567",
    categories: ["Árabe", "Shawarma", "Pizza Árabe", "Dulces", "Halal"],
    menu: [
      {
        id: "shawarma-pollo-andalus",
        name: "Shawarma de Pollo Al Andalus",
        description:
          "Jugoso pollo marinado con especias árabes tradicionales, servido en pan pita con vegetales frescos",
        price: 12,
        isPopular: true,
        available: true,
        preparationTime: 15,
        category: "Plato Principal",
        sides: [
          {
            category: "Contorno",
            required: true,
            options: [
              { name: "Papas fritas" },
              { name: "Arroz árabe" },
              { name: "Tabbouleh", extraCost: 2 },
              { name: "Hummus", extraCost: 1.5 },
            ],
          },
          {
            category: "Salsa",
            required: false,
            options: [{ name: "Tahini" }, { name: "Ajo" }, { name: "Picante" }],
          },
        ],
      },
      {
        id: "shawarma-carne-andalus",
        name: "Shawarma de Carne Al Andalus",
        description: "Tierna carne de res con especias tradicionales árabes, acompañada de vegetales y salsas",
        price: 14,
        isPopular: true,
        available: true,
        preparationTime: 18,
        category: "Plato Principal",
        sides: [
          {
            category: "Contorno",
            required: true,
            options: [{ name: "Papas fritas" }, { name: "Arroz árabe" }, { name: "Tabbouleh", extraCost: 2 }],
          },
        ],
      },
      {
        id: "pizza-arabe-carne-andalus",
        name: "Pizza Árabe de Carne Al Andalus",
        description: "Pizza tradicional árabe con carne especiada, cebolla y especias del medio oriente",
        price: 16,
        available: true,
        preparationTime: 20,
        category: "Pizza Árabe",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [
              { name: 'Personal (8")' },
              { name: 'Mediana (12")', extraCost: 4 },
              { name: 'Familiar (16")', extraCost: 8 },
            ],
          },
        ],
      },
      {
        id: "knafe-andalus",
        name: "Knafe Al Andalus",
        description: "Exquisito dulce árabe tradicional con queso, masa kataifi y almíbar de azahar",
        price: 8,
        isPopular: true,
        available: true,
        preparationTime: 10,
        category: "Postre",
      },
    ],
  },
  {
    id: "muna",
    name: "Muna",
    description: "Pinchos árabes y comidas árabes variadas - tabbouleh, papas, salsa de ajo",
    emoji: "🍢",
    estimatedTime: "12-18 min",
    rating: 4.7,
    isOpen: true,
    openHours: "11:00 AM - 9:00 PM",
    phone: "0424-234-5678",
    categories: ["Árabe", "Pinchos", "Tabbouleh", "Halal"],
    menu: [
      {
        id: "pinchos-pollo-muna",
        name: "Pinchos de Pollo Muna",
        description: "Jugosos pinchos de pollo marinados con especias árabes, servidos con arroz y vegetales",
        price: 13,
        isPopular: true,
        available: true,
        preparationTime: 15,
        category: "Plato Principal",
        sides: [
          {
            category: "Contorno",
            required: true,
            options: [{ name: "Arroz árabe" }, { name: "Papas fritas" }, { name: "Tabbouleh", extraCost: 2 }],
          },
          {
            category: "Salsa",
            required: false,
            options: [{ name: "Salsa de ajo" }, { name: "Tahini" }, { name: "Picante" }],
          },
        ],
      },
      {
        id: "pinchos-carne-muna",
        name: "Pinchos de Carne Muna",
        description: "Tiernos pinchos de carne de res con especias tradicionales del medio oriente",
        price: 15,
        available: true,
        preparationTime: 18,
        category: "Plato Principal",
        sides: [
          {
            category: "Contorno",
            required: true,
            options: [{ name: "Arroz árabe" }, { name: "Papas fritas" }, { name: "Tabbouleh", extraCost: 2 }],
          },
        ],
      },
      {
        id: "tabbouleh-muna",
        name: "Tabbouleh Muna",
        description: "Fresca ensalada árabe con perejil, tomate, cebolla, bulgur y limón",
        price: 8,
        isPopular: true,
        available: true,
        preparationTime: 5,
        category: "Ensalada",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [{ name: "Individual" }, { name: "Para compartir", extraCost: 4 }],
          },
        ],
      },
      {
        id: "papas-salsa-ajo-muna",
        name: "Papas con Salsa de Ajo Muna",
        description: "Papas doradas acompañadas de nuestra especial salsa de ajo casera",
        price: 6,
        available: true,
        preparationTime: 10,
        category: "Acompañante",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [{ name: "Pequeña" }, { name: "Mediana", extraCost: 2 }, { name: "Grande", extraCost: 4 }],
          },
        ],
      },
    ],
  },
  {
    id: "pizza-jardin",
    name: "Pizza Jardín",
    description: "Pizzas italianas auténticas y marisquerías frescas del mediterráneo",
    emoji: "🍕",
    estimatedTime: "20-25 min",
    rating: 4.6,
    isOpen: true,
    openHours: "12:00 PM - 11:00 PM",
    phone: "0412-345-6789",
    categories: ["Italiana", "Pizza", "Mariscos", "Mediterránea"],
    menu: [
      {
        id: "margherita-jardin",
        name: "Pizza Margherita",
        description: "Clásica pizza italiana con salsa de tomate San Marzano, mozzarella fresca y albahaca",
        price: 16,
        isPopular: true,
        available: true,
        preparationTime: 20,
        category: "Pizza",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [
              { name: 'Personal (8")' },
              { name: 'Mediana (12")', extraCost: 4 },
              { name: 'Familiar (16")', extraCost: 8 },
            ],
          },
        ],
      },
      {
        id: "pizza-marinara-jardin",
        name: "Pizza Marinara",
        description: "Pizza con mariscos frescos, camarones, calamares y mejillones sobre base de tomate",
        price: 24,
        isPopular: true,
        available: true,
        preparationTime: 25,
        category: "Pizza",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [
              { name: 'Personal (8")' },
              { name: 'Mediana (12")', extraCost: 5 },
              { name: 'Familiar (16")', extraCost: 10 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "maacaruna",
    name: "Maacaruna",
    description: "Pastas italianas auténticas - boloñesa, carbonara, pasta a la carreta y más",
    emoji: "🍝",
    estimatedTime: "15-22 min",
    rating: 4.8,
    isOpen: true,
    openHours: "11:30 AM - 10:30 PM",
    phone: "0416-456-7890",
    categories: ["Italiana", "Pasta", "Boloñesa", "Carbonara"],
    menu: [
      {
        id: "pasta-bolognesa-maacaruna",
        name: "Pasta Boloñesa",
        description: "Clásica pasta italiana con salsa boloñesa tradicional, carne molida y tomate San Marzano",
        price: 14,
        isPopular: true,
        available: true,
        preparationTime: 18,
        category: "Pasta",
        sides: [
          {
            category: "Tipo de Pasta",
            required: true,
            options: [
              { name: "Spaghetti" },
              { name: "Penne" },
              { name: "Fettuccine", extraCost: 1 },
              { name: "Rigatoni", extraCost: 1 },
            ],
          },
        ],
      },
      {
        id: "pasta-carbonara-maacaruna",
        name: "Pasta Carbonara",
        description: "Auténtica carbonara romana con huevo, panceta, queso pecorino y pimienta negra",
        price: 16,
        isPopular: true,
        available: true,
        preparationTime: 15,
        category: "Pasta",
        sides: [
          {
            category: "Tipo de Pasta",
            required: true,
            options: [{ name: "Spaghetti" }, { name: "Fettuccine", extraCost: 1 }, { name: "Linguine", extraCost: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: "zona-bodegon",
    name: "Zona Bodegón",
    description: "Bebidas gaseosas, cócteles refrescantes y chucherías variadas",
    emoji: "🍹",
    estimatedTime: "5-10 min",
    rating: 4.5,
    isOpen: true,
    openHours: "9:00 AM - 11:00 PM",
    phone: "0426-567-8901",
    categories: ["Bebidas", "Cócteles", "Refrescos", "Snacks"],
    menu: [
      {
        id: "coca-cola-bodegon",
        name: "Coca Cola",
        description: "Refrescante Coca Cola bien fría",
        price: 3,
        available: true,
        preparationTime: 2,
        category: "Bebida",
        sides: [
          {
            category: "Tamaño",
            required: true,
            options: [
              { name: "Lata 355ml" },
              { name: "Botella 500ml", extraCost: 1 },
              { name: "Botella 1.5L", extraCost: 3 },
            ],
          },
        ],
      },
      {
        id: "mojito-bodegon",
        name: "Mojito",
        description: "Refrescante cóctel con menta, limón, azúcar y soda",
        price: 8,
        isPopular: true,
        available: true,
        preparationTime: 5,
        category: "Cóctel",
        sides: [
          {
            category: "Tipo",
            required: true,
            options: [{ name: "Clásico" }, { name: "De fresa", extraCost: 1 }, { name: "De maracuyá", extraCost: 1 }],
          },
        ],
      },
    ],
  },
]

// Utility functions that the home page and other components need
export const getRestaurantById = (id: string): Restaurant | null => {
  try {
    return restaurants.find((restaurant) => restaurant.id === id) || null
  } catch (error) {
    console.error("Error finding restaurant:", error)
    return null
  }
}

export const getMenuItemById = (restaurantId: string, itemId: string): MenuItem | null => {
  try {
    const restaurant = getRestaurantById(restaurantId)
    if (!restaurant) return null
    return restaurant.menu.find((item) => item.id === itemId) || null
  } catch (error) {
    console.error("Error finding menu item:", error)
    return null
  }
}

export const getAvailableRestaurants = (): Restaurant[] => {
  try {
    return restaurants.filter((restaurant) => restaurant.isOpen !== false)
  } catch (error) {
    console.error("Error filtering available restaurants:", error)
    return restaurants
  }
}

export const getAvailableMenuItems = (restaurantId: string): MenuItem[] => {
  try {
    const restaurant = getRestaurantById(restaurantId)
    if (!restaurant) return []
    return restaurant.menu.filter((item) => item.available !== false)
  } catch (error) {
    console.error("Error filtering available menu items:", error)
    return []
  }
}

// Additional utility functions that might be needed
export const getProductAvailabilityWithInventory = (restaurantId: string, productId: string) => {
  try {
    // Simplified version - just check if the item is marked as available
    const item = getMenuItemById(restaurantId, productId)
    return {
      available: item?.available !== false,
      quantity: item?.available ? 10 : 0, // Mock quantity
    }
  } catch (error) {
    console.error("Error checking product availability:", error)
    return { available: false, quantity: 0 }
  }
}

export const decrementProductStock = (restaurantId: string, productId: string, quantity: number) => {
  try {
    // Simplified version - in a real app this would update actual inventory
    console.log(`Decrementing stock for ${productId} by ${quantity}`)
    return true
  } catch (error) {
    console.error("Error decrementing product stock:", error)
    return false
  }
}
