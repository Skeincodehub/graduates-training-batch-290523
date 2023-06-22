import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Addetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import adimg from '../Dashboard/Web - Menu/chat&notification/shelterdog.png';
export function Addetail(){
const navigate=useNavigate();

const handleClickBackAd=()=>{
    navigate('/adds')
}
    return(
        <>
        <Navbar/>
        <Card className='main-card-ad-detail'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAd} >
             <ArrowBackIcon/><Typography >Back</Typography></Button>
    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}>Ad Details</Typography>
     <Card className="sub-card-ad-detail">
        <Box>
            <Typography className='added-date-text'>Added On :<span>21/04/2021</span></Typography>
            <Button className="edit-btn-ad-detail">Edit</Button>
        </Box>
        <Stack direction='row' className='stack-ad-detail'>
            <img src={adimg} className='ad-detail-img'/>
            <Box className='box-ad-detail-text'>
                <Typography sx={{fontWeight:'bold'}}>Ad Title : Siberian Husky Puppies For Sale</Typography><br/>
                <Typography>Ad Id &nbsp; &nbsp; :     #008645</Typography><br/>
                <Typography>Postion : Bottom</Typography><br/>
                <Typography>Pages &nbsp; : Login,Registration,Settings</Typography><br/> 
                <Typography>Timer &nbsp; : 1 min</Typography> <br/>
                <Typography>Link&nbsp; &nbsp;  : <span className='span-link'>http:google.com</span></Typography> 
            </Box>
        </Stack>
        <Typography className='description-text'>Description</Typography>
            <Card className='lorem-para-card-ad-details'>

                <Typography className='lorem-para-1-content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus beatae officia voluptatum odit sequi. Quos voluptas 
                praesentium tenetur officiis obcaecati corporis, consequatur quae aspernatur facere nulla dignissimos incidunt eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sunt repellendus beatae officia voluptatum odit sequi. <br/>
                </Typography>
                <Typography className='lorem-para-content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus beatae officia voluptatum odit sequi. Quos voluptas 
                praesentium tenetur officiis obcaecati corporis, consequatur quae aspernatur facere nulla dignissimos incidunt eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sunt repellendus beatae officia voluptatum odit sequi. 
                </Typography>
            </Card>
     </Card>

        </Card>
        </>
    )
}