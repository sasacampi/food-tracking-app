import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome to FoodTracker
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Track your meals, monitor your nutrition, and achieve your health goals.
      </p>
      <div className="space-y-4 w-full max-w-sm">
        <Link href="/signup" className="w-full">
          <Button className="w-full">Sign Up</Button>
        </Link>
        <Link href="/login" className="w-full">
          <Button variant="outline" className="w-full">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
}
