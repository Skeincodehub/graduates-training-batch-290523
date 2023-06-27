import { Box, Button, Card, Grid, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './AddNewAd.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import shelterdog from '../Dashboard/Web - Menu/chat&notification/shelterdog.png';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
export function AddNewAd(){
    const navigate=useNavigate();

    const handleClickBackAd=()=>{
        navigate('/adds')
    }

    return(
        <>
        <Navbar/>
        <Card className="main-card-add-new-ad">
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAd} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}>Add a New Ad</Typography>
        <Card className="card-ad-content">
       
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Add Title</Typography>
                <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
    

                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Timer</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem> 2min</MenuItem>
                    <MenuItem>1 min</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Ad Id</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Description</Typography>
                <TextareaAutosize minRows={10} className='text-area-auto' />

            </Grid>
            <Grid item sx={{marginLeft:'35px',marginTop:'-80px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Position</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Bottom</MenuItem>
                    <MenuItem>Top</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Pages</Typography>

            <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Login,Registration,Settings</MenuItem>
                    <MenuItem>Login,Registration </MenuItem>
                 </Select>
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
    

                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Link</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>http:google.com</MenuItem>
                    <MenuItem>http:petfood.com</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Stack direction="row" className='stack-upload-detail'>
            <Box>
        <Typography>Upload Images</Typography>
        <Typography sx={{color:'grey'}}>( max 720 width & 350 height & size less than 100mb) </Typography>

            </Box>
            <Button className="upload-btn-add-new-ad">Upload</Button>
        </Stack>
        <Box className="box-dog-pic-upload">
<CancelRoundedIcon className="cancel-icon"/>
            <img src={shelterdog} className='img-upload' />
        </Box>
        <Stack direction='row' className='stack-btn-cancel-add-product'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
            <Button className='add-pet-btn'>Add a new  Ad</Button>

        </Stack>
             </Card>
          
        </Card>
        </>
    )
}