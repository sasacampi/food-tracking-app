import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus, Clock, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FoodLoggingPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Log Food</h1>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search for food..."
          className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blue-50 p-1 rounded-lg">
          <TabsTrigger
            value="recent"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
          >
            <Clock className="h-4 w-4 mr-2" />
            Recent
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
          >
            <Star className="h-4 w-4 mr-2" />
            Favorites
          </TabsTrigger>
          <TabsTrigger
            value="meals"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
          >
            My Meals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-4 space-y-3">
          {recentFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </TabsContent>

        <TabsContent value="favorites" className="mt-4 space-y-3">
          {favoriteFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </TabsContent>

        <TabsContent value="meals" className="mt-4 space-y-3">
          {myMeals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </TabsContent>
      </Tabs>

      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg py-6 shadow-md">
        <Plus className="h-5 w-5 mr-2" />
        Add Custom Food
      </Button>
    </div>
  )
}

interface Food {
  name: string
  brand?: string
  calories: number
  serving: string
  macros: {
    carbs: number
    protein: number
    fat: number
  }
}

function FoodCard({ food }: { food: Food }) {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-3 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-800">{food.name}</h3>
          {food.brand && <p className="text-xs text-gray-500">{food.brand}</p>}
          <p className="text-sm text-gray-600">{food.serving}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-blue-600">{food.calories} cal</p>
          <div className="flex text-xs text-gray-500 space-x-2 mt-1">
            <span>C: {food.macros.carbs}g</span>
            <span>P: {food.macros.protein}g</span>
            <span>F: {food.macros.fat}g</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface Meal {
  name: string
  foods: number
  calories: number
}

function MealCard({ meal }: { meal: Meal }) {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-3 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-800">{meal.name}</h3>
          <p className="text-sm text-gray-600">{meal.foods} items</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-blue-600">{meal.calories} cal</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const recentFoods: Food[] = [
  {
    name: "Greek Yogurt",
    brand: "Fage",
    calories: 120,
    serving: "1 container (170g)",
    macros: { carbs: 6, protein: 18, fat: 4 },
  },
  {
    name: "Banana",
    calories: 105,
    serving: "1 medium (118g)",
    macros: { carbs: 27, protein: 1, fat: 0 },
  },
  {
    name: "Grilled Chicken Breast",
    calories: 165,
    serving: "3 oz (85g)",
    macros: { carbs: 0, protein: 31, fat: 3.6 },
  },
  {
    name: "Avocado Toast",
    brand: "Homemade",
    calories: 290,
    serving: "1 slice",
    macros: { carbs: 25, protein: 8, fat: 16 },
  },
]

const favoriteFoods: Food[] = [
  {
    name: "Protein Shake",
    brand: "Optimum Nutrition",
    calories: 120,
    serving: "1 scoop (30g)",
    macros: { carbs: 3, protein: 24, fat: 1 },
  },
  {
    name: "Oatmeal",
    brand: "Quaker",
    calories: 150,
    serving: "1 packet (43g)",
    macros: { carbs: 27, protein: 4, fat: 2 },
  },
  {
    name: "Salmon Fillet",
    calories: 206,
    serving: "3 oz (85g)",
    macros: { carbs: 0, protein: 22, fat: 12 },
  },
]

const myMeals: Meal[] = [
  {
    name: "Breakfast Bowl",
    foods: 4,
    calories: 420,
  },
  {
    name: "Post-Workout Meal",
    foods: 3,
    calories: 550,
  },
  {
    name: "Keto Lunch",
    foods: 5,
    calories: 680,
  },
]

