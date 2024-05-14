'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { getCharacter } from '@/services/character'
import { type Character } from '@/domain/character'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'

// eslint-disable-next-line import/export, @typescript-eslint/promise-function-async
export default function page ({ params }: { params: { character: string } }): JSX.Element {
  const { character } = params
  const [isLoading, setIsLoading] = React.useState(true)
  const [datos, setdatos] = React.useState<Character>()
  useEffect(() => {
    async function fetchCharacter (): Promise<void> {
      const characterFetched = await getCharacter(character)
      setdatos(characterFetched)
      setIsLoading(false)
    }
    void fetchCharacter()
  }, [])

  function returnColorWorld (): string {
    switch (datos?.world) {
      case 'Asgard':
        return 'text-amber-200'
      case 'Midgard':
        return 'text-green-800'
      case 'Niflheim':
        return 'text-sky-950'
      case 'Vanaheim':
        return 'text-green-500'
      case 'Jötunheim':
        return 'text-cyan-400'
      case 'Alfheim':
        return 'text-pink-500'
      case 'Svartalfheim':
        return 'text-stone-900'
      case 'Helheim':
        return 'text-teal-400'
      case 'Muspelheim':
        return 'text-red-500'
      case 'Ginnungagap':
        return 'text-purple-600'
      default:
        return 'text-white'
    }
  }
  return (
    (isLoading)
      ? (
        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <CircularProgress />
      </Box>
        )
      : (<div className="flex flex-col items-center h-full gap-2 pt-2">
  <Image src={datos?.image ?? ''} alt={''} width={100} height={100} />
  <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
  <h1 className="text-zinc-50 text-xl font-medium tracking-wider">ID: {datos?.identifier}</h1>
  <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Name: {datos?.name}</h1>
  <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Title: {datos?.title}</h1>
  <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Description: {datos?.description}</h1>
  </div>
  <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
  <h1 className={returnColorWorld() + ' text-xl font-medium tracking-wider'}>World: {datos?.world}</h1>
  </div>

  <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
  <h1 className="text-white text-xl font-medium tracking-wider">Attack: {datos?.stats?.attack}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">Defense: {datos?.stats?.defense}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">Accuracy: {datos?.stats?.accuracy}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">Life: {datos?.stats?.life}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">Ether: {datos?.stats?.ether}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">Movement: {datos?.stats?.movement}</h1>
  </div>
  <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
  <h1 className="text-white text-xl font-medium tracking-wider">AbilityName: {datos?.ability?.abilityName}</h1>
  <h1 className="text-white text-xl font-medium tracking-wider">AbilityDescription: {datos?.ability?.abilityDesc}</h1>
  </div>

</div>))
}
