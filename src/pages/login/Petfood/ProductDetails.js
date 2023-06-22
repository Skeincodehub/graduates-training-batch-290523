import { Box, Button, Card, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './ProductDetails.css';
import { Navbar } from "../Navbar";
import iamspuppy from '../Dashboard/asserts/iamspuppy.jpeg';

import { Navigate, useNavigate } from "react-router-dom";

export function ProductDetails(){
    const navigate=useNavigate();


    const handleClickBackProduct=()=>{
        navigate('/pet-food-accessories')
    }

    return(
        <>
        <Navbar/>
    <Card className='main-card-producrt-details'>
    <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackProduct} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
            <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Product Details</Typography>
        <Card className='sub-card'>
<Stack direction='row'>
    <Typography className="add-date">Added on:21/04/2021</Typography>
    <Button className='edit-btn'>Edit</Button>
</Stack>
<Stack direction='row' className='product-stack'>
    <Box>
        <img src={iamspuppy} className='product-img' alt=''/>
    </Box>
    <Box className='product-details-text'>
        <Typography>Product Name  &nbsp; : &nbsp;<span> Rocky </span></Typography>
        <Typography>Product Id &nbsp; : &nbsp; <span> &nbsp;  #008645</span></Typography>

        <Typography>Category  &nbsp; : &nbsp;<span> &nbsp;Dry,Pellets </span></Typography>

        <Typography>Quantity  &nbsp; : &nbsp; <span> &nbsp;3kg</span></Typography>
        <Typography>Threshold value  &nbsp;: &nbsp; <span> 10</span></Typography>

    </Box>
    <Box className='box-add-stock'>
        <Typography className='price-text'>&#8377; 1,600</Typography>
        <Typography sx={{color:'red'}}>Stock Available :<span>07</span></Typography>
        <Button className='add-stock-btn'>Add Stock</Button>
    </Box>
</Stack>
<Typography className='description-text-product'>Description</Typography>
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