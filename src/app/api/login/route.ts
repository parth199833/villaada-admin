import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/db";
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Replace with an environment variable in production

export async function POST(request: Request) {
 
  const { email, password }: { email: string; password: string } =
    await request.json();

  const db = await getDb();
  const collection = db.collection("users"); // Replace 'users' with your collection name

  // Find user by email
  const user = await collection.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id.toString(), email: user.email },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  return NextResponse.json({ token });
}
