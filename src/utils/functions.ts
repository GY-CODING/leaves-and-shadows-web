import { keyframes } from '@emotion/react'

export function returnColorWorld (mode: string, world: string): string {
  if (mode === 'TAILWIND') {
    switch (world) {
      case 'Asgard':
        return 'amber-200'
      case 'Midgard':
        return 'orange-500'
      case 'Niflheim':
        return 'sky-950'
      case 'Vanaheim':
        return 'green-500'
      case 'Jötunheim':
        return 'cyan-400'
      case 'Alfheim':
        return 'pink-500'
      case 'Svartalfheim':
        return 'stone-400'
      case 'Helheim':
        return 'teal-400'
      case 'Muspelheim':
        return 'red-500'
      case 'Ginnungagap':
        return 'purple-600'
      default:
        return 'white'
    }
  } else if (mode === 'SX') {
    switch (world) {
      case 'asgard':
        return '#fde68a'
      case 'midgard':
        return '#f97316'
      case 'niflheim':
        return '#082f49'
      case 'vanaheim':
        return '#22c55e'
      case 'jotunheim':
        return '#22d3ee'
      case 'alfheim':
        return '#ec4899'
      case 'svartalfheim':
        return '#a8a29e'
      case 'helheim':
        return '#2dd4bf'
      case 'muspelheim':
        return '#ef4444'
      case 'ginnungagap':
        return '#9333ea'
      default:
        return 'white'
    }
  }
  return 'white'
}

export const grow = keyframes`
0% {
  height: 0%;
  opacity: 0;

}
100% {
  height: 40%;
  opacity: 1;

}
`
export const def = keyframes`
0% {
  height: 100%;
  opacity: 0;

}
100% {
  height: 100%;
  opacity: 1;

}`

export function returnPrimaryColorByWorld (world?: string): string {
  switch (world) {
    case 'asgard':
      return '#fde68a'
    case 'midgard':
      return '#f97316'
    case 'niflheim':
      return '#082f49'
    case 'vanaheim':
      return '#22c55e'
    case 'jotunheim':
      return '#22d3ee'
    case 'alfheim':
      return '#ec4899'
    case 'svartalfheim':
      return '#a8a29e'
    case 'helheim':
      return '#2dd4bf'
    case 'muspelheim':
      return '#ef4444'
    case 'ginnungagap':
      return '#9333ea'
    default:
      return 'white'
  }
}
export function returnSecondaryColorByWorld (world?: string): string {
  switch (world) {
    case 'asgard':
      return '#fef3c7'
    case 'midgard':
      return '#fdba74'
    case 'niflheim':
      return '#0369a1'
    case 'vanaheim':
      return '#86efac'
    case 'jotunheim':
      return '#a5f3fc'
    case 'alfheim':
      return '#f9a8d4'
    case 'svartalfheim':
      return '#d6d3d1'
    case 'helheim':
      return '#5eead4'
    case 'muspelheim':
      return '#f87171'
    case 'ginnungagap':
      return '#e879f9'
    default:
      return 'white'
  }
}
