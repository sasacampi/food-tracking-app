"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Feb 1", weight: 152 },
  { date: "Feb 5", weight: 151 },
  { date: "Feb 10", weight: 149 },
  { date: "Feb 15", weight: 148 },
  { date: "Feb 20", weight: 147 },
  { date: "Feb 25", weight: 146 },
  { date: "Mar 1", weight: 145 },
]

export function WeightChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-64 flex items-center justify-center">Loading chart...</div>

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis
            domain={["dataMin - 5", "dataMax + 5"]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
            labelStyle={{ fontWeight: "bold", color: "#1F2937" }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: "#3B82F6", r: 4 }}
            activeDot={{ fill: "#1D4ED8", r: 6, strokeWidth: 2, stroke: "#EFF6FF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

