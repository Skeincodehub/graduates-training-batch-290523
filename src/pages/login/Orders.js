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
import './Home.css'
import MuiAppBar from '@mui/material/AppBar';
// file import 
import './Order.css';
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

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "./Navbar";



export function Orders(){
const navigate=useNavigate();
const parms = useParams();
const location = useLocation()
const dataDetail= location?.state

const handleEditClick=(dataDetail)=>{
   navigate(`/edit-order/${dataDetail?.order_id}`,{state: dataDetail})
}
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


  const drawerWidth = 270;

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
  
      <Navbar/>
<Card className="main-body-orders-profile">
  <Button className='back-btn' sx={{color:'black'}} onClick={handleBack}> <ArrowBackIcon/><Typography >Back</Typography></Button>
 <Typography sx={{marginTop:'15px',marginLeft:'30px'}}>Order Details</Typography>
<Card className='order-deatils-card'>
<Box>
  <div className="div">
    <div className="order-id">
<Typography>Order id : {dataDetail?.order_id}</Typography><br/>
<Typography>Status : {dataDetail?.status} </Typography>
    </div>
    <div className="order-date-div">
      <Button 
      onClick={()=>handleEditClick(dataDetail)}
      sx={{textTransform:'none',marginLeft:'50px',fontSize:'23px'}}>edit</Button>
     <Typography className='order-date-name '> Ordered on : {dataDetail?.to_date}</Typography>
     <Button className='approve-btn'>Approve</Button>
     <Button className='reject-btn'>Reject</Button>
    </div>
  </div>
  <Box sx={{marginTop:'30px',marginLeft:'25px'}}>
    <div className='div'>
      <div>
      <img src={`https://demo.emeetify.com:5016/${dataDetail?.profile_pic}`}  className='profile-pic-logo'/>
      </div>
      <div className='username-div'>
        <Typography variant='' className="username-orders"><u> {dataDetail?.name} </u></Typography>
        <Typography  sx={{marginTop:'10px',textDecoration:'none',fontSize:'13px'}}>{dataDetail?.mobile_no}</Typography>
        <Button variant='p' className='chat-btn'>Chat <img src={numberonelogo} className='numberone-logo'/></Button>
      </div>
    </div>
    <Box sx={{marginTop:'20px'}}>
     <Typography>Delivery Location : {dataDetail?.city}<br/><Typography sx={{marginLeft:'127px'}}>Tamil Nadu,India-64037 </Typography></Typography> 
    </Box>

  </Box>
</Box>
</Card>
<Card sx={{marginTop:'20px',height:'1000px',width:'auto'}}>

 <Table className='table-full'  sx={{ width:'1000px',marginLeft:'25px'}}>
            <TableHead > 
                <TableRow>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px', marginleft:'15px'}}>
               
                    </TableCell>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px', marginleft:'5px'}}>
                    Pet Name
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Category
                    </TableCell>
                      <TableCell  sx={{color:'gray',textAlign:'center'}}>
                      Breed
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Price
                    </TableCell>
                      <TableCell sx={{color:'gray'}}>
                      Gender
                    </TableCell>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px'}}>
                    Age
                    </TableCell>
                   
                </TableRow>
            </TableHead>
 <TableBody  className='tablebody'>
  <TableRow className='tablerow'>
     <TableCell><img src={orderlistphoto} className='orders-dog-logo'/></TableCell>
     <TableCell>{dataDetail?.pet_name}</TableCell>
<TableCell>{dataDetail?.category_name}</TableCell>
<TableCell sx={{width:'1000px'}}>{dataDetail?.breed}</TableCell>

<TableCell>{dataDetail?.premium_amount}</TableCell>

<TableCell>{dataDetail?.gender}</TableCell>

<TableCell>{dataDetail?.age}</TableCell>
    
     </TableRow>

             

 </TableBody>

        </Table>

</Card>

</Card>

    </>
  );
}