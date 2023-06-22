import { Box, Button, Card, Grid, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { Navbar } from "../Navbar";
import './AddPet.css';
import addPet from '../Dashboard/asserts/germanpic5.jpeg';
import addPet2 from '../Dashboard/asserts/germanpic2.jpeg';
import addPet3 from '../Dashboard/asserts/germanpic5.jpeg';

import { useNavigate } from "react-router-dom";

export function AddPet(){
    const navigate=useNavigate();

    const handleClickBackPetPost=()=>{
        navigate('/posts')
    }

    return(
    <>
        <Navbar/>
    
    <Card className='main-body-posts-add-pets'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackPetPost} > 
             <ArrowBackIcon/><Typography >Back</Typography>
        </Button>
        <Typography className='add-pet-text'>Add Pet</Typography>
    <Card  className='add-pet-card'>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Category</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Dog</MenuItem>
                    <MenuItem>Cat</MenuItem>
                 </Select>
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Gender</Typography>
                <Select sx={{height:'50px',width:'370px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Pet Name</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Description</Typography>
                <TextareaAutosize minRows={10} className='text-area-auto' />

            </Grid>
            <Grid item sx={{marginLeft:'35px',marginTop:'-80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Numbers</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Breed</Typography>
            <Select sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>German Shepherd</MenuItem>
                    <MenuItem>Rottwiller</MenuItem>
                 </Select>
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'89px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Price</Typography>
                <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />

            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Age</Typography>
            <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />

            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'70px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Location</Typography>
                <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />

            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Color</Typography>
            <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>
        <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Upload Images</Typography>
                <Typography sx={{color:'lightgrey'}}>(2 more images can be add)</Typography>
            </Box>
            <Button className='upload-pet-pic-btn'>Upload</Button>
        </Stack>
        <Stack direction='row'>
            <Card className="upload-pet-1">
            <CloseOutlinedIcon className='remove-icon-upload-pet'/>

                <img src={addPet}/>
            </Card>
            <Card className="upload-pet-1">
                <img src={addPet2}/>
                <CloseOutlinedIcon className='remove-icon-upload-pet2'/>
            </Card>
            <Card className="upload-pet-1">
                <img src={addPet3}/>
                <CloseOutlinedIcon className='remove-icon-upload-pet3'/>
            </Card>
            <Card className="upload-pet-1">
                <img src={addPet3}/>
                <CloseOutlinedIcon className='remove-icon-upload-pet3'/>
            </Card>
        </Stack>
        <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Upload Video</Typography>
            </Box>
            <Button className='upload-video-pet-pic-btn'>Upload</Button>
        </Stack>
        <Box sx={{marginLeft:'30px',marginTop:'21px'}}>
        <Typography sx={{color:'lightgray',marginLeft:'15px'}}>KCI Registration</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Yes</MenuItem>
                    <MenuItem>No</MenuItem>
                 </Select>
        </Box>
        <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Attach KCI doc.</Typography>
            </Box>
            <Button className='upload-kci-pet-pic-btn'>Upload</Button>
        </Stack>
        <Stack direction='row' className='stack-champion'>
            <Box>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Champion</Typography>
            <Select sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Yes</MenuItem>
                    <MenuItem>No</MenuItem>
                 </Select>
            </Box>
            <Box className='box-microchip'>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Microchip</Typography>
            <Select sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
            <MenuItem>Yes</MenuItem>
                    <MenuItem>No</MenuItem>
                 </Select>
            </Box>
        </Stack>
        <Box  sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Vaccination</Typography>
            <Select sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Yes</MenuItem>
                    <MenuItem>No</MenuItem>
                 </Select>
            </Box>
            <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Vaccination Attachment</Typography>
            </Box>
            <Button className='upload-vaccination-pet-pic-btn'>Upload</Button>
        </Stack>
        <Stack direction='row' className='stack-btn-cancel-add-pet'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
            <Button className='add-pet-btn'>Add Pet</Button>

        </Stack>
    </Card>

    </Card>
    </>
    )
}