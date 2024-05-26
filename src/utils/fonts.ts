import { Cinzel } from 'next/font/google';
import localFont from 'next/font/local';
export const cinzel = Cinzel({ subsets: ['latin'] });

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../assets/fonts/Alkhemikal.ttf' });
export const alkhemikal = myFont;
