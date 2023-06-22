import { AppBar, Avatar, Box, Button, Card, Divider, IconButton, Menu, MenuItem, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useTheme } from "@mui/material";
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

import MuiAppBar from '@mui/material/AppBar';
// file import 
import './OrdersFoodandAccessories.css';
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
import pedigreefood from '../login/orders/pedigreefoodpic.png';
import petwaterer from '../login/orders/petwaterer.jpeg';

import { useNavigate } from "react-router-dom";


export function OrdersFoodandAccessories(){



  const navigate =useNavigate();

  const handleBack=()=>{
    navigate('/orders-home')
  }
  const handleOrders=(e)=>{
    navigate('/orders-home')
  }
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

    <MenuItem className='dashboard-btn'onClick={handleOrders} >
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
      <Card className="main-body-orders-profile-food">
  <Button className='back-btn' sx={{color:'black'}} onClick={handleBack}> <ArrowBackIcon/><Typography >Back</Typography></Button>
 <Typography sx={{marginTop:'15px',marginLeft:'30px'}}>Order Details</Typography>
<Card className='order-deatils-card'>
<Box>
  <div className="div">
    <div className="order-id">
<Typography>Order id : #00987</Typography><br/>
<Typography>Status : Pending </Typography>
    </div>
    <div className="order-date-div">
     <Typography className='order-date-name '> Ordered on : 21/04/2021</Typography>
     <Button className='approve-btn'>Approve</Button>
     <Button className='reject-btn'>Reject</Button>
    </div>
  </div>
  <Box sx={{marginTop:'30px',marginLeft:'25px'}}>
    <div className='div'>
      <div>
      <img src={profilepic}  className='profile-pic-logo'/>
      </div>
      <div className='username-div'>
        <Typography variant='' className="username-orders"><u>Karthick Raja </u></Typography>
        <Typography  sx={{marginTop:'10px',textDecoration:'none',fontSize:'13px'}}>+91 8786356767</Typography>
        <Button variant='p' className='chat-btn'>Chat <img src={numberonelogo} className='numberone-logo'/></Button>
      </div>
    </div>
    <Box sx={{marginTop:'20px'}}>
     <Typography>Delivery Location : 236/45, LMS Street, P N Palayam, Coimbatore,<br/><Typography sx={{marginLeft:'127px'}}>Tamil Nadu,India-64037 </Typography></Typography> 
    </Box>

  </Box>
</Box>
</Card>
<Card sx={{marginTop:'20px',height:'1100px',width:'100vw'}}>
{/* <Table  sx={{paddingRight:'2000px'}} >
<TableContainer>
  <TableHead>
   
    <TableCell sx={{width:'10px'}}></TableCell>
    <TableCell sx={{width:'80px'}}>Pet Name</TableCell>

    <TableCell sx={{width:'80px'}}>Category</TableCell>
    <TableCell sx={{width:'80px'}}>Breed</TableCell>
    <TableCell sx={{width:'80px'}}>Price</TableCell>
    <TableCell sx={{width:'80px'}}>Gender</TableCell>
    <TableCell sx={{width:'80px'}}>Age</TableCell>

  </TableHead>
  <TableBody  className='orders-table' >
      <TableRow  className='orders-table-row'>
<TableCell><img src={orderlistphoto} className='orders-dog-logo'/></TableCell>
<TableCell>Rocky</TableCell>
<TableCell>Dog</TableCell>
<TableCell>German Shepherd</TableCell>

<TableCell>$7000</TableCell>

<TableCell>Male</TableCell>

<TableCell>5 months</TableCell>



      </TableRow>
    
  </TableBody>
  </TableContainer>
</Table> */}
 <Table className='table-full'  sx={{ width:'1000px'}}>
            <TableHead > 
                <TableRow>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px', marginleft:'15px'}}>
               
                    </TableCell>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px', marginleft:'5px'}}>
                    Product Name
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Product id
                    </TableCell>
                      <TableCell  sx={{color:'gray',textAlign:'center'}}>
                      Category
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Units
                    </TableCell>
                      <TableCell sx={{color:'gray'}}>
                      Qty
                    </TableCell>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px'}}>
                    Price
                    </TableCell>
                   
                </TableRow>
            </TableHead>
 <TableBody  className='foodtablebody'>
  <TableRow className='foodtablerow'>
     <TableCell><img src={pedigreefood} className='orders-dog-logo'/></TableCell>
  
<TableCell sx={{width:'1000px'}}>Pedigree Adult Dry DogFood</TableCell>

<TableCell>#09897</TableCell>

<TableCell>Dry Pelltes</TableCell>

<TableCell>3 Kg</TableCell>
<TableCell>1</TableCell>
<TableCell>₹ 475</TableCell>

    
     </TableRow>
     <TableRow className='foodtablerow'>
     <TableCell><img src={petwaterer} className='orders-dog-logo'/></TableCell>
  
<TableCell sx={{width:'1000px'}}>Gravity Pet Waterer</TableCell>

<TableCell>#0985</TableCell>

<TableCell>Accessories</TableCell>

<TableCell>1</TableCell>
<TableCell>1</TableCell>
<TableCell>₹ 2,000</TableCell>

    
     </TableRow>

             

 </TableBody>

        </Table>

</Card>

</Card>
       
       </>
    )
}