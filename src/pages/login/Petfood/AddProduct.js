import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { Button, Card, Grid, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import './AddProduct.css'

export function AddProduct(){
    const navigate=useNavigate()

    const handleClickBackAddProduct=()=>{
        navigate('/pet-food-accessories')
    }

    return(
        <>
        <Navbar/>
        <Card className='main-card-add-product'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAddProduct} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
    <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Add Product</Typography>
    <Card className='card-add-product-details'>
        <input className='input-file' type='file'/>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Product Name</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Description</Typography>
                <TextareaAutosize minRows={10} className='text-area-auto' />

            </Grid>
            <Grid item sx={{marginLeft:'35px',marginTop:'-80px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Product Id</Typography>
                <TextField sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Category</Typography>
                <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>Chappi</MenuItem>
                    <MenuItem>Pedigree</MenuItem>
                 </Select>
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Price</Typography>
                <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Unit</Typography>
            <Select sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem>3kg</MenuItem>
                    <MenuItem>4kg</MenuItem>
                 </Select>
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'84px'}}>
                <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Threshold Unit</Typography>
                <TextField sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />

            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'lightgray',marginLeft:'15px'}}>Quantity</Typography>
            <TextField sx={{height:'57px',width:'360px',backgroundColor:'#f6f6f6'}} />
            </Grid>
        </Grid>

        <Stack direction='row' className='stack-btn-cancel-add-product'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
            <Button className='add-pet-btn'>Add Product</Button>

        </Stack>
    </Card>
        </Card>
        </>
    )
}