import { AppBar, Avatar, Box, Button, Card, Divider, Grid, IconButton, Menu, MenuItem, Stack, styled, Toolbar, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";import MenuIcon from '@mui/icons-material/Menu';
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
import chaticon from '../login/Dashboard/Web - Menu/chat.png';
import notifyicon from '../login/Dashboard/Web - Menu/Notification2.png'
import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import './Home.css'
import MuiAppBar from '@mui/material/AppBar';
//navbar import 
import PetsIcon from '@mui/icons-material/Pets';
import logo from "../login/Dashboard/Web - Menu/pawprint.png";
//logo import 
import dashboardlogo from '../login/Dashboard/Web - Menu/Dashboard.png'
import orderslogo from '../login/Dashboard/Web - Menu/Orders.png';
import postlogo from '../login/Dashboard/Web - Menu/posts.png';
import adlogo from '../login/Dashboard/Web - Menu/Ads.png';
import petsfoodlogo from '../login/Dashboard/Web - Menu/Food&accessories.png'
import userlogo from '../login/Dashboard/Web - Menu/Users.png';
import feedbacklogo from '../login/Dashboard/Web - Menu/Feedbacks.png';
import petdogimg from '../login/Dashboard/Web - Menu/dashboard_bg2.png';
import birdspic from '../login/Dashboard/Web - Menu/chat&notification/pxfuel.jpg'
import germandog from '../login/Dashboard/Web - Menu/chat&notification/german-dog.jpg';
import catimg from '../login/Dashboard/Web - Menu/chat&notification/cat.jpeg';
import petthings from '../login/Dashboard/Web - Menu/chat&notification/pet-things.jpg';
import pettoys from '../login/Dashboard/Web - Menu/chat&notification/pet-toys.jpg';
import peticon from '../login/Dashboard/Web - Menu/chat&notification/pet-icon.jpeg';

import puppyimg from '../login/Dashboard/Web - Menu/chat&notification/puppy.jpg';
// import '../../index.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";



export function Navbar( props){
const navigate=useNavigate();



useEffect(()=>{
  // axios.get('https://demo.emeetify.com:81/pet/utils/dashboard')
  // .then((response)=>{
  
  //   const imageData= response?.data?.data[0]?.petAddedBy[0]?.profile_pic 
    
  // }).catch((error)=>{
  //   console.log("error",error)
  // })
  axios.get('https://demo.emeetify.com:81/pet/utils/dashboard')
 .then((response)=>{
  
   const imageData= response?.data?.data[0]?.petAddedBy[0]?.profile_pic 
    // console.log("imgData",imageData);
  }).catch((error)=>{
   console.log("error",error)
 })
   
},[]);

const handleLogout=(e)=>{
  e.preventDefault();
   localStorage.removeItem('token')
   localStorage.removeItem('refresh_token')

   navigate('/')
   window.location.reload()
}






const handleDashborad=(e)=>{
  navigate('/home');
}
const handleChatClick=()=>{
  navigate('/chats')
}
const handleProfileClick=()=>{
  navigate('/profile')
}
  const handleOrders=(e)=>{
          navigate('/orders-home');
         

          

  }
  const handlePosts=(e)=>{
    navigate('/posts')
  }
  const handleAds=(e)=>{
    navigate('/adds')
  }

const handlePetFoodClick=(e)=>{
  navigate('/pet-food-accessories')
}
const handleUsers=(e)=>{
  navigate('/users')
}
const handleFeedback=(e)=>{
  navigate('/feedback')
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

  // const MenuItem = styled('MenuItem')(({theme})=>({
  //   "&$selected": {
  //     backgroundColor: "green",
  //     color: "white",
  //     // "& .MuiListItemIcon-root": {
  //     //   color: "white"
  //     // }
  //   },

  //   selected: {}
  // }));
  

  return(
    < >
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
          {/* <div className="main-logo">
          <img src={logo} className="logo"/>
          <Typography variant="h6" className="logo-heading" noWrap component="div">
 Pet sales
          </Typography>
          </div> */}
         <Box className='header-title'>
         <MenuItem><SettingsIcon/><Typography>Settings</Typography></MenuItem>

<MenuItem className='header-chat' onClick={handleChatClick}>
<img src={chaticon} className="logo-icon"/>
    <Typography>Chat</Typography></MenuItem>
    <MenuItem className='header-notify'>
    <img src={notifyicon} className="logo-icon"/>
     <Typography>Notifications </Typography></MenuItem>
    <MenuItem sx={{marginLeft:"50px"}}>
    <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
    <React.Fragment>
<Avatar src={`https://demo.emeetify.com:5016/${props?.location?.profile_pic}`}   {...bindTrigger(popupState)} />
<MenuItem> <Typography onClick={handleProfileClick}>My profile</Typography>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              
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
        className=''
      >
        <DrawerHeader>
        <IconButton className='icon-control' onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        <div className="main-logo">
          <img src={logo} className="logo"/>
          <Typography variant="h6" className="logo-heading" noWrap component="div">
 Pet Store
          </Typography>
          </div>
         
        </DrawerHeader>
        <Divider />
        <li className="drawer-sidebar">
        <MenuItem 
    
        className='dashboard-btn' 
        
        onClick={handleDashborad}>
    <img src={dashboardlogo} className='logo-dashboard'/>
    <Typography className='dashboard-component' > Dashboard</Typography>
    </MenuItem>

    <MenuItem

    className='dashboard-btn'
     onClick={handleOrders}>
    <img src={orderslogo} className='logo-orders'/>
    <Typography className='dashboard-component'>Orders</Typography>
    </MenuItem>
    <MenuItem className="dashboard-btn" onClick={handlePosts}> <img src={postlogo} className='logo-orders'/>
    <Typography className='dashboard-component'>Posts</Typography>
    </MenuItem>
    <MenuItem className="dashboard-btn" onClick={handleAds}>
    <img src={adlogo} className='logo-ads'/>
    <Typography className='dashboard-component'>Ads</Typography>
     </MenuItem>
      <MenuItem
       className="dashboard-btn" onClick={handlePetFoodClick}>
      <img src={petsfoodlogo} className='logo-pet-food'/>
    <Typography className='dashboard-component'>Pets Food &Accessories  </Typography>
  
      </MenuItem>
      <MenuItem className="dashboard-btn" onClick={handleUsers}>
      <img src={userlogo} className='logo-users'/>
    <Typography className='dashboard-component'>Users</Typography>
        </MenuItem>
      <MenuItem className="dashboard-btn" onClick={handleFeedback}>
      <img src={feedbacklogo} className='logo-feedbacks'/>
    <Typography className='dashboard-component'>Feedbacks</Typography>
    </MenuItem>
    </li>

       
        <Divider />
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>


    </>
  );
}