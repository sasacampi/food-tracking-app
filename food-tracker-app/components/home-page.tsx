import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CircularProgressBar } from "@/components/circular-progress-bar"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Today</h1>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          March 1, 2025
        </Badge>
      </div>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Daily Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-4">
            <CircularProgressBar percentage={65} size={180} strokeWidth={12} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Consumed</p>
              <p className="text-xl font-semibold text-blue-600">1,325</p>
              <p className="text-xs text-gray-400">calories</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Remaining</p>
              <p className="text-xl font-semibold text-blue-600">675</p>
              <p className="text-xs text-gray-400">calories</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Macronutrients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Carbs</span>
              <span className="text-sm text-gray-500">150g / 250g</span>
            </div>
            <Progress value={60} className="h-2 bg-blue-100" indicatorClassName="bg-blue-400" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Protein</span>
              <span className="text-sm text-gray-500">85g / 120g</span>
            </div>
            <Progress value={70} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Fat</span>
              <span className="text-sm text-gray-500">45g / 65g</span>
            </div>
            <Progress value={69} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Today's Meals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Breakfast</h3>
              <p className="text-sm text-gray-500">3 items • 450 cal</p>
            </div>
            <span className="text-blue-600 text-sm font-medium">View</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Lunch</h3>
              <p className="text-sm text-gray-500">2 items • 580 cal</p>
            </div>
            <span className="text-blue-600 text-sm font-medium">View</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Dinner</h3>
              <p className="text-sm text-gray-500">Not logged yet</p>
            </div>
            <span className="text-blue-600 text-sm font-medium">Add</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Snacks</h3>
              <p className="text-sm text-gray-500">1 item • 295 cal</p>
            </div>
            <span className="text-blue-600 text-sm font-medium">View</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

