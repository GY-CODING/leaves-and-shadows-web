import { type Character } from '@/domain/character';

export const charactersFromDto = (obj: any): Character => {
  const character: Character = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    title: obj.title,
    world: obj.world,
    image: obj.image,
    inGame: true,
    race: obj.race,
    stats: {
      attack: obj.stats.attack,
      defense: obj.stats.defense,
      accuracy: obj.stats.accuracy,
      life: obj.stats.life,
      ether: obj.stats.ether,
      movement: obj.stats.movement,
    },
    ability: {
      abilityName: obj.ability.abilityName,
      abilityDesc: obj.ability.abilityDesc,
    },
    stories: obj.stories.map((story: any) => ({
      identifier: story.identifier,
      title: story.title,
      text: story.text,
    })),
  };
  return character;
};
