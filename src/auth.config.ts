import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.

      authorize: async (credentials) => {
        console.log("creden", credentials);

        const username = credentials.username as string;
        const password = credentials.password as string;
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)

        // logic to verify if the user exists
        const user = { data: "1" }; //await getUserByEmail(username, password);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
