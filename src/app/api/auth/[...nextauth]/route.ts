/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })

  ],
  callbacks: {
    async signIn (user: any, account: any, profile: any) {
      const { email, id } = user.user
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email,
            id
          }
        })
      }

      return true
    },

    session ({ session, token }: { session: any, token: any }) {
      if (session.user) {
        session.user.id = token.sub as string
      }
      return session
    }
  },

  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/dashboard/login'
  }
}
const handler = NextAuth({
  ...authOptions,
  session: {
    strategy: 'jwt'
  }
})
export { handler as GET, handler as POST }
