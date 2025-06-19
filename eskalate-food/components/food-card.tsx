"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MoreVertical, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Food } from "@/lib/food-service"

interface FoodCardProps {
  food: Food
  onEdit: (food: Food) => void
  onDelete: (food: Food) => void
}

export function FoodCard({ food, onEdit, onDelete }: FoodCardProps) {
  const isOpen = food.open
  const displayRating = food.rating || "0"

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={food.avatar || "/placeholder.svg?height=200&width=300"}
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
          ${displayRating}
        </div>
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onEdit(food)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Food
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDelete(food)} className="text-red-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Food
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={food.logo || "/placeholder.svg?height=24&width=24"}
              alt="Restaurant logo"
              className="w-6 h-6 rounded"
            />
            <span className="restaurant-name font-semibold text-gray-800">{food.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="restaurant-rating text-sm text-gray-600">{displayRating}</span>
        </div>

        <div className="restaurant-price text-lg font-bold text-gray-800 mb-2">
          {food.restaurant_name || "Restaurant"}
        </div>

        <Badge
          variant={isOpen ? "default" : "secondary"}
          className={`restaurant-status ${
            isOpen ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"
          }`}
        >
          {isOpen ? "Open Now" : "Closed"}
        </Badge>
      </CardContent>
    </Card>
  )
}
