"use client";

import { useState } from "react";
import HomePage from "@/components/home-page";
import FoodLoggingPage from "@/components/food-logging-page";
import ProfilePage from "@/components/profile-page";
import InsightsPage from "@/components/insights-page";
import BottomNavbar from "@/components/bottom-navbar";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <div className="w-full max-w-md mx-auto h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto pb-16">
          {currentPage === "home" && <HomePage />}
          {currentPage === "log" && <FoodLoggingPage />}
          {currentPage === "profile" && <ProfilePage />}
          {currentPage === "insights" && <InsightsPage />}
        </div>
        <BottomNavbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}
