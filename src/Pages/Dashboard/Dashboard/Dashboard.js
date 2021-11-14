import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import DashboardHome from '../DashboardHome/DashboardHome';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { CircularProgress } from '@mui/material';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';

const drawerWidth = 200;

function Dashboard(props) {
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // if (!admin) {
    //     return <CircularProgress />
    //  }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <img style={{ hieght: 10, width: 100 }} src="https://media.istockphoto.com/vectors/camera-photo-lens-vector-id1169907641?b=1&k=20&m=1169907641&s=170x170&h=quKGDpujPxtowlbNKOKnpe7TfmXwiT6VtO0GuKf0ifI=" alt="" />
            {/* <Toolbar /> */}
            {/* <Divider /> */}

            <Box>
                <NavLink style={{ textDecoration: 'none', color: 'darkorchid' }} to="/home">
                    <Button color="inherit">Home</Button>
                </NavLink>
                <br />
                <NavLink style={{ textDecoration: 'none', color: 'darkorchid' }} to={`${url}/myOrder`}>
                    <Button color="inherit">My Order</Button>
                </NavLink>
                <br />
                <NavLink style={{ textDecoration: 'none', color: 'darkorchid' }} to={`${url}/payment`}>
                    <Button color="inherit">Payment</Button>
                </NavLink>
                <br />
                <NavLink style={{ textDecoration: 'none', color: 'darkorchid' }} to={`${url}/addReview`}>
                    <Button color="inherit">Add Review</Button>
                </NavLink>
                <br />
                {admin && <Box>
                    <NavLink style={{ textDecoration: 'none', color: ' royalblue ' }} to={`${url}/manageProducts`}>
                        <Button color="inherit">Manage Products</Button>
                    </NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue' }} to={`${url}/manageAllOrders`}>
                        <Button color="inherit">Manage All Orders</Button>
                    </NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue' }} to={`${url}/addProduct`}>
                        <Button color="inherit">Add Product</Button>
                    </NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none', color: 'royalblue' }} to={`${url}/makeAdmin`}>
                        <Button color="inherit">Make Admin</Button>
                    </NavLink>
                    <br />
                </Box>}
                <NavLink style={{ textDecoration: 'none', color: 'darkorchid' }} to="/">
                    <Button onClick={logOut} color="inherit">Logout</Button>
                </NavLink>
            </Box>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar /> */}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
