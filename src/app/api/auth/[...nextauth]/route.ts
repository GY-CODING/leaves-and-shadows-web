/* eslint-disable @typescript-eslint/no-unsafe-argument */
import NextAuth from "next-auth";
import { authConfig } from "@/lib/route";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
