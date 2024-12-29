import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const res = await fetch(
          "https://react-interview.crd4lc.easypanel.host/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        );
        const data = await res.json();
        console.log(data);
        if (data.status) {
          const user:
            | User
            | { id: string; name: string; email: string; accessToken: string } =
            {
              id: data.data.user.id,
              name: data.data.user.name,
              email: data.data.user.email,
              accessToken: data.data.token,
            };

          return user;
        } else {
          throw new Error(data.error || "Login failed");
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};
