"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface DeleteFoodModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  foodName: string
  isSubmitting?: boolean
}

export function DeleteFoodModal({ isOpen, onClose, onConfirm, foodName, isSubmitting = false }: DeleteFoodModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0">
        <div className="bg-white rounded-lg border-4 border-green-400">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-xl font-bold text-center text-orange-500">Delete Meal</DialogTitle>
          </DialogHeader>

          <div className="px-6 pb-6">
            <p className="text-center text-gray-600 mb-6">
              Are you sure you want to delete this meal? Actions cannot be reversed.
            </p>

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={onConfirm}
                disabled={isSubmitting}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
              >
                {isSubmitting ? "Deleting..." : "Yes"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300 py-2 rounded-md font-medium"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
