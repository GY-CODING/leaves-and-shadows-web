import { type Achievement } from '@/domain/achievement'
import { FLEX_COLUMN_CENTER, FLEX_ROW } from '@/utils/global.constants'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface AchievementCardProps {
  achievement: Achievement
}
export default function AchievementCard ({ achievement }: AchievementCardProps): JSX.Element {
  return (
   <Box sx={[FLEX_ROW, {
     width: '700px',
     height: '80px',
     backgroundColor: 'transparent',
     border: '1px solid white',
     borderRadius: '10px'
   }]}>
    <Box sx={{
      width: '20%',
      backgroundColor: 'white',
      height: '100%'
    }}>
    </Box>
    <Box sx={[FLEX_COLUMN_CENTER, {
      width: '80%',
      height: '100%',
      textAlign: 'center'
    }]}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontFamily: 'cinzel' }}>
            {achievement.name}
        </Typography>
        <Typography sx={{ color: 'white', textAlign: 'center', fontFamily: 'cinzel', fontSize: '12px' }}>
            {achievement.description}
        </Typography>

    </Box>

   </Box>
  )
}
