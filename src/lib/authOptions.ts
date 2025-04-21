import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { CustomPrismaAdapter } from "@/lib/customAdapter";

export const authOptions: NextAuthOptions = {
  adapter: CustomPrismaAdapter(),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/error",
  },  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const adminEmail = "decryptmike@gmail.com"; // 🔁 Replace with YOUR GitHub email
        token.role = user.email === adminEmail ? "admin" : "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
};