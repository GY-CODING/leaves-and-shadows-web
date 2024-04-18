import { Cinzel } from "next/font/google";
export const cinzel = Cinzel({ subsets: ["latin"] });
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../assets/fonts/Alkhemikal.ttf' })
export const alkhemikal = myFont
 