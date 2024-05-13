import { NextResponse } from 'next/server'

export async function GET (_req: any, _res: any): Promise<NextResponse> {
  const response = await fetch(
    `${process.env.API_URL}/characters/game/list?page=0&size=58`,
    {
      method: 'GET'
    }
  )
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Error fetching characters')
  }
  return NextResponse.json(data)
}
