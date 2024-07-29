import { AuthOptions } from "@/auth";
import NextAuth, { NextAuthOptions } from "next-auth";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
