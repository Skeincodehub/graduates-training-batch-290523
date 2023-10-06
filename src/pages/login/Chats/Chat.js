import { Box, Card, IconButton, InputBase, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import chatprofileimg from '../Dashboard/Web - Menu/chat&notification/user.png';
import chatprofileimg2 from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import chatprofileimg3 from '../Dashboard/Web - Menu/chat&notification/profilepic1.png';
import chatprofileimg4 from '../Dashboard/Web - Menu/chat&notification/user1.png';
import { useNavigate, useParams } from "react-router-dom";
import numberonelogo from '../Dashboard/Web - Menu/chat&notification/image1.png';
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

export function Chat(){
const navigate=useNavigate();
const parms=useParams();
const [userData,setUserData]= useState([])
const localToken = localStorage.getItem("token");
const localRefreshToken = localStorage.getItem("refresh_token");
const config = {
  headers: {
    "x-access-token": localToken,
    "x-refresh-token": localRefreshToken,
  },
};
// console.log(localToken)



useEffect(()=>{
    axios.get('https://demo.emeetify.com:81/pet/utils/conversations',config)
    .then((res)=>{
        console.log(res?.data)
        setUserData(res?.data?.data)
        
    }).catch((error)=>{
        console.log(error)
    })
},[])

const handleChatClick=(data)=>{
    let parms={}
    console.log("123456",data?.sender_id)
    navigate('/chat-detail',{state: data})
}
const handleChatData=()=>{
    navigate('/chat-details')
}
// const date = userData[0].created_at;
// const d=new Date(date)
// var mill = d.getTime()
// var seconds = ((mill % 60000) / 1000);

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
       { userData.map((data)=>(
        <Card className='chat-card1-list'>
        <Typography className='time-duration-chat'></Typography>
       
             <Stack direction='row'>
            <Box>
        <img src={`https://demo.emeetify.com:5016/${data?.profile_pic}`} className='chat-img'/>
            </Box>
            <Box className='chat-list-text' onClick={()=>handleChatClick(data)}>
            <Typography className='username-feedback'>{data?.firstname +""+data?.lastname
}</Typography>
            <Typography className='text-feedback-card'>
             {data?.message}</Typography>
            </Box>

        </Stack>
        </Card>
       )) 
       
       }
      

    </Card>
</Card>
        </Card>
        </>
    )
}