/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server';

export async function GET(_req: any, _res: any): Promise<NextResponse> {
  const url = new URL(_req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const identifier = searchParams.get('identifier');
  const response = await fetch(
    `${process.env.API_URL}/characters/game/get?id=${identifier}`,
    {
      method: 'GET',
      mode: 'cors',
    },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Error fetching characters');
  }
  return NextResponse.json(data);
}
