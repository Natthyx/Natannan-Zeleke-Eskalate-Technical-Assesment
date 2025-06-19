"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  onAddFood: () => void
}

export function Header({ onAddFood }: HeaderProps) {
  return (
    <header className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-800">🍔 FoodWagen</div>
          </div>
          <Button onClick={onAddFood} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Add Meal
          </Button>
        </div>
      </div>
    </header>
  )
}
