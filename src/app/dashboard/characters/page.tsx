/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client';
import { cinzel } from '@/utils/fonts';
import React, { useEffect, useState } from 'react';
import CharacterCard from '@/components/CharacterCard';
import { getCharacters } from '@/services/characters';
import { type Character } from '@/domain/character';
import { ButtonDefault, ButtonFilter } from '@/components/Worlds';
import {
  ALFHEIM,
  ASGARD,
  FLEX,
  GINNUNGAGAP,
  HELHEIM,
  JOTUNHEIM,
  MIDGARD,
  MUSPELHEIM,
  NONE,
  SVARTALFHEIM,
  VANAHEIM,
} from '@/utils/global.constants';

export default function Characters(): JSX.Element {
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState<Character[] | any>([]);
  const [world, setWorld] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCharacters(): Promise<void> {
      const charactersFetched = await getCharacters();
      setCharacters(charactersFetched);
      setLoading(false);
    }
    void fetchCharacters();
  }, []);

  useEffect(() => {
    const charactersLI = document.querySelectorAll('.character-li');
    if (world !== '') {
      charactersLI.forEach((character: any) => {
        if (
          character.getAttribute('data-value')?.toLocaleLowerCase() !==
          world.toLowerCase()
        ) {
          character.style.display = NONE;
        } else {
          character.style.display = FLEX;
        }
      });
    } else {
      charactersLI.forEach((character: any) => {
        character.style.display = FLEX;
      });
    }
  }, [world, characters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    setCharacterName(name);
  };
  function skeleton(): JSX.Element[] {
    return Array.from({ length: 58 }, (_, i) => (
      <div
        key={i}
        className={
          'character-li bg-zinc-800 w-full h-14 sm:w-52 sm:h-80 relative flex-row flex sm:flex-col sm:items-center sm:justify-center hover:scale-105 transition-all border border-transparent duration-500 animate-pulse '
        }
      />
    ));
  }

  function filterCharacters(): JSX.Element | undefined {
    if (characters) {
      if (characterName === '') {
        return characters.map((character: any) => (
          <CharacterCard
            key={character.identifier}
            imagen={character.image}
            name={character.name}
            world={character.world}
            identifier={character.identifier}
          />
        ));
      } else {
        return characters
          .filter((character: any) =>
            character.identifier
              .toLowerCase()
              .startsWith(characterName.toLowerCase()),
          )
          .map((filteredCharacter: any) => (
            <CharacterCard
              key={filteredCharacter.identifier}
              imagen={filteredCharacter.image}
              name={filteredCharacter.name}
              world={filteredCharacter.world}
              identifier={filteredCharacter.identifier}
            />
          ));
      }
    }
  }

  return (
    <div className="w-full h-[80vh] overflow-hidden flex flex-col gap-4 items-center justify-center">
      <h1
        className={`${cinzel.className} font-semibold text-white text-xl sm:text-3xl mt-4`}
      >
        Characters
      </h1>
      <input
        className="sm:w-1/4 w-1/2 sm:h-8 rounded  border-white  bg-zinc-800 border text-zinc-400 pl-2 dark:border-zinc-400 outline-none "
        type="text"
        onChange={handleChange}
      />
      <div className="flex-row gap-3 flex-wrap sm:flex hidden justify-center items-center">
        <ButtonDefault currentWorld={world} setWorld={setWorld} mundo={''} />
        <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={ASGARD} />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={ALFHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={VANAHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={SVARTALFHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={MIDGARD}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={JOTUNHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={MUSPELHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={HELHEIM}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={GINNUNGAGAP}
        />
      </div>

      <div className="w-11/12 h-5/6 flex flex-row items-start content-start sm:flex-row sm:flex-wrap flex-wrap gap-1 sm:gap-4 sm:items-center justify-center overflow-auto p-4">
        {loading ? skeleton() : filterCharacters()}
      </div>
    </div>
  );
}
