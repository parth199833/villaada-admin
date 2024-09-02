// lib/mongodb.ts
import { MongoClient, Db } from 'mongodb';

// Replace with your MongoDB URI
const uri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client: MongoClient = new MongoClient(uri, {});

let db: Db;

export const connectToDatabase = async () => {
  if (db) return db;
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('villaada'); // Replace with your database name
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
};

export const getDb = async (): Promise<Db> => {
  if (!db) {
    await connectToDatabase();
  }
  return db;
};