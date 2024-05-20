'use client'
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
    <div className="flex flex-col items-center justify-center w-full h-full">
        {
          achievements.map((achievement: Achievement) => (
            <div key={achievement.identifier} className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold text-green-50">{achievement.name}</h1>
              <p className="text-lg text-green-50">{achievement.description}</p>
            </div>
          ))
        }
    </div>
  )
}
