"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, X } from "lucide-react"

interface HeroSectionProps {
  onSearch: (query: string) => void
  searchQuery?: string
}

export function HeroSection({ onSearch, searchQuery = "" }: HeroSectionProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)
  const [activeTab, setActiveTab] = useState("delivery")

  useEffect(() => {
    setLocalSearchQuery(searchQuery)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search submitted:", localSearchQuery)
    onSearch(localSearchQuery.trim())
  }

  const handleClearSearch = () => {
    setLocalSearchQuery("")
    onSearch("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value)
  }

  return (
    <section className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 min-h-[500px] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-200 rounded-full opacity-30" />
      <div className="absolute -left-20 top-1/3 w-[200px] h-[200px] bg-orange-300 rounded-full opacity-30" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Are you starving?</h1>
            <p className="text-xl mb-8 opacity-90">Within a few clicks, find meals that are accessible near you</p>

            <div className="bg-white rounded-lg p-6 max-w-md">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="delivery" className="text-orange-500">
                    🚚 Delivery
                  </TabsTrigger>
                  <TabsTrigger value="pickup" className="text-gray-600">
                    📦 Pickup
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="search-bar"
                    type="text"
                    placeholder="What do you like to eat today?"
                    value={localSearchQuery}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 border-gray-200 text-black"
                  />
                  {localSearchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  🔍 Find Meal
                </Button>
              </form>

              {searchQuery && (
                <div className="mt-2 text-sm text-gray-600">
                  Searching for: <span className="font-semibold">"{searchQuery}"</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/hero-food.png" alt="Delicious noodle bowl" className="w-85 h-90 object-contain rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
