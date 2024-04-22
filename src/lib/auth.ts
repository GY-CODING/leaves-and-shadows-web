/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/dashboard/login'
  },
  session: {
    strategy: 'jwt' // Use JSON Web Tokens (JWT) for session management
  },

  providers: [
    GoogleProvider({
      // Configure Google authentication provider with environment variables
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
}
