import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { db, dbConnect } from "./utils";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { sql } from "@vercel/postgres";
const login = async (credentials) => {
  try {
    dbConnect();
    const user =
      await sql`SELECT * FROM users WHERE username = ${credentials.username}`;

    if (user.rowCount === 0) {
      throw new Error("User not found!");
    }

    const foundUser = user.rows[0];

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong password");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        dbConnect();
        try {
          const userAuth =
            await sql`SELECT * FROM users WHERE email = ${user.email}`;

          if (userAuth.rowCount === 0) {
            const date = new Date().toLocaleDateString();
            await sql`INSERT INTO users (username, email, created_at,img) VALUES (${user.name},${user.email},${date},${user.image});`;

            console.log("user added");
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
