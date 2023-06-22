import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import './Dashboard.css'
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
 import logo from "./Web - Menu/pawprint.png";
 import chaticon from "./Web - Menu/chat.png";
 import SettingsIcon from '@mui/icons-material/Settings';
import notifyicon from './Web - Menu/Notification2.png'
import dashboardlogo from './Web - Menu/Dashboard2.png'
import orderslogo from './Web - Menu/Orders.png';
import postlogo from './Web - Menu/posts.png';
import adlogo from './Web - Menu/Ads.png';
import petsfoodlogo from './Web - Menu/Food&accessories.png'
import userlogo from './Web - Menu/Users.png';
import feedbacklogo from './Web - Menu/Feedbacks.png';
export function Dashboard(){
    const [isOpened, setIsOpened] = useState(true);

    return(
        <>

  <div className="App">
      <div className="header">

      <div className="icon" onClick={() => setIsOpened(!isOpened)}>
    {isOpened ?<ArrowBackIosIcon/>  : <MenuIcon />}
  </div>
 <div>
    <img src={logo} className="logo"/></div>
  <div className='logo-name'><Typography className='logo-name'> Pet Sales</Typography>  </div> 
  <div className="header-title">
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

     

  </div>
  {/* <div className="header-chat">Chat</div>
  <div className="header-notify">Notifications</div>
  <div className="header-profile">My profile</div> */}
      </div>
      <div className="container">
        <aside className={`${isOpened ? "opened" : ""} drawer`}>
  <div>
    <MenuItem>
    <img src={dashboardlogo} className='logo'/>
    <Typography className='dashboard-component'>Dashboard</Typography>
    </MenuItem>
    <MenuItem>
    <img src={orderslogo} className='logo'/>
    <Typography className='dashboard-component'>Orders</Typography>
    </MenuItem>
    <MenuItem>
    <img src={postlogo} className='logo'/>
    <Typography className='dashboard-component'>Posts</Typography>
    </MenuItem>
    <MenuItem>
    <img src={adlogo} className='logo'/>
    <Typography className='dashboard-component'>Ads</Typography>
    </MenuItem>
    <MenuItem>
    <img src={petsfoodlogo} className='logo'/>
    <Typography className='dashboard-component'>Pets Food & Accessories  </Typography>
    </MenuItem>
    <MenuItem>
    <img src={userlogo} className='logo'/>
    <Typography className='dashboard-component'>Users</Typography>
    </MenuItem>
    <MenuItem>
    <img src={feedbacklogo} className='logo'/>
    <Typography className='dashboard-component'>Feedbacks</Typography>
    </MenuItem>
   
  </div>


        </aside>
       
      </div>
    
    </div>

















         {/* <Box >
      <AppBar>
      <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          </Toolbar>
     </AppBar>
    </Box> */}


       
        </>
    )
}