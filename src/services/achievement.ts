import { type Achievement } from '@/domain/achievement';
import { achievementsFromDto } from '@/mappers/achievements.mapper';

export async function getAchievements(): Promise<Achievement[]> {
  try {
    const response = await fetch('/api/data/achievements', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error fetching achievements: ${response.status}`);
    }

    const data = await response.json();
    const achievements: Achievement[] = data.map((achievement: any) =>
      achievementsFromDto(achievement),
    );
    return achievements;
  } catch (error) {
    console.error('Error en getAchievements:', error);
    return [];
  }
}
