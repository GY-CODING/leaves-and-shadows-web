/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Achievement } from '@/domain/achievement'
import { getAchievements } from '@/services/achievement'
import useSWR from 'swr'

interface useAchievementsType {
  data: Achievement[]
  isError: any
  isLoading: boolean
}

export function useAchievements (): useAchievementsType {
  const {
    data: achievements,
    error: isError,
    isLoading
  } = useSWR<Achievement[]>('/api/data/achievements', getAchievements)

  return {
    data: achievements!,
    isError,
    isLoading
  }
}
