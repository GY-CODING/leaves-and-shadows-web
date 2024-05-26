/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Achievement } from '@/domain/achievement';
import { achievementsFromDto } from '@/mappers/achievements.mapper';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = withApiAuthRequired(async function getAchievements(req) {
  try {
    const res = new NextResponse();
    const session = await getSession();
    const url = `${process.env.API_GYACCOUNTS_URL}achievements/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        jwt: `Bearer ${session?.idToken}`,
      },
    });
    const data = await response.json();
    const achievements: Achievement[] = data.map((achievement: any) =>
      achievementsFromDto(achievement),
    );

    return NextResponse.json(achievements, res);
  } catch (error) {
    console.error('Error en getAchievements:', error);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
});
