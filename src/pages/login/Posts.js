import { Button, Card, CardContent, FormHelperText, IconButton, InputBase, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';





import { Navbar } from "./Navbar";
import  './Postlanding.css'
import { useState } from "react";
import { FormControl } from "@mui/base";
import { TablePosts } from "./Posts/TablePosts";
import { useNavigate } from "react-router-dom";




export function Posts(){
const navigate=useNavigate();
  const handleClickAddNew=()=>{
    navigate('/add-pet')
  }
  return(

  
    <>
    <Navbar/>
  
<Card className="main-body-post">
<input type='date'  className="post-date"/>
<Typography className='title-posts'>Posts</Typography>
 <Stack direction='row'>
<Card className='total-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Total Posts<br/>34</Typography>
  <PetsIcon className='peticon-orders-card'/>

  </CardContent>
</Card>
<Card className='approved-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Approved<br/>21</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
<Card className='rejected-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Rejected<br/>11</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
<Card className='pending-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Pending<br/>02</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
 </Stack>
<Stack direction='row' sx={{marginTop:'30px',marginLeft:'15px'}}>
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
</Stack>
<Stack className='main-stack-category-select' direction='row'>
  <Select
 value=''
 
  displayEmpty
className="select-category"
  >
     <MenuItem value=""><em>Select Category</em>
     </MenuItem>
      <MenuItem  value={'cat'}>Cat</MenuItem>
       <MenuItem value={'Bird'}>Bird</MenuItem>
         <MenuItem value={'Dog'}>Dog</MenuItem>
 </Select>
 <Select
 value=''
  displayEmpty
className="select-breed"
  >
     <MenuItem value=""><em>Select Breed  </em>
     </MenuItem>
      <MenuItem  value={'cat'}>German Shepherd</MenuItem>
       <MenuItem value={'Bird'}>Rottweiler</MenuItem>
         <MenuItem value={'Dog'}>BullDog</MenuItem>
 </Select>
 <Button className='add-new-btn' onClick={handleClickAddNew}>Add a new</Button>
</Stack>
<TablePosts/>
</Card>



    </>
  );
}