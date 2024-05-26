/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Character } from '@/domain/character'
import { type World } from '@/domain/worlds'
import { getCharacter } from '@/services/character'
import { getWorld } from '@/services/world'
import useSWR from 'swr'

interface useCharacterType {
  data: Character
  isError: any
  isLoading: boolean
  isValidating: boolean
  world: World
  isErrorWorld: any
  isLoadingWorld: boolean
  isValidatingWorld: boolean

}

export function useCharacterWorld (identifier: string, worldIdentifier: string): useCharacterType {
  const {
    data: character,
    error: isError,
    isLoading,
    isValidating
  } = useSWR<Character>('/api/data/characters', async () => await getCharacter(identifier))
  const {
    data: world,
    error: isErrorWorld,
    error: isLoadingWorld,
    isValidating: isValidatingWorld
  } = useSWR<World>('/api/data/world', async () => await getWorld(worldIdentifier))

  return {
    data: character!,
    isError,
    isLoading,
    isValidating,
    world: world!,
    isErrorWorld,
    isLoadingWorld,
    isValidatingWorld
  }
}
