import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Drawer } from '../Drawer';
import ListItems from '../ListItems';
import { Navigation } from '@/constants/navigation';
import { useAppSelector } from '@/redux/store/hooks';
import { routerState } from '@/redux/reducers/routes/routerSlice';
import { startCase, toLower } from 'lodash'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Home: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const currentRoute = useAppSelector(routerState)
  const activePage = Navigation.find(item => item.key === currentRoute.currentPage)


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(currentRoute)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ marginRight: 5, }, open && { display: 'none' },]}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
              {startCase(toLower(currentRoute.currentPage))}
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4" noWrap component="div" sx={{ fontWeight: 'bold', color: '#f86a02', textShadow: '1px 1px #ffff', fontSize:'1rem'}} >
                MENLIFE
              </Typography>
              <Typography variant="h6" noWrap component="div" sx={{fontSize:'1rem'}}>
                The Designer Studio
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant='h4' fontWeight={600} sx={{textAlign:'center'}}>MENLIFE</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {
            Navigation.map((navData, idx) => {
              return <ListItems key={idx} drawerStatus={open} menuDetails={navData} />
            })
          }
        </List>
        <Divider />

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {activePage?.component}
      </Box>
    </Box>
  );
}

export default Home