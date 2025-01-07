import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

interface ListItemProps {
    key: number
    value: string
    drawerStatus: boolean
    icon: React.ReactNode
}
const ListItems: React.FC<ListItemProps> = ({ key, value, drawerStatus, icon }) => {
    return (
        <ListItem key={key} disablePadding sx={{ display: 'block' }}>
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
                    primary={value}
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