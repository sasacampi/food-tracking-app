"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HomePage from "@/components/home-page";
import FoodLoggingPage from "@/components/food-logging-page";
import ProfilePage from "@/components/profile-page";
import InsightsPage from "@/components/insights-page";
import BottomNavbar from "@/components/bottom-navbar";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/onboarding");
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

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
