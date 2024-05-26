/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Character } from '@/domain/character'
import { getCharacter } from '@/services/character'
import useSWR from 'swr'

interface useCharacterType {
  data: Character
  isError: any
  isLoading: boolean
  isValidating: boolean

}

export function useCharacter (identifier: string): useCharacterType {
  const {
    data: character,
    error: isError,
    isLoading,
    isValidating
  } = useSWR<Character>('/api/data/worlds', async () => await getCharacter(identifier))

  return {
    data: character!,
    isError,
    isLoading,
    isValidating
  }
}
