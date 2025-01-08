import { updateRoute } from "@/redux/reducers/routes/routerSlice"
import { useAppDispatch } from "@/redux/store/hooks"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

interface ListItemProps {
    key: number
    menuDetails: {
        segment?: string
        title: string
        key: string
        icon: React.ReactNode
    }
    drawerStatus: boolean,
}
const ListItems: React.FC<ListItemProps> = ({ menuDetails, drawerStatus }) => {
    const { title, key, icon } = menuDetails
    const dispatch = useAppDispatch()
    const updateNav = (val: string) => {
        dispatch(updateRoute(val))
    }
    return (
        <ListItem onClick={() => updateNav(key)} key={key} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                    },
                    drawerStatus
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                ]}
            >
                <ListItemIcon
                    sx={[
                        {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                        drawerStatus
                            ? {
                                mr: 3,
                            }
                            : {
                                mr: 'auto',
                            },
                    ]}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    sx={[
                        drawerStatus
                            ? {
                                opacity: 1,
                            }
                            : {
                                opacity: 0,
                            },
                    ]}
                />
            </ListItemButton>
        </ListItem>

    )
}

export default ListItems