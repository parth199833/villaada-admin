import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClient from "@/lib/db";

import authConfig from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(mongoClient),
  session: { strategy: "jwt" },
  ...authConfig,
});
