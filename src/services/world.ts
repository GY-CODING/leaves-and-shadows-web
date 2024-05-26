import { type World } from '@/domain/worlds';
import { worldsFromDto } from '@/mappers/worlds.mapper';

export async function getWorld(identifier: string): Promise<World> {
  const response = await fetch(
    `/api/data/worlds/world?identifier=${identifier}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Error fetching characters');
  }
  const world = worldsFromDto(data);

  return world;
}
