import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { db, dbConnect } from "./utils";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        dbConnect();
        try {
          const userAuth = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [user.email]
          );
          console.log(userAuth.rowCount);
          if (userAuth.rowCount === 0) {
            const date = new Date().toLocaleDateString();
            await db.query(
              "INSERT INTO users (username, email, createdat,img) VALUES ($1,$2,$3,$4)",
              [user.name, user.email, date, user.image]
            );
            console.log("user added");
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
