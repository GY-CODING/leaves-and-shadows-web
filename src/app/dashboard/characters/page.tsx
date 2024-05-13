/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
"use client";
import { cinzel } from "@/utils/fonts";
import React, { useEffect, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import { getCharacters } from "@/services/characters";
import { type Character } from "@/domain/character";
import { ButtonDefault, ButtonFilter } from "@/components/Worlds";

export default function Characters(): JSX.Element {
  const [characterName, setCharacterName] = useState("");
  const [characters, setCharacters] = useState<Character[] | any>([]);
  const [world, setWorld] = useState("");
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
    const charactersLI = document.querySelectorAll(".character-li");
    // eslint-disable-next-line eqeqeq
    if (world != "") {
      charactersLI.forEach((character: any) => {
        if (
          character.getAttribute("data-value")?.toLocaleLowerCase() !==
          world.toLowerCase()
        ) {
          character.style.display = "none";
        } else {
          character.style.display = "flex";
        }
      });
    } else {
      charactersLI.forEach((character: any) => {
        character.style.display = "flex";
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
          "bg-zinc-900 w-1/6 h-80 back  relative flex flex-col items-center justify-center hover:scale-105 transition-all border border-transparent duration-500 hover:border hover:border-teal-700 animate-pulse"
        }
      />
    ));
  }

  function filterCharacters(): JSX.Element | undefined {
    if (characters) {
      if (characterName === "") {
        return characters.map((character: any) => (
          <CharacterCard
            key={character.identifier}
            name={character.name}
            world={character.world}
            imagen={character.image}
          />
        ));
      } else {
        return characters
          .filter((character: any) =>
            character.name
              .toLowerCase()
              .startsWith(characterName.toLowerCase()),
          )
          .map((filteredCharacter: any) => (
            <CharacterCard
              key={filteredCharacter.identifier}
              name={filteredCharacter.name}
              world={filteredCharacter.world}
              imagen={filteredCharacter.image}
            />
          ));
      }
    }
  }

  return (
    <div className="w-full h-5/6 flex flex-col gap-4 items-center justify-center">
      <h1
        className={`${cinzel.className} font-semibold text-white text-xl sm:text-3xl`}
      >
        Characters
      </h1>
      <input
        className="sm:w-1/4 w-1/2 sm:h-8 rounded  border-white  bg-zinc-800 border text-zinc-400 pl-2 dark:border-zinc-400 outline-none "
        type="text"
        onChange={handleChange}
      />
      <div className="flex-row gap-3 flex-wrap sm:flex hidden justify-center items-center">
        <ButtonDefault currentWorld={world} setWorld={setWorld} mundo={""} />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"ASGARD"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"ALFHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"VANAHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"SVARTALFHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"MIDGARD"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"JOTUNHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"MUSPELHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"HELHEIM"}
        />
        <ButtonFilter
          currentWorld={world}
          setWorld={setWorld}
          mundo={"GINNUNGAGAP"}
        />
      </div>

      <div className="w-11/12 h-5/6 flex flex-row items-start content-start sm:flex-row sm:flex-wrap flex-wrap sm:gap-4 sm:items-center justify-center overflow-auto p-4">
        {loading ? skeleton() : filterCharacters()}
      </div>
    </div>
  );
}
