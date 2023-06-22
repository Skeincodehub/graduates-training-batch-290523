import { Button, Card, CardContent, IconButton, InputBase, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './UserLanding.css';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import userpic from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import userpic2 from '../Dashboard/Web - Menu/chat&notification/user.png';
import userpic4 from '../Dashboard/Web - Menu/chat&notification/boy.png';

import userpic3 from '../Dashboard/Web - Menu/chat&notification/user1.png';
import { useNavigate } from "react-router-dom";

export function UserLanding(){
    const navigate=useNavigate();

    const handleUserCard=()=>{
        navigate('/user-details')
    }
    const handleAddUser=()=>{
        navigate('/add-user')
    }

    return(
        <>
        <Navbar/>
     <Card className='main-card-Users'>
     <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Users</Typography>
     <Card className='total-users-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Total Users<br/>124</Typography>
  <PetsIcon className='peticon-orders-card'/>

  </CardContent>
</Card>
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
     <MenuItem value=""><em>User Name</em>
     </MenuItem>
      <MenuItem  value={'cat'}>Arun</MenuItem>
       <MenuItem value={'Bird'}>Baskar</MenuItem>
         <MenuItem value={'Dog'}>Mohan</MenuItem>
 </Select>
 <Select
 value=''
  displayEmpty
className="select-breed"
  >
     <MenuItem value=""><em>Phone Number  </em>
     </MenuItem>
      <MenuItem  value={'cat'}>9876543210</MenuItem>
       <MenuItem value={'Bird'}>7894561230</MenuItem>
         <MenuItem value={'Dog'}>8574621039</MenuItem>
 </Select>
 <Button className='add-new-btn' onClick={handleAddUser} >Add User</Button>
</Stack>
<Card className='users-list-card'>
<Stack direction='row' className="stack-users-list">
<Card className='users-list-details-card' onClick={handleUserCard}>
  <CardContent>
    
        <img src={userpic} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Saranya Sai</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>
       
  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic2} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Rajesh Kumar</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>

  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic3} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Shankar Raj</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>

  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic2} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Christina</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>

  </CardContent>
</Card>


</Stack>
<Stack direction='row' className="stack-users-list">
<Card className='users-list-details-card'>
  <CardContent>
        <img src={userpic4} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Allina Thomas</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>
       
  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Archana</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>

  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Jhon David</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
    Delhi,India </Typography>

  </CardContent>
</Card>
<Card className='users-list-details-card'>
  <CardContent>
  <img src={userpic4} className='userpic-style'/>
        <MoreVertIcon sx={{float:'right'}}/>
        <Typography className='username-text'>Krishnamoorthy</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Bangalore,India </Typography>

  </CardContent>
</Card>


</Stack>
</Card>
     </Card>
        </>
    )
}