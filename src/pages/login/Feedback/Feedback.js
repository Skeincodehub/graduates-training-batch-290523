import { Box, Card, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Feedback.css';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";


export function Feedback(){
 
  const [feedbackList,setFeedbackList]=useState([])
  const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");

  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };
  const handleSearchChange=(e)=>{
 
  }


  useEffect(()=>{
    axios.get("https://demo.emeetify.com:81/pet/feedback/",config)
    .then((response)=>{
      console.log("feedback",response?.data)
      setFeedbackList(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

    return(
        <>
        <Navbar/>
        <Card className="main-card-feedback">
            <Typography className='feedback-text'>Feedback</Typography>
            <Box className='search-box'>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
      onChange={handleSearchChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
  </Box>
  <Card className='feedback-list-card'>
    <Stack>
      {
        feedbackList.map((feedbackList)=>(
          <Card className='feedback-list-card-1'>
          <Typography className='time-duration-feedback'>
            2 mins ago
          </Typography>
          <Typography className='username-feedback'>{feedbackList?.firstname}</Typography>
          <Typography className='text-feedback-card'>{feedbackList?.comments}</Typography>
      </Card>
        ))
      }
      
       
    </Stack>
  </Card>
        </Card>
        </>
    )
}