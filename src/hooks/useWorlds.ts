/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type World } from '@/domain/worlds'
import { getWorlds } from '@/services/worlds'
import useSWR from 'swr'

interface useWorldsType {
  data: World[]
  isError: any
  isLoading: boolean
}

export function useWorlds (): useWorldsType {
  const {
    data: worlds,
    error: isError,
    isLoading
  } = useSWR<World[]>('/api/data/worlds', getWorlds)

  return {
    data: worlds!,
    isError,
    isLoading
  }
}
