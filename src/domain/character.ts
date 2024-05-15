export interface Character {
  identifier: string
  name: string
  description: string
  title: string
  world: string
  image: string
  inGame: boolean
  race: string
  stats: {
    attack: number
    defense: number
    accuracy: number
    life: number
    ether: number
    movement: number
  }
  ability: {
    abilityName: string
    abilityDesc: string
  }
  stories: Array<{
    identifier: string
    title: string
    text: string
  }>
}
