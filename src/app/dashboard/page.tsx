'use client'
import { Box, Button, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Image from "next/image"
import logo from "../../assets/images/leaves_and_shadows.png";
import background from "../../assets/images/background.png";
import gif from "../../assets/video/bg.gif";
import { cinzel } from "@/utils/fonts";
import { alkhemikal } from "@/utils/fonts";
import Cookie from "js-cookie";
import { getSession } from "@/utils/types";
import { session } from "@/utils/types";


export default function Home() {

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      justifyContent: 'start',
      alignItems: 'center',
      gap: "1rem"
    }}>
      <Box sx={{ position: "absoulte", zIndex: -3 }}>
        <Image
          src={gif}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="blur pr-40	"
        />
      </Box>
      <Image src={logo} width={200} height={200} alt={""} />
      <h3 className={`${alkhemikal.className} text-7xl text-white`}>Leaves & Shadows</h3>
        <button className={`${cinzel.className} w-32 h-12 rounded bg-green-600 text-white hover:bg-green-500 ease-in-out transition-all duration-500 `}>Download</button>
    </Box>
  );
}