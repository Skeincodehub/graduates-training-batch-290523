import { AppBar, Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, Menu, MenuItem, Stack, styled, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import './Home.css'
import MuiAppBar from '@mui/material/AppBar';
import PetsIcon from '@mui/icons-material/Pets';
// file import 
import './Order.css';
import './Orderslanding.css'
import './Home.css';
//file import end

//navlogo imports
import chaticon from '../login/Dashboard/Web - Menu/chat.png';
import notifyicon from '../login/Dashboard/Web - Menu/Notification2.png'
//logo 
import numberonelogo from '../login/Dashboard/Web - Menu/chat&notification/image1.png';
import logo from "../login/Dashboard/Web - Menu/pawprint.png";
import profilepic from "../login/Dashboard/Web - Menu/chat&notification/profilepicicon.png";
import dashboardlogo from '../login/Dashboard/Web - Menu/Dashboard.png'
import orderslogo from '../login/Dashboard/Web - Menu/Orders.png';
import postlogo from '../login/Dashboard/Web - Menu/posts.png';
import adlogo from '../login/Dashboard/Web - Menu/Ads.png';
import petsfoodlogo from '../login/Dashboard/Web - Menu/Food&accessories.png'
import userlogo from '../login/Dashboard/Web - Menu/Users.png';
import feedbacklogo from '../login/Dashboard/Web - Menu/Feedbacks.png';
import orderlistphoto from '../login/Dashboard/Web - Menu/chat&notification/dog-german-orders.jpg'

import { useNavigate } from "react-router-dom";
import { Ordertab } from "./orders/Ordertab";



export function Orderslanding(){
const navigate=useNavigate();



const handlePosts=(e)=>{
navigate('/posts')
}
const handleDashborad=(e)=>{
navigate('/home')
}


  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


  const drawerWidth = 260;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return(
    <>
  <AppBar color='' position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="main-logo">
          <img src={logo} className="logo"/>
          <Typography variant="h6" className="logo-heading" noWrap component="div">
 Pet sales
          </Typography>
          </div>
         <Box className='header-title'>
         <MenuItem><SettingsIcon/><Typography>Settings</Typography></MenuItem>

<MenuItem className='header-chat'>
<img src={chaticon} className="logo-icon"/>
    <Typography>Chat</Typography></MenuItem>
    <MenuItem className='header-notify'>
    <img src={notifyicon} className="logo-icon"/>
     <Typography>Notifications </Typography></MenuItem>
    <MenuItem sx={{marginLeft:"50px"}}>
    <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
    <React.Fragment>
<Avatar   {...bindTrigger(popupState)} />
<MenuItem> <Typography>My profile</Typography>
            <Menu {...bindMenu(popupState)}>
              <MenuItem >Logout</MenuItem>
            </Menu      >
            </MenuItem>
    </React.Fragment>
              )}
            </PopupState>
    </MenuItem>



         </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <li className="drawer-sidebar">
        <MenuItem className='dashboard-btn' onClick={handleDashborad}>
    <img src={dashboardlogo} className='logo-dashboard'/>
    <Typography className='dashboard-component' > Dashboard</Typography>
    </MenuItem>

    <MenuItem className='dashboard-btn' >
    <img src={orderslogo} className='logo-orders'/>
    <Typography className='dashboard-component'>Orders</Typography>
    </MenuItem>
    <MenuItem className="dashboard-btn" onClick={handlePosts}> <img src={postlogo} className='logo-orders'/>
    <Typography className='dashboard-component'>Posts</Typography>
    </MenuItem>
    <MenuItem className="dashboard-btn">
    <img src={adlogo} className='logo-ads'/>
    <Typography className='dashboard-component'>Ads</Typography>
     </MenuItem>
      <MenuItem
       className="dashboard-btn">
      <img src={petsfoodlogo} className='logo-pet-food'/>
    <Typography className='dashboard-component'>Pets Food &Accessories  </Typography>
  
      </MenuItem>
      <MenuItem className="dashboard-btn">
      <img src={userlogo} className='logo-users'/>
    <Typography className='dashboard-component'>Users</Typography>
        </MenuItem>
      <MenuItem className="dashboard-btn">
      <img src={feedbacklogo} className='logo-feedbacks'/>
    <Typography className='dashboard-component'>Feedbacks</Typography>
    </MenuItem>
    </li>
        
     
        <Divider />
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
<Card className="main-body-orders">
<input type="date" className='date' defaultValue={'12-06-2023'}/>
 <Typography className='title-dashboard'> Orders</Typography>
  <Stack direction="row">
  <Card  className="total-orders-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Total Orders<br/>34</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="approved-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Approved<br/>21</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="rejected-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Rejected<br/>05</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
  
    </Card>
    <Card  className="pending-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Pending<br/>02</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="inprocess-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Inprocess<br/>11</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="delivered-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Delivered<br/>08</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
  
    
     
  </Stack>
     <Ordertab/>
        
    



</Card>

    </>
  );
} 