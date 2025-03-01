import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// This should be replaced with a database call
const users: any[] = [];

export async function POST(req: Request) {
  const { email, password, name, weight, age, gender } = await req.json();

  if (users.find((u) => u.email === email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
    name,
    weight,
    age,
    gender,
  };

  users.push(newUser);

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
