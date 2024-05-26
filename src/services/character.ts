import { type Character } from '@/domain/character'
import { charactersFromDto } from '@/mappers/characters.mapper'

export async function getCharacter (identifier: string): Promise<Character> {
  const response = await fetch(
    `/api/data/characters/character?identifier=${identifier}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Error fetching characters')
  }
  const character = charactersFromDto(data)

  return character
}
