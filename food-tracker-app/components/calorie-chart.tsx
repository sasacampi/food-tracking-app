"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

const data = [
  { day: "Mon", calories: 1850, goal: 2000 },
  { day: "Tue", calories: 1920, goal: 2000 },
  { day: "Wed", calories: 2150, goal: 2000 },
  { day: "Thu", calories: 1780, goal: 2000 },
  { day: "Fri", calories: 2050, goal: 2000 },
  { day: "Sat", calories: 2300, goal: 2000 },
  { day: "Sun", calories: 1950, goal: 2000 },
]

export function CalorieChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-64 flex items-center justify-center">Loading chart...</div>

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
            labelStyle={{ fontWeight: "bold", color: "#1F2937" }}
          />
          <ReferenceLine y={2000} stroke="#3B82F6" strokeDasharray="3 3" />
          <Bar dataKey="calories" fill="#93C5FD" radius={[4, 4, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

