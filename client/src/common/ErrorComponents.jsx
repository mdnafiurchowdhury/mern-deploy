import React from 'react'

import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

export default function ErrorComponents() {
  const error = useRouteError();
  console.log(error);
  return (
    <Box style={{marginLeft: 250}}>
    <Typography>this is error page Nawfil</Typography>

    </Box>
  )
}

