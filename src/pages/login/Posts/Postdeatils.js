import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { Box, Button, Card, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//file import starts here
import { Navbar } from "../Navbar";
import './Postdeatils.css';
import profilepic from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import germanpic1 from '../Dashboard/asserts/germanpic1.jpeg';
import germanpic2 from '../Dashboard/asserts/germanpic2.jpeg';
import germanpic3 from '../Dashboard/asserts/germanpic3.jpg';
import germanpic4 from '../Dashboard/asserts/germanpic4.jpeg';
import { useNavigate } from 'react-router-dom';

//file import ends here

export function Postdeatils(){
const navigate=useNavigate()
    const handleClickBackPost=()=>{
        navigate('/posts')
    }
    return(
        <>
            <Navbar/>
            <Card className="main-body-posts-profile-deatils">
            <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackPost} > <ArrowBackIcon/><Typography >Back</Typography></Button>
            <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Pet Details</Typography>
            <Card className="post-deatils-card">
            <div className="post-div-petdeatils">
                <div>
                    <Typography> Pet Name :  Rocky</Typography>
                    <Typography> Status:<span className='approve-span-text'> Approved </span></Typography>
     
                </div>
                <div className="posted-div">
                    <Typography> Posted on :21/04/2021</Typography>
                    <Typography   sx={{marginLeft:'110px',fontWeight:'bold'}}>₹ 7000</Typography>
                </div>
            </div>
            <Stack direction='row' className='stack-posts-profile'>
                <Box>
                    <img src={profilepic} className="profile-pic-logo-posts" alt='' />
                </Box>
                <Box className='name-box-posts'>
                    <Typography className='name-posts'>Karthick Raja</Typography>
                    <Typography className='number-posts'>+91 8786356767</Typography>
                </Box>
                <Box>
                    <AvatarGroup max={4} className='avatar-group'>
                    <Avatar className="avatar1" variant="square" src={germanpic1} alt='no image'  />
                    <Avatar className="avatar1" variant="square" src={germanpic4} alt='no image'  />
                    <Avatar className="avatar1" variant="square" src={germanpic3} alt='no image'  />
                    <Avatar variant="square" src={germanpic1} alt='no image'  />
                    <Avatar variant="square" src={germanpic2} alt='no image'  />
                    <Avatar variant="square" src={germanpic3} alt='no image'  />
                    <Avatar variant="square" src={germanpic4} alt='no image'  />
                    <Avatar variant="square" src={germanpic3} alt='no image'  />


                    </AvatarGroup>
                </Box>
            </Stack>
            <Stack direction='row' className='stack-posts-btn'>
                <Button  className='close-post-btn'>Close Post</Button>
                <Button className='chat-post-btn'>Chat<Typography className='chat-btn-typography'> 1</Typography></Button>
            </Stack>
            <Stack className='category-stack' direction='row'>
            <Box>
                <Typography className='text-category'> Category <span className='span-category'>: &nbsp;Dog</span>   </Typography> 
                <Typography className='text-category'> Breed <span className='span-category'>: &nbsp; &nbsp;German Shepherd</span>   </Typography> 
                <Typography className='text-category'> Gender <span className='span-category'>:&nbsp; Male</span>   </Typography> 

            </Box>
            <Box className='age-set-box'>
                <Typography className='text-category'> Age <span className='span-category'>:&nbsp;    5 months old</span>   </Typography> 
                <Typography className='text-category'> Numbers <span  className='span-category'>:&nbsp; 2</span>   </Typography> 
                <Typography className='text-category'>Colours <span className='span-category'>:&nbsp; Black</span>   </Typography> 

            </Box>
            </Stack>
            <Box sx={{marginLeft:'20px',marginTop:'15px'}}>
            <Typography > Location <span >: 236/45, LMS Street,PN Palayam,Coimbatore,<br/></span>   </Typography> 
            <span className='span-address-secondline'>TamilNadu,India-64037.</span> 
            </Box>
            <Typography className='description-text'>Description</Typography>
            <Card className='lorem-para-card'>

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