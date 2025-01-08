import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const Items: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={10} offset={1} >
          Items Content Here...
        </Grid>
      </Grid>
    </Box>
  );
}

export default Items