'use client';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '300vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    ></Box>
  );
}
