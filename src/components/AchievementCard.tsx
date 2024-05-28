import { type Achievement } from '@/domain/achievement';
import { cinzel } from '@/utils/fonts';
import { FLEX_COLUMN_CENTER, FLEX_ROW } from '@/utils/global.constants';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface AchievementCardProps {
  achievement: Achievement;
}
export default function AchievementCard({
  achievement,
}: AchievementCardProps): JSX.Element {
  return (
    <Box
      sx={[
        FLEX_ROW,
        {
          width: '45%',
          height: '100px',
          border: '2px solid white',
          borderImageSource:
            achievement.unlocked === true
              ? 'linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(45,212,191,1) 68%)'
              : '',
          borderImageSlice: 1,
          borderImageWidth: '0.15rem',
          '@media (max-width: 1024px)': {
            width: '80%',
            margin: '0',
            padding: '0',
          },
          '@media (max-width: 640px)': {
            width: '80%',
            height: '70px',
          },
        },
      ]}
    >
      <Box
        component={'img'}
        src={achievement.image}
        sx={{
          aspectRatio: '1/1',
          padding: '5px',
          imageRendering: 'pixelated',
          filter: achievement.unlocked === true ? 'none' : 'grayscale(100%)',
        }}
      ></Box>
      <Box
        sx={[
          FLEX_COLUMN_CENTER,
          {
            width: '80%',
            height: '100%',
            textAlign: 'center',
          },
        ]}
      >
        <Typography
          className={cinzel.className}
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'cinzel',
          }}
        >
          {achievement.name}
        </Typography>
        <Typography
          className={cinzel.className}
          sx={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel',
            fontSize: '12px',
          }}
        >
          {achievement.description}
        </Typography>
      </Box>
    </Box>
  );
}
