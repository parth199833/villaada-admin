import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import  { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
  const db=await getDb(); // Ensure MongoDB connection is established
  const { name, email, password,roleType,fullName} = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const collection = db.collection("users"); // Replace 'users' with your collection name

    // Check if user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // Create the user in the database
    const result = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
      roleType:roleType,
      fullName:fullName
    });

    // Retrieve the created user
    const userData = await collection.findOne({ _id: result.insertedId });

    // Return the created user (excluding password for security reasons)
    if (userData) {
      const { password: _, ...userWithoutPassword } = userData;
      return NextResponse.json({ user: userWithoutPassword });
    } else {
      return NextResponse.json(
        { error: "User creation failed" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
