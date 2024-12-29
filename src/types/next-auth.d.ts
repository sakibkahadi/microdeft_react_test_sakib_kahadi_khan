/* eslint-disable @typescript-eslint/no-unused-vars */
// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

// Extending the session to include the accessToken
declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string | undefined | unknown;
      name?: string;
      email?: string;
      image?: string | null;
    };
  }

  interface User {
    accessToken?: string | undefined | unknown;
    name?: string;
    email?: string;
    image?: string | null;
  }
}
