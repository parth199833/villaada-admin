import mongoClient from "@/lib/db";
import { Db, Collection } from "mongodb";
import bcrypt from "bcrypt";

// Define the User type to represent the data structure in MongoDB
interface User {
  _id: string;
  email: string;
  password: string; // This should be the hashed password
  // Add any other fields relevant to your user schema
}

export const getUserByEmail = async (
  email: string,
  password: string,
): Promise<User | null> => {
  try {
    // Connect to the database
    await mongoClient.connect();

    // Access the database and collection
    const db: Db = mongoClient.db();
    const users: Collection<User> = db.collection("users"); // Use the appropriate collection name

    // Find the user by email
    const user = await users.findOne({ email });

    // If no user is found or password doesn't match, return null
    if (!user) {
      return null;
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    // Return the user data if the email and password are correct
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  } finally {
    await mongoClient.close(); // Close the connection after the operation
  }
};
