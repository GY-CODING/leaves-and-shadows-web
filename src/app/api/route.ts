import { NextResponse } from 'next/server'
export async function POST (_req: any, _res: any): Promise<NextResponse> {
  const data = await _req.json()

  return NextResponse.json(data)
}
