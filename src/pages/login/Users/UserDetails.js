import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './UserDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import userpic from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
export function UserDetails(){
const navigate=useNavigate();

const handleBackProduct=()=>{
    navigate('/users')
}
    return(
        <>
        
        <Navbar/>
        <Card className='main-card-user-details'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleBackProduct}> 
        <ArrowBackIcon/><Typography >Back</Typography></Button>
            <Typography className='user-detail-text'>User Details</Typography>
            <Stack direction='row' className='product-stack'>
    <Box>
        <img src={userpic} className='user-image' alt=''/>
    </Box>
    <Box className='profile-user-details'>
        <Typography className="username-text" >Saranya Sai</Typography>
        <Typography className='phone-number-text'>+91 8793456534</Typography>
        <Typography>saranya@gmail.com</Typography>

        
    </Box>
    <Button className='edit-btn-user'>Edit</Button>
</Stack>
<Box className='address-text-box'>
    <Typography className="address-text" >Address</Typography>
    <Typography className='address-content' >236/45 LMS Street,PN Palayam,Coimbatore<br/>TamilNadu,India-641018</Typography>
</Box>
 <Stack className='stack-address'>
    <Card className='address-home'>
     
        <Typography className='remove-btn'><span className='remove-text'> Remove</span> <CloseIcon className='remove-icon'/> </Typography>
       
        <Box sx={{alignItems:'center',marginLeft:'70px',marginTop:'20px'}}>
             <Typography>Home <ModeEditIcon sx={{height:'15px',width:'15px'}}/></Typography>
        <Typography>
        236/45 LMS Street,PN Palayam,Coimbatore<br/>TamilNadu,India-641018
        </Typography>
        </Box>
    </Card>
    <Card className='address-office'>
     
        <Typography className='remove-btn'><span className='remove-text'> Remove</span> <CloseIcon className='remove-icon'/> </Typography>
       
        <Box sx={{alignItems:'center',marginLeft:'70px',marginTop:'20px'}}>
             <Typography>Office <ModeEditIcon sx={{height:'15px',width:'15px'}}/></Typography>
        <Typography>
        236/45 LMS Street,PN Palayam,Coimbatore<br/>TamilNadu,India-641018
        </Typography>
        </Box>
    </Card>
 </Stack>
        </Card>
        </>
    )
}