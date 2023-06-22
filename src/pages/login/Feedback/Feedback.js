import { Box, Card, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Feedback.css';
import SearchIcon from '@mui/icons-material/Search';


export function Feedback(){

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
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>2 mins ago</Typography>
            <Typography className='username-feedback'>Saranya Sai</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
        </Card>
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>1 hour ago</Typography>
            <Typography className='username-feedback'>Rajesh Kumar</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
        </Card>
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>3 hours ago</Typography>
            <Typography className='username-feedback'>Shankar Raj</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
        </Card>
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>5 hours ago</Typography>
            <Typography className='username-feedback'>Christina</Typography>
            <Typography className='text-feedback-card'>....
             </Typography>
        </Card>
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>22/05/2021</Typography>
            <Typography className='username-feedback'>Archana</Typography>
            <Typography className='text-feedback-card'> Rs 5,000
            </Typography>
        </Card>
        <Card className='feedback-list-card-1'>
            <Typography className='time-duration-feedback'>22/05/2021</Typography>
            <Typography className='username-feedback'>Jhon Doe</Typography>
            <Typography className='text-feedback-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Sunt repellendus beatae officia voluptatum odit sequi.</Typography>
        </Card>
    </Stack>
  </Card>
        </Card>
        </>
    )
}