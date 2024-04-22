/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const nextConfig = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/dashboard/login'
  },
  callbacks: {
    async signIn ({ account, profile }) {
      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@example.com')
      }
      return true
    }
  }
})
const handler = NextAuth(nextConfig)

export { handler as GET, handler as POST }
