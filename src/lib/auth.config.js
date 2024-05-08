export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account.provider === "credentials") {
        token.id = user.rows[0].id;
        token.is_admin = user.rows[0].is_admin;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.is_admin = token.is_admin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      //ONLY ADMIN CAN REACH ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.is_admin) {
        return false;
      }

      //ONLY AUTH USERS CAN REACH BLOGPAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      //ONLY UNAUTH USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};
