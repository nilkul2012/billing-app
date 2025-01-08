import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const Reports: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={10} offset={1} >
          Reports Content Here...
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reports