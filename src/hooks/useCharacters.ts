/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Character } from '@/domain/character'
import { getCharacters } from '@/services/characters'
import useSWR from 'swr'

interface useCharactersType {
  data: Character[]
  isError: any
  isLoading: boolean
}

export function useWorlds (): useCharactersType {
  const {
    data: characters,
    error: isError,
    isLoading
  } = useSWR<Character[]>('/api/data/worlds', getCharacters)

  return {
    data: characters!,
    isError,
    isLoading
  }
}
