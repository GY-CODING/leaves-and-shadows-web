'use client'
import AchievementCard from '@/components/AchievementCard'
import { type Achievement } from '@/domain/achievement'
import { useAchievements } from '@/hooks/useAchievements'
import { CircularProgress } from '@mui/material'
import React from 'react'
export default function Page (): JSX.Element {
  const { data: achievements, isLoading, isError } = useAchievements()

  if (isLoading || (Boolean(isError))) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <CircularProgress color='success' />
      </div>
    )
  }

  return (
    <div className=" w-10/12 items-center flex lg:items-start flex-col sm:flex-row justify-center sm:flex-wrap h-[90vh] lg:h-full gap-2 sm:gap-3 lg:gap-3 overflow-auto ">
        {achievements.length > 0
          ? achievements.map((achievement: Achievement) => (
            <AchievementCard key={achievement.identifier} achievement={achievement} />
          ))
          : <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
          <h1 className="text-2xl font-bold text-green-50">No achievements found</h1>
        </div>
        }
    </div>
  )
}
