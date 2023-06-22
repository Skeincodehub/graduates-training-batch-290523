import { Box, Card, IconButton, InputBase, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import chatprofileimg from '../Dashboard/Web - Menu/chat&notification/user.png';
import chatprofileimg2 from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import chatprofileimg3 from '../Dashboard/Web - Menu/chat&notification/profilepic1.png';
import chatprofileimg4 from '../Dashboard/Web - Menu/chat&notification/user1.png';
import { useNavigate } from "react-router-dom";

export function Chat(){
const navigate=useNavigate();

const handleChatClick=()=>{
    navigate('/chat-detail')
}
    return(
        <>
        <Navbar/>
        <Card className='main-card-chat'>
        <Typography className='feedback-text'>Chat</Typography>
<Stack direction='row'>
<Box className='search-box'>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', 
      alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
  </Box>
  <Box className='location-box'>
  <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         sx={{marginLeft:'420px'}}
          className='select-location'
          >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem  value={'coimbatore'}>Coimbatore,Tamil Nadu</MenuItem>
          <MenuItem value={20}>Tiruppur</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
        </Select>
  </Box>
</Stack>
<Card>
    <Card className='chat-list-card'>
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>2 mins ago</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg} className='chat-img'/>
            </Box>
            <Box className='chat-list-text' onClick={handleChatClick}>
            <Typography className='username-feedback'>Saranya Sai</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
            </Box>

        </Stack>
        </Card>
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>1 hr ago</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg2} className='chat-img'/>
            </Box>
            <Box className='chat-list-text'>
            <Typography className='username-feedback'>Rajesh Kumar</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
            </Box>

        </Stack>
        </Card>
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>3 hrs ago</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg3} className='chat-img'/>
            </Box>
            <Box className='chat-list-text'>
            <Typography className='username-feedback'>Shanker Raja</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
            </Box>

        </Stack>
        </Card>
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>5 hrs ago</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg4} className='chat-img'/>
            </Box>
            <Box className='chat-list-text'>
            <Typography className='username-feedback'>Christina</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
            </Box>

        </Stack>
        </Card>
         <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>22/05/21</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg} className='chat-img'/>
            </Box>
            <Box className='chat-list-text'>
            <Typography className='username-feedback'>Archana</Typography>
            <Typography className='text-feedback-card'>
               Rs.5000</Typography>
            </Box>

        </Stack>
        </Card>
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'>22/05/21</Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={chatprofileimg} className='chat-img'/>
            </Box>
            <Box className='chat-list-text'>
            <Typography className='username-feedback'>jhon Doe</Typography>
            <Typography className='text-feedback-card'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.    </Typography>
            </Box>

        </Stack>
        </Card>

    </Card>
</Card>
        </Card>
        </>
    )
}