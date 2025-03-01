"use client"

import { Home, PlusCircle, User, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function BottomNavbar({ currentPage, setCurrentPage }: BottomNavbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white py-2 px-4 shadow-sm">
      <div className="grid w-full grid-cols-4 bg-transparent h-auto">
        <button
          onClick={() => setCurrentPage("home")}
          className={cn(
            "flex flex-col items-center py-2",
            currentPage === "home" ? "text-blue-600" : "text-gray-500 hover:text-gray-900",
          )}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => setCurrentPage("log")}
          className={cn(
            "flex flex-col items-center py-2",
            currentPage === "log" ? "text-blue-600" : "text-gray-500 hover:text-gray-900",
          )}
        >
          <PlusCircle className="h-5 w-5" />
          <span className="text-xs mt-1">Log</span>
        </button>
        <button
          onClick={() => setCurrentPage("insights")}
          className={cn(
            "flex flex-col items-center py-2",
            currentPage === "insights" ? "text-blue-600" : "text-gray-500 hover:text-gray-900",
          )}
        >
          <BarChart3 className="h-5 w-5" />
          <span className="text-xs mt-1">Insights</span>
        </button>
        <button
          onClick={() => setCurrentPage("profile")}
          className={cn(
            "flex flex-col items-center py-2",
            currentPage === "profile" ? "text-blue-600" : "text-gray-500 hover:text-gray-900",
          )}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  )
}

