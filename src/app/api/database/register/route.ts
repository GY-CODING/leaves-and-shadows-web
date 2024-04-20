/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import db from '@/libs/db'
import { Cipher } from '@/utils/cipher'

export async function POST (request: Request): Promise<NextResponse> {
  const data = await request.json()
  const salt: Buffer = Cipher.generateSalt()

  try {
    const userFound: Promise<boolean> = await db.user.findUnique({
      where: {
        username: data.user
      }
    })
    const emailFound: Promise<boolean> = await db.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (await userFound) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    } else if (await emailFound) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
    }
    const newUser = await db.user.create({
      data: {
        email: data.email,
        password: Cipher.convertToHex(Cipher.hashPassword(data.password, salt)),
        token: uuidv4(),
        salt: Cipher.convertToHex(salt),
        username: data.user
      }
    })
    const { password: _, salt: __, ...user } = newUser
    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
