/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { DefaultSession, NextAuthOptions, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/dashboard/login'
  },
  session: {
    strategy: 'jwt', // Use JSON Web Tokens (JWT) for session management
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
  callbacks: {
    session: async ({ session, user, token }): Promise<Session | DefaultSession> => {
      if (session?.user) {
        session.user.id = user.id
        return await Promise.resolve(session)
      }
    }
  },
  providers: [
    GoogleProvider({
      // Configure Google authentication provider with environment variables
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
}
