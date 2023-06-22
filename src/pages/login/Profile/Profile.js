import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import profileimg from '../Dashboard/Web - Menu/chat&notification/user1.png';
import './Profile.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export function Profile(){

    return(
        <>
        <Navbar/>
        <Card className='main-card-profile'>
        <Typography className='feedback-text'>Profile</Typography>
<Card className='card-profile-details'>
    <Stack direction='row'  className='stack-profile-details'>
        <img src={profileimg} className='profile-img'/>
        <Box className='profile-text'>
            <Typography sx={{fontWeight:'bold'}}>Ram Kumar</Typography><br/>
            <Typography>+91 8794561230</Typography>
            <Typography>christopherrocky@gmail.com</Typography>
        </Box>
        <Button className='edit-btn-profile'>Edit</Button>
    </Stack>
    <Box className='box-location'>
        <Typography sx={{fontWeight:'bold'}}>Location</Typography>
        <Typography><LocationOnIcon sx={{color:'blue'}}/> Coimbatore</Typography>
        <Button className='change-password-btn'>Change Password</Button>
    </Box>
</Card>
        </Card>
        </>
    )
}