"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { FoodFormData } from "@/lib/food-service"

interface AddFoodModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (food: FoodFormData) => void
  isSubmitting?: boolean
}

interface FormErrors {
  food_name?: string
  food_rating?: string
  food_image?: string
  restaurant_name?: string
  restaurant_logo?: string
  restaurant_status?: string
}

export function AddFoodModal({ isOpen, onClose, onSubmit, isSubmitting = false }: AddFoodModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    avatar: "",
    restaurant_name: "",
    logo: "",
    open: true,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.food_name = "Food name is required"
    }

    if (!formData.rating.trim()) {
      newErrors.food_rating = "Food Rating must be a number"
    } else if (isNaN(Number(formData.rating))) {
      newErrors.food_rating = "Food Rating must be a number"
    }

    if (!formData.avatar.trim()) {
      newErrors.food_image = "Food Image URL is required"
    }

    if (!formData.restaurant_name.trim()) {
      newErrors.restaurant_name = "Restaurant Name is required"
    }

    if (!formData.logo.trim()) {
      newErrors.restaurant_logo = "Restaurant Logo URL is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit({
        name: formData.name,
        rating: Number(formData.rating),
        avatar: formData.avatar,
        restaurant_name: formData.restaurant_name,
        logo: formData.logo,
        open: formData.open,
      })

      // Reset form
      setFormData({
        name: "",
        rating: "",
        avatar: "",
        restaurant_name: "",
        logo: "",
        open: true,
      })
      setErrors({})
    }
  }

  const handleClose = () => {
    setFormData({
      name: "",
      rating: "",
      avatar: "",
      restaurant_name: "",
      logo: "",
      open: true,
    })
    setErrors({})
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[400px] p-0">
        <div className="bg-white rounded-lg">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-xl font-bold text-center text-orange-500">Add a meal</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="food_name" className="text-sm text-gray-600">
                Food name
              </Label>
              <Input
                id="food_name"
                name="food_name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=""
                className="border-gray-200"
              />
              {errors.food_name && (
                <p id="food-name-error" className="text-xs text-red-500">
                  {errors.food_name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="food_rating" className="text-sm text-gray-600">
                Food rating
              </Label>
              <Input
                id="food_rating"
                name="food_rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                placeholder=""
                className="border-gray-200"
              />
              {errors.food_rating && (
                <p id="food-rating-error" className="text-xs text-red-500">
                  {errors.food_rating}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="food_image" className="text-sm text-gray-600">
                Food image (URL)
              </Label>
              <Input
                id="food_image"
                name="food_image"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                placeholder=""
                className="border-gray-200"
              />
              {errors.food_image && (
                <p id="food-image-error" className="text-xs text-red-500">
                  {errors.food_image}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurant_name" className="text-sm text-gray-600">
                Restaurant name
              </Label>
              <Input
                id="restaurant_name"
                name="restaurant_name"
                value={formData.restaurant_name}
                onChange={(e) => setFormData({ ...formData, restaurant_name: e.target.value })}
                placeholder=""
                className="border-gray-200"
              />
              {errors.restaurant_name && (
                <p id="restaurant-name-error" className="text-xs text-red-500">
                  {errors.restaurant_name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurant_logo" className="text-sm text-gray-600">
                Restaurant logo (URL)
              </Label>
              <Input
                id="restaurant_logo"
                name="restaurant_logo"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                placeholder=""
                className="border-gray-200"
              />
              {errors.restaurant_logo && (
                <p id="restaurant-logo-error" className="text-xs text-red-500">
                  {errors.restaurant_logo}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurant_status" className="text-sm text-gray-600">
                Restaurant status (Open/close)
              </Label>
              <Select
                name="restaurant_status"
                value={formData.open ? "open" : "closed"}
                onValueChange={(value) => setFormData({ ...formData, open: value === "open" })}
              >
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open Now</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              {errors.restaurant_status && (
                <p id="restaurant-status-error" className="text-xs text-red-500">
                  {errors.restaurant_status}
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
              >
                {isSubmitting ? "Adding..." : "Add"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300 py-2 rounded-md font-medium"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
