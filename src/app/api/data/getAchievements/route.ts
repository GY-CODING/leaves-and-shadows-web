/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Achievement } from '@/domain/achievement'
import { achievementsFromDto } from '@/mappers/achievements.mapper'
import { getSession } from '@auth0/nextjs-auth0'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET (req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession()
  const url = `${process.env.API_GYACCOUNTS_URL}achievements/`
  const myHeaders = new Headers()
  myHeaders.append('jwt', `Bearer ${session?.idToken}`)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: myHeaders
    })
    const data = await response.json()
    const achievements: Achievement[] = data.map((achievement: any) => achievementsFromDto(achievement))

    return NextResponse.json(achievements)
  } catch (error) {
    console.error('Error en getAchievements:', error)
    throw error
  }
}
