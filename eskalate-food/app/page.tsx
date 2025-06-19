"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedMeals } from "@/components/featured-meals"
import { Footer } from "@/components/footer"
import { AddFoodModal } from "@/components/add-food-modal"
import { EditFoodModal } from "@/components/edit-food-modal"
import { DeleteFoodModal } from "@/components/delete-food-modal"
import { SuccessModal } from "@/components/success-modal"
import { foodService, type Food, type FoodFormData } from "@/lib/food-service"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const [foods, setFoods] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    loadFoods()
  }, [])

  const showSuccess = (message: string) => {
    setSuccessMessage(message)
    setIsSuccessModalOpen(true)
  }

  const loadFoods = async () => {
    try {
      setLoading(true)
      console.log("Loading foods...")
      const data = await foodService.getFoods()
      console.log("Loaded foods:", data)
      setFoods(data)
      setSearchQuery("")
    } catch (error) {
      console.error("Failed to load foods:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load foods",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    try {
      setLoading(true)
      setSearchQuery(query)
      console.log("Searching for:", query)

      if (!query.trim()) {
        const data = await foodService.getFoods()
        setFoods(data)
      } else {
        const data = await foodService.searchFoods(query.trim())
        setFoods(data)
      }

      console.log("Search completed")
    } catch (error) {
      console.error("Search failed:", error)
      toast({
        title: "Search Error",
        description: error instanceof Error ? error.message : "Failed to search foods",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAddFood = async (foodData: FoodFormData) => {
    try {
      setIsSubmitting(true)
      console.log("Adding food:", foodData)

      await foodService.createFood(foodData)
      await loadFoods()

      setIsAddModalOpen(false)
      showSuccess("Meal added successfully!")

      console.log("Food added successfully")
    } catch (error) {
      console.error("Failed to add food:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add food",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditFood = async (foodData: FoodFormData) => {
    if (!selectedFood) return

    try {
      setIsSubmitting(true)
      console.log("Editing food:", selectedFood.id, foodData)

      await foodService.updateFood(selectedFood.id, foodData)
      await loadFoods()

      setIsEditModalOpen(false)
      setSelectedFood(null)
      showSuccess("Meal updated successfully!")

      console.log("Food updated successfully")
    } catch (error) {
      console.error("Failed to update food:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update food",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteFood = async () => {
    if (!selectedFood) return

    try {
      setIsSubmitting(true)
      console.log("Deleting food:", selectedFood.id)

      await foodService.deleteFood(selectedFood.id)
      await loadFoods()

      setIsDeleteModalOpen(false)
      setSelectedFood(null)
      showSuccess("Meal deleted successfully!")

      console.log("Food deleted successfully")
    } catch (error) {
      console.error("Failed to delete food:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete food",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const openEditModal = (food: Food) => {
    console.log("Opening edit modal for:", food)
    setSelectedFood(food)
    setIsEditModalOpen(true)
  }

  const openDeleteModal = (food: Food) => {
    console.log("Opening delete modal for:", food)
    setSelectedFood(food)
    setIsDeleteModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAddFood={() => setIsAddModalOpen(true)} />
      <HeroSection onSearch={handleSearch} searchQuery={searchQuery} />
      <FeaturedMeals
        foods={foods}
        loading={loading}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
        searchQuery={searchQuery}
      />
      <Footer />

      <AddFoodModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddFood}
        isSubmitting={isSubmitting}
      />

      <EditFoodModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedFood(null)
        }}
        onSubmit={handleEditFood}
        food={selectedFood}
        isSubmitting={isSubmitting}
      />

      <DeleteFoodModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setSelectedFood(null)
        }}
        onConfirm={handleDeleteFood}
        foodName={selectedFood?.name || ""}
        isSubmitting={isSubmitting}
      />

      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} message={successMessage} />
    </div>
  )
}
