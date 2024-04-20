/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Credentials from 'next-auth/providers/credentials'
import db from '@/libs/db'
import { Cipher } from '@/utils/cipher'
import NextAuth, { type RequestInternal, type User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        user: { label: 'User', type: 'text', placeholder: 'jsmith' },
        email: { label: 'Email', type: 'email', placeholder: 'email@email.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (_credentials: Record<'user' | 'email' | 'password', string> | undefined, _req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>): Promise<User | null> {
        let userFound

        if (_credentials?.user && _credentials?.user !== 'null') {
          userFound = await db.user.findFirst({
            where: { username: _credentials?.user }
          })
        } else if (_credentials?.email && _credentials?.email !== 'null') {
          userFound = await db.user.findUnique({
            where: { email: _credentials?.email }
          })
        }
        if (!userFound) throw new Error(JSON.stringify({ message: 'User not found', status: 404 }))
        if (Cipher.verifyPassword(_credentials?.password ?? '', Cipher.convertFromHex(userFound.salt), Cipher.convertFromHex(userFound.password))) {
          return {
            id: userFound.id,
            name: userFound.username,
            email: userFound.email
            // token: userFound.token
          }
        } else {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })

  ],
  callbacks: {
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
