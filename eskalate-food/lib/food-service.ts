export interface Food {
  id: string
  name: string
  avatar: string // This is the food image
  rating: string // This comes as string from API
  open: boolean // This is boolean, not "Open Now"/"Closed"
  logo: string // This is the restaurant logo
  createdAt: string
  restaurant_name?: string // This might not exist in API, so optional
}

// For form submissions, we'll use this interface
export interface FoodFormData {
  name: string
  avatar: string
  rating: number
  open: boolean
  logo: string
  restaurant_name: string
}

const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io"

export const foodService = {
  async getFoods(): Promise<Food[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch foods: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Fetched foods:", data)
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error("Error fetching foods:", error)
      throw new Error("Failed to load foods. Please try again.")
    }
  },

  async createFood(food: FoodFormData): Promise<Food> {
    try {
      console.log("Creating food:", food)

      // Transform form data to API format
      const apiData = {
        name: food.name,
        avatar: food.avatar,
        rating: food.rating.toString(),
        open: food.open,
        logo: food.logo,
      }

      const response = await fetch(`${API_BASE_URL}/Food`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      })

      if (!response.ok) {
        throw new Error(`Failed to create food: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Created food:", data)
      return data
    } catch (error) {
      console.error("Error creating food:", error)
      throw new Error("Failed to add food. Please try again.")
    }
  },

  async updateFood(id: string, food: FoodFormData): Promise<Food> {
    try {
      console.log("Updating food:", id, food)

      // Transform form data to API format
      const apiData = {
        name: food.name,
        avatar: food.avatar,
        rating: food.rating.toString(),
        open: food.open,
        logo: food.logo,
      }

      const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      })

      if (!response.ok) {
        throw new Error(`Failed to update food: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Updated food:", data)
      return data
    } catch (error) {
      console.error("Error updating food:", error)
      throw new Error("Failed to update food. Please try again.")
    }
  },

  async deleteFood(id: string): Promise<void> {
    try {
      console.log("Deleting food:", id)

      const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to delete food: ${response.status} ${response.statusText}`)
      }

      console.log("Deleted food successfully")
    } catch (error) {
      console.error("Error deleting food:", error)
      throw new Error("Failed to delete food. Please try again.")
    }
  },

  async searchFoods(searchParam: string): Promise<Food[]> {
    try {
      console.log("Searching foods with param:", searchParam)

      const response = await fetch(`${API_BASE_URL}/Food?name=${encodeURIComponent(searchParam)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to search foods: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Search results:", data)
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error("Error searching foods:", error)
      try {
        const allFoods = await this.getFoods()
        const filtered = allFoods.filter((food) => food.name.toLowerCase().includes(searchParam.toLowerCase()))
        console.log("Local search results:", filtered)
        return filtered
      } catch (fallbackError) {
        throw new Error("Failed to search foods. Please try again.")
      }
    }
  },
}
