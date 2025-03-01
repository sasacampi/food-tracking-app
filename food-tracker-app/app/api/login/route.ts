import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// This should be replaced with a database call
const users = [
  { id: 1, email: "user@example.com", password: "$2b$10$8OxDEQvXHcj8LJCXQmt1KOd7Q1Iy0JYPf1Ej8Uy8MAWzGqLRHYwXi" }, // password is 'password'
]

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = users.find((u) => u.email === email)
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" })

  return NextResponse.json({ token })
}

