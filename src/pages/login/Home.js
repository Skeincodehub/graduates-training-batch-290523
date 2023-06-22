import { AppBar, Avatar, Box, Button, Card, Divider, Grid, IconButton, Menu, MenuItem, Stack, styled, Toolbar, Typography, useTheme } from "@mui/material";
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



export function Home(){
const navigate=useNavigate();


  const handleOrders=(e)=>{
          navigate('/orders-home');
          

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
        className=''
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

    <MenuItem className='dashboard-btn' onClick={handleOrders}>
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

        {/* <List>
          {['Dashboard', 'Orders', ' Posts', 'Ads'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
<Box className="main-body">
  <input type="date" defaultValue={'12-06-2023'}/>
  <Typography className="title-dashboard">Dashboard</Typography>
  <Stack className="card-pet"> 
  <Grid item>
<Typography className="heading-welcome">Welcome Jhon Doe! </Typography>
<Typography className="heading-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/>accussantium doloremque </Typography>
</Grid>
<Grid item>
  <img src={petdogimg} className="pet-dog"/></Grid>
  </Stack>
  <Divider sx={{marginTop:'10px'}}/>


  <Typography className="title-dashboard">Posts</Typography>

<Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>

<Grid item xs={4} className="posts-main" >
<Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New posts<br/>8</Typography>
<div>
<img src={germandog} className="bird-img"/>
<img src={birdspic} className="bird-img1"/><br/>
<img src={puppyimg} className="bird-img2"/>
<img src={catimg} className="bird-img3"/>
<Button className="view-all-btn">View All</Button>
</div>
        </Grid>
        <Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card" >

<Typography className="total-posts-name">Total Posts<br/>34</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>21</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <br />

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "410px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>05</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>08</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
  
  </Grid>  

  <Divider sx={{marginTop:'10px'}}/>


<Typography className="title-dashboard">Orders</Typography>

<Card sx={{height:'330px',width:'100%',backgroundColor:'lightgray'}}>
{/* <Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
<Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card" >

<Typography className="total-posts-name">Total Posts<br/>34</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>21</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <br />

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "420px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>05</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>08</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>

</Grid> */}

<div className="div-order">
  <div>
<Grid container rowSpacing={1} columnSpacing={{xs:1}}>
  <Grid item xs={3} className="orders-card1" sx={{height:'90px', width:'120px', marginTop:'50px',marginLeft:'40px',backgroundColor:'white'  }}>
  <PetsIcon className='peticon-orders'/>

<Typography className="total-orders-name">Total Orders<br/>
<Typography sx={{marginLeft:'50px'}}>42</Typography></Typography>




        
</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'20px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Approved<br/>
<Typography sx={{marginLeft:'50px'}}>28</Typography></Typography>

</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'20px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Rejected<br/><Typography sx={{marginLeft:'50px'}}>03</Typography></Typography>

</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'35px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">pending<br/><Typography sx={{marginLeft:'50px'}}>10</Typography></Typography>

</Grid>
<Grid item xs={3}  className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'25px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Inprocess<br/><Typography sx={{marginLeft:'50px'}}>07</Typography></Typography>

 </Grid>
<Grid item xs={3}  className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'25px',width:'120px',backgroundColor:'white'  }} >
<PetsIcon className='peticon-orders'/>
 
<Typography className="total-orders-name">Delivered<br/><Typography sx={{marginLeft:'50px'}}>21</Typography></Typography>

</Grid>
</Grid>
    </div>
  <div>
    <Grid container>
      <Grid item sx={{height:'300px',width:'300px',marginRight:'15px',marginTop:'15px', backgroundColor:'white'}}> 
      <Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New Orders<br/>10</Typography>
<div>
<img src={petthings} className="bird-img"/>
<img src={pettoys} className="bird-img1"/><br/>
<img src={peticon} className="bird-img2"/>
<img src={catimg} className="bird-img3"/>
<Button className="view-all-btn">View All</Button>
</div>

      </Grid>
    </Grid>

  </div>
</div>
</Card>

{/* <Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>


        <Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card" >

<Typography className="total-posts-name">Total Posts<br/>34</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>21</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <br />

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "420px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>05</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>08</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={4} className="posts-orders" >
<Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New posts<br/>8</Typography>
<div>
<img src={germandog} className="bird-img"/>
<img src={birdspic} className="bird-img1"/><br/>
<img src={puppyimg} className="bird-img2"/>
<img src={catimg} className="bird-img3"/>
<Button className="view-all-btn">View All</Button>
</div>
        </Grid>
  
  </Grid>  */}




</Box>

    </>
  );
}