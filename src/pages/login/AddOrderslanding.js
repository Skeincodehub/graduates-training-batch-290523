import { AppBar, Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, Menu, MenuItem, Select, Stack, styled, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, useTheme } from "@mui/material";
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
import CloseIcon from '@mui/icons-material/Close';
import './Home.css'
import MuiAppBar from '@mui/material/AppBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import PetsIcon from '@mui/icons-material/Pets';
// file import starts
import './AddOrderslanding.css'
//file import ends

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

export function AddOrderslanding(){

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
      <Box sx={{marginLeft:'250px'}}>      
        <Button className='back-btn-addorder' sx={{color:'black'}} > <ArrowBackIcon/><Typography >Back</Typography></Button>
        <Typography className='new-order-text'>Add a New Order</Typography></Box>

        <Card className="main-body-orders-addpets-landing">
      
        {/* <Card> */}
            <Typography className='select-customer-text'>Select Customer</Typography>
          <div className="d-flex-div">
          <div className="contact-customer-number">
            <Typography className="customer-contact-text">Customer Contact Number</Typography>
            <Select
   
          id="demo-simple-select"
          sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}
     
       
        >
          <MenuItem value={ +919876543210}>
            +91 9876543210
          </MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>1</MenuItem>
        </Select>
        </div>
        <div className="customer-name-div">
        <Typography className="customer-contact-text">Customer Name</Typography>
        <TextField className="textfield-customer-name"/>
        </div>

        </div>
        <Typography className='select-customer-text'>Select Products</Typography>
        <Box sx={{height:'350px',width:'auto',marginLeft:'25px',border:'1px solid black'}}>
          <Button sx={{textTransform:'none',color:'red',float:'right'}}>Remove <CloseIcon sx={{color:'black'}}/></Button>
          {/* <Stack direction='row' sx={{marginTop:'15px'}}>
          <Typography className="customer-contact-text">Product Name</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'290px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={ +919876543210}>
     +91 9876543210
   </MenuItem>
   <MenuItem value={20}>2</MenuItem>
   <MenuItem value={30}>1</MenuItem>
 </Select>

 <Typography className="customer-contact-text">Product Name</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'290px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={ +919876543210}>
     +91 9876543210
   </MenuItem>
   <MenuItem value={20}>2</MenuItem>
   <MenuItem value={30}>1</MenuItem>
 </Select>

          </Stack> */}
        <Grid container>
          <Grid item>
          <Typography className="customer-contact-text">Product Name</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={'chappi'}>
          Chappi
   </MenuItem>
   <MenuItem value={20}>Pedigree</MenuItem>
   <MenuItem value={30}>1</MenuItem>
 </Select>

          </Grid>
          <Grid item sx={{marginLeft:'60px'}}>
          <Typography className="customer-contact-text">Product id</Typography>
          <TextField className="textfield-product-id"/>

          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{marginTop:'10px'}}>
          <Typography className="customer-contact-text">Unit</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={3}>
 3kg
   </MenuItem>
   <MenuItem value={20}>2 kg</MenuItem>
   <MenuItem value={30}>1 kg</MenuItem>
 </Select>

          </Grid>
          <Grid item sx={{marginLeft:'55px',marginTop:'10px'}}>
          <Typography className="customer-contact-text">Quantity</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={1}>
   1
   </MenuItem>
   <MenuItem value={20}>2</MenuItem>
   <MenuItem value={30}>3</MenuItem>
 </Select>

          </Grid>
        </Grid>
    <Grid sx={{marginTop:'15px',marginLeft:'7px'}}>
    <Typography className="customer-contact-text">Price</Typography>
    <TextField className="textfield-product-id" />

    </Grid>
        </Box>
      <Button className='add-another-product-btn'>Add another product +</Button>
      <Box className='delivery-address-box'>
        <Typography className='select-delivery-text'>Select Delivery Address</Typography>
        <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Home" control={<Radio />} label="Home" />
        <FormControlLabel value="office" control={<Radio />} label="Office" />
        <FormControlLabel value="others" control={<Radio />} label="Others" />
        
      </RadioGroup>
    </FormControl>
    <Grid container>
      <Grid item> 
      <Typography className="customer-contact-text">State</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
      <Grid item sx={{marginLeft:'70px'}}> 
      <Typography className="customer-contact-text">City</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
    </Grid>
      <Grid container sx={{marginTop:'35px'}}>
      <Grid item > 
      <Typography className="customer-contact-text">Location</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
      <Grid item sx={{marginLeft:'70px'}}> 
      <Typography className="customer-contact-text">Pincode</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
    </Grid>
    <Stack direction='row' sx={{marginTop:'80px',marginLeft:'20px'}}>
      <Button className='cancel-btn'>Cancel</Button>
      <Button className='addorder-btn'>Add Order</Button>
  
    </Stack>
      </Box>
        {/* </Card> */}
        </Card>


        </>
    )
}