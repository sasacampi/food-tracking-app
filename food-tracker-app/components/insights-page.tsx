import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalorieChart } from "@/components/calorie-chart"
import { MacroChart } from "@/components/macro-chart"

export default function InsightsPage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          Last 7 Days
        </Badge>
      </div>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Calorie Trends</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <CalorieChart />
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Macronutrient Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <MacroChart />
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Nutrition Insights</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-blue-50 p-1 rounded-lg">
              <TabsTrigger
                value="weekly"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 rounded-md"
              >
                Monthly
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="mt-4 space-y-3">
              <InsightCard
                title="Great protein intake!"
                description="You've consistently hit your protein goals 6 out of 7 days this week."
                type="positive"
              />
              <InsightCard
                title="Low fiber intake"
                description="Try adding more fruits, vegetables, and whole grains to your diet."
                type="negative"
              />
              <InsightCard
                title="Consistent meal timing"
                description="You've been eating at regular intervals, which helps maintain energy levels."
                type="positive"
              />
            </TabsContent>

            <TabsContent value="monthly" className="mt-4 space-y-3">
              <InsightCard
                title="Steady weight loss"
                description="You've lost 3.5 lbs this month, right on track with your goals."
                type="positive"
              />
              <InsightCard
                title="Weekend calorie spikes"
                description="Your weekend calories are consistently 30% higher than weekdays."
                type="neutral"
              />
              <InsightCard
                title="Improved nutrient balance"
                description="Your vitamin and mineral intake has improved by 25% compared to last month."
                type="positive"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

interface InsightCardProps {
  title: string
  description: string
  type: "positive" | "negative" | "neutral"
}

function InsightCard({ title, description, type }: InsightCardProps) {
  const bgColor = type === "positive" ? "bg-blue-50" : type === "negative" ? "bg-red-50" : "bg-gray-50"

  const textColor = type === "positive" ? "text-blue-700" : type === "negative" ? "text-red-700" : "text-gray-700"

  return (
    <div className={`p-4 rounded-lg ${bgColor}`}>
      <h3 className={`font-medium ${textColor}`}>{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  )
}

