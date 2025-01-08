import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { routerKey } from './routerKeys';
import Dashboard from '@/components/Dashboard';
import Customer from '@/components/Customer';
import Suppliers from '@/components/Suppliers';
import Items from '@/components/Items';
import Sales from '@/components/Sales';
import Purchase from '@/components/Purchase';
import Cashbook from '@/components/Cashbook';
import Reports from '@/components/Reports';
import Staff from '@/components/Staff';
import Settings from '@/components/Settings';

export const Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        key: routerKey.DASHBOARD,
        icon: <DashboardIcon />,
        component: <Dashboard />
    },
    {
        segment: 'customer',
        title: 'Customer',
        key: routerKey.CUSTOMERS,
        icon: <GroupOutlinedIcon />,
        component: <Customer />
    },
    {
        segment: 'suppliers',
        title: 'Suppliers',
        key: routerKey.SUPPLIERS,
        icon: <LocalShippingOutlinedIcon />,
        component: <Suppliers />
    },
    {
        segment: 'items',
        title: 'Items',
        key: routerKey.ITEMS,
        icon: <AddBusinessOutlinedIcon />,
        component: <Items />
    },
    {
        segment: 'sales',
        title: 'Sales',
        key: routerKey.SALES,
        icon: <ShoppingCartCheckoutOutlinedIcon />,
        component: <Sales />
    },
    {
        segment: 'purchase',
        title: 'Purchase',
        key: routerKey.PURCHASE,
        icon: <AddShoppingCartOutlinedIcon />,
        component: <Purchase />

    },
    {
        segment: 'cashbook',
        title: 'Cashbook',
        key: routerKey.CASHBOOK,
        icon: <AccountBalanceWalletOutlinedIcon />,
        component: <Cashbook />
    },
    {
        segment: 'reports',
        title: 'Reports',
        key: routerKey.REPORTS,
        icon: <SummarizeOutlinedIcon />,
        component: <Reports />
    },
    {
        segment: 'staff',
        title: 'Staff',
        key: routerKey.STAFF,
        icon: <ManageAccountsOutlinedIcon />,
        component: <Staff />
    },
    {
        segment: 'settings',
        title: 'Settings',
        key: routerKey.SETTINGS,
        icon: <AppSettingsAltOutlinedIcon />,
        component: <Settings />
    }
    // {
    //     kind: 'header',
    //     title: 'PARTIES',
    // },
    // {
    //     kind: 'divider',
    // },
    // {
    //     kind: 'header',
    //     title: 'MANAGE INVENTORY',
    // },
    // {
    //     kind: 'divider',
    // },
    // {
    //     kind: 'header',
    //     title: 'BILLS'
    // },
    // {
    //     kind: 'divider',
    // },
];