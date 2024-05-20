import { type Achievement } from '@/domain/achievement'

export const achievementsFromDto = (obj: any): Achievement => {
  const achievement: Achievement = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    image: obj.image,
    tier: obj.tier,
    unlocked: obj.unlocked
  }
  return achievement
}
