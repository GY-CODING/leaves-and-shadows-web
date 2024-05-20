'use client'
import AchievementCard from '@/components/AchievementCard'
import { type Achievement } from '@/domain/achievement'
import { getAchievements } from '@/services/achievement'
import React, { useEffect, useState } from 'react'
export default function Page (): JSX.Element {
  const [achievements, setAchievements] = useState<Achievement[] | any>([])
  useEffect(() => {
    async function fetchAchievements (): Promise<any> {
      const data = await getAchievements()
      setAchievements(data)
    }
    void fetchAchievements()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        {achievements.length > 0
          ? achievements.map((achievement: Achievement) => (
            <AchievementCard key={achievement.identifier} achievement={achievement} />
          ))
          : <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-green-50">No achievements found</h1>
        </div>

        }
    </div>
  )
}
