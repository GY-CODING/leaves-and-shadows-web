/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client'
import { cinzel } from '@/utils/fonts'
import React, { useEffect, useState } from 'react'
import CharacterCard from '@/components/CharacterCard'
import { getCharacters } from '@/services/characters'
import { type Character } from '@/domain/character'

export default function Characters (): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([])
  useEffect(() => {
    async function fetchCharacters (): Promise<void> {
      const characters = await getCharacters()
      setCharacters(characters)
    }
    void fetchCharacters()
  }, [])

  return (
    <div className="w-full h-5/6 flex flex-col gap-4 items-center justify-center">
      <h1 className={`${cinzel.className} font-semibold text-white text-3xl`}>
        Characters
      </h1>

      <div className="w-11/12 h-5/6 flex flex-row flex-wrap gap-4 items-center justify-center overflow-auto p-4">
        {characters.map((character: Character) => (
          <CharacterCard
            key={character.identifier}
            name={character.name}
            world={character.world}
            imagen={character.image}
          />
        ))}
      </div>
    </div>
  )
}
