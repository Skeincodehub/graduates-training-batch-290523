import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './ChatDetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import chatprofile from '../Dashboard/Web - Menu/chat&notification/user1.png';
import SendIcon from '@mui/icons-material/Send';

export function ChatDetail(){
    const navigate=useNavigate();

    const handleClickBackChat=()=>{
        navigate('/chats')
    }

    return(
        <>
        <Navbar/>
        <Card className='main-card-chat-detail'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackChat} >
         <ArrowBackIcon/><Typography >Back</Typography></Button>
<Box>
    <Stack direction='row' className="stack-profile-detail">
        <img src={chatprofile} className='chat-detail-profile-img'/>
        <Box className='box-detail-chat'>
            <Typography>
                Saranya Sai
            </Typography>
            <Typography sx={{color:'grey'}}>
                Coimbatore,India
            </Typography>
        </Box>
    </Stack>
</Box>
        <Card className='card-chat-content'>
            <Box>
        <Stack direction='row' className='stack-chat-content'>
            <img src={chatprofile} className='chat-detail-profile-img'/>
            <Card className='chat-content-card'>
                <Typography className='chat-text-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </Card>
        </Stack>
        <Typography className='time-content'>1 min</Typography>
        </Box>
        <Box className='box-alter-chat'>
            <Card className='card-alter-chat'>
                <Typography className='chat-text-alter-content'>Quos voluptas 
                praesentium tenetur </Typography>

            </Card>
            <Typography className='time-content-alter-chat'>1 min</Typography>
        </Box>
        <Box sx={{marginTop:'200px'}}>
        <Stack direction='row' className='stack-chat-content'>
            <img src={chatprofile} className='chat-detail-profile-img'/>
            <Card className='chat-content-card'>
                <Typography className='chat-text-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </Card>
        </Stack>
        <Typography className='time-content'>1 min</Typography>
        </Box>
        <Box className='box-alter-chat'>
            <Card className='card-alter-chat'>
                <Typography className='chat-text-alter-content'>Quos voluptas 
                praesentium tenetur </Typography>

            </Card>
            <Typography className='time-content-alter-chat'>1 min</Typography>
        </Box>

     <Box>
        <Stack direction='row' className='stack-chat-send'>
        <TextField className='textfield-chat'  placeholder="   Type here..."></TextField>
        <SendIcon className='send-icon'/>
        </Stack>
     </Box>
        </Card>
      
        </Card>
        </>
    )
}