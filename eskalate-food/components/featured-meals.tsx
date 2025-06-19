import { FoodCard } from "@/components/food-card"
import { Button } from "@/components/ui/button"
import type { Food } from "@/lib/food-service"

interface FeaturedMealsProps {
  foods: Food[]
  loading: boolean
  onEdit: (food: Food) => void
  onDelete: (food: Food) => void
  searchQuery?: string
}

export function FeaturedMeals({ foods, loading, onEdit, onDelete, searchQuery }: FeaturedMealsProps) {
  const getTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`
    }
    return "Featured Meals"
  }

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{getTitle()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="text-gray-500">Loading delicious meals...</div>
          </div>
        </div>
      </section>
    )
  }

  if (foods.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{getTitle()}</h2>
          <div className="text-center py-12">
            <div className="empty-state-message text-gray-500 text-lg mb-4">
              {searchQuery ? `No meals found for "${searchQuery}"` : "No items available"}
            </div>
            {searchQuery && (
              <div className="text-gray-400 text-sm">Try searching for something else or browse all meals</div>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{getTitle()}</h2>

        {searchQuery && (
          <div className="text-center mb-8">
            <div className="text-gray-600">
              Found {foods.length} meal{foods.length !== 1 ? "s" : ""} matching your search
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>

        {!searchQuery && (
          <div className="text-center">
            <Button
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500 px-8 py-2"
            >
              Load more →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
