import { type World } from '@/domain/worlds';
import { worldsFromDto } from '@/mappers/worlds.mapper';

export async function getWorlds(): Promise<World[]> {
  try {
    const response = await fetch('/api/data/worlds', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Error fetching characters');
    }
    const worlds: World[] = [];
    data.forEach((character: any) => {
      worlds.push(worldsFromDto(worlds));
    });

    return worlds;
  } catch (error) {
    console.error('Error en getWorlds:', error);
    return [];
  }
}
