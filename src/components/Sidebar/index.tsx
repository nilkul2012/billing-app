import { Divider, Drawer, IconButton, List, styled, useTheme } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItems from "../ListItems";
import { Navigation } from "@/constants/navigation";

interface sidebarProps {
    drawerState: boolean
    handleDrawerClose: () => void
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Sidebar: React.FC<sidebarProps> = ({ drawerState, handleDrawerClose }) => {
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={drawerState}>
            <DrawerHeader>
                gfhg
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {
                    Navigation.map((navData, idx) => {
                        return <ListItems key={idx} drawerStatus={drawerState} menuDetails={navData} />
                    })
                }
            </List>
        </Drawer>
    )
}

export default Sidebar