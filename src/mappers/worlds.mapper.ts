import { type World } from '@/domain/worlds'

export const worldsFromDto = (obj: any): World => {
  const world: World = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    places: obj.places,
    image: obj.image,
    detailedIcon: obj.detailedIcon
  }
  return world
}
