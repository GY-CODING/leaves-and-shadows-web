/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type World } from '@/domain/worlds'
import { getWorld } from '@/services/world'
import useSWR from 'swr'

interface useWorldType {
  data: World
  isError: any
  isLoading: boolean
  isValidating: boolean
}

export function useWorld (identifier: string): useWorldType {
  const {
    data: world,
    error: isError,
    isLoading,
    isValidating
  } = useSWR<World>('/api/data/world', async () => await getWorld(identifier))

  return {
    data: world!,
    isError,
    isLoading,
    isValidating
  }
}
