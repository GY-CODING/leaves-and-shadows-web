import { type Character } from "@/domain/character";
import { charactersFromDto } from "@/mappers/characters.mapper";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch("/api/data/characters", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Error fetching characters");
  }
  const characters: Character[] = [];
  data.forEach((character: any) => {
    characters.push(charactersFromDto(character));
  });

  return characters;
}
