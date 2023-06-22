import { Button, Card, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { Navbar } from "../Navbar";
import './AddUser.css'
import { useNavigate } from "react-router-dom";
export function AddUser(){
    const navigate=useNavigate();

    const handleClickBackAddUser=()=>{
        navigate('/users')
    }

    return(
        <>
        <Navbar/>
     <Card className='main-card-add-user'>
     <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAddUser} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}>Add User</Typography>
     <input className='input-file' type='file'/>
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>User Name</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>State</Typography>
            <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Tamil Nadu</MenuItem>
                    <MenuItem>Kerala</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Phone Number</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>City</Typography>
            <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Coimbatore</MenuItem>
                    <MenuItem>Tiruppur</MenuItem>
                 </Select>
            </Grid>
        </Grid>
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Email id</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Address</Typography>
            <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>
        <Grid container>
            
        <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Country</Typography>
            <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>India</MenuItem>
                    <MenuItem>America</MenuItem>
                 </Select>
            </Grid>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Phone Number</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
           
        </Grid>
        <Stack direction='row' className='stack-btn-cancel-add-product'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
            <Button className='add-pet-btn'>Add User</Button>

        </Stack>
     </Card>
        </>
    )
}