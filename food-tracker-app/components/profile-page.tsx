import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Settings, ChevronRight } from "lucide-react"
import { WeightChart } from "@/components/weight-chart"

export default function ProfilePage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      <Card className="border-none shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-blue-100">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Profile" />
              <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">Jane Doe</h2>
              <p className="text-sm text-gray-500">jane.doe@example.com</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Your Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 p-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Current Weight</p>
            <p className="text-xl font-semibold text-blue-600">145 lbs</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Goal Weight</p>
            <p className="text-xl font-semibold text-blue-600">135 lbs</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Height</p>
            <p className="text-xl font-semibold text-blue-600">5'6"</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Daily Goal</p>
            <p className="text-xl font-semibold text-blue-600">2,000 cal</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Progress</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="weight" className="w-full">
            <div className="px-4">
              <TabsList className="grid w-full grid-cols-2 bg-blue-50 p-1 rounded-lg">
                <TabsTrigger
                  value="weight"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
                >
                  Weight
                </TabsTrigger>
                <TabsTrigger
                  value="nutrition"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
                >
                  Nutrition
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weight" className="mt-4">
              <div className="px-4 pb-4">
                <WeightChart />
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="mt-4">
              <div className="px-4 pb-4 text-center text-gray-500">
                <p>Nutrition trends will appear here as you log more meals.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {historyItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-medium text-gray-800">{item.date}</h3>
                  <p className="text-sm text-gray-500">
                    {item.meals} meals • {item.calories} cal
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const historyItems = [
  { date: "February 29, 2025", meals: 4, calories: 1950 },
  { date: "February 28, 2025", meals: 3, calories: 1875 },
  { date: "February 27, 2025", meals: 5, calories: 2100 },
  { date: "February 26, 2025", meals: 4, calories: 1920 },
]

