import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';

export const Navigation = [
    // {
    //     kind: 'header',
    //     title: 'PARTIES',
    // },
    {
        segment: 'customer',
        title: 'Customer',
        icon: <GroupOutlinedIcon />,
    },
    {
        segment: 'suppliers',
        title: 'Suppliers',
        icon: <LocalShippingOutlinedIcon />,
    },
    // {
    //     kind: 'divider',
    // },
    // {
    //     kind: 'header',
    //     title: 'MANAGE INVENTORY',
    // },
    {
        segment: 'items',
        title: 'Items',
        icon: <AddBusinessOutlinedIcon />,
    },
    // {
    //     kind: 'divider',
    // },
    // {
    //     kind: 'header',
    //     title: 'BILLS'
    // },
    {
        segment: 'sales',
        title: 'Sales',
        icon: <ShoppingCartCheckoutOutlinedIcon />,
    },
    {
        segment: 'purchase',
        title: 'Purchase',
        icon: <AddShoppingCartOutlinedIcon />,
    },
    {
        segment: 'cashbook',
        title: 'Cashbook',
        icon: <AccountBalanceWalletOutlinedIcon />,
    },
    // {
    //     kind: 'divider',
    // },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <SummarizeOutlinedIcon />,
      },
      {
        segment: 'staff',
        title: 'Staff',
        icon: <ManageAccountsOutlinedIcon />,
      },
      {
        segment: 'settings',
        title: 'Settings',
        icon: <AppSettingsAltOutlinedIcon />,
      }
];