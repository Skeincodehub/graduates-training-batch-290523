import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { Button, Card, Grid, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { Navbar } from "../Navbar";
import './AddProduct.css'



const initialState={
    productname:'',
    description:'',
    productid:'',
    category:'',
    price:'',
    unit:'',
    thresholdunit:'',
    quanity:'',
    

}
export function AddProduct(){
    const navigate=useNavigate()
    const [formData,setFormData]=useState(initialState)
    const [formError,setFormError]=useState(initialState)
const [productPictureupload,setProductPictureupload]=useState()
const [selectedImage,setSelectedImage]= useState()
const [categoryList,setCategoryList]= useState([])
const [dropError,setDropError]=useState()
const localToken = localStorage.getItem("token");
const localRefreshToken = localStorage.getItem("refresh_token");
const config = {
  headers: {
    "x-access-token": localToken,
    "x-refresh-token": localRefreshToken,
  },
};
const parms=useParams()
// console.log(parms)
const location = useLocation()
// console.log("QWERTYU",location)

const detail = location.state
// console.log(detail)
useEffect(()=>{
    axios.get('https://demo.emeetify.com:81/pet/categories/avail_cats',config)
    .then((response)=>{
        // console.log(response.data.data)
        setCategoryList(response?.data?.data)
    }).catch((error)=>{
        console.log(error)
    })
},[])
useEffect(()=>{
if(parms && detail){

        setFormData({
            productname:detail?.name,
            description:detail?.description,
            productid:detail?.stock_id,
            category:detail?.stock_type,
            price:detail?.price,
            unit:detail?.units,
            thresholdunit:detail?.thresvalue,
            quanity:detail?.avail_qty,
        })
        setSelectedImage(`https://demo.emeetify.com:5016/${detail?.images}`)
}
},[])

const handleInputChange=(e)=>{
    const {name,value}=e.target;
    
        setFormData({...formData,[name]:value})

}
const productPayload={
    "name" :formData.productname,
    "stock_type" :formData.category,
              "price" : formData.price,
              "units" : formData.unit,
              "thresvalue" : formData.thresvalue,
              "description" : formData.description,
              "qty_type" : formData.category,
              "avail_qty" : formData.quanity,
              "images" : selectedImage
    

}
const editPayload={
    "name" :formData.productname,
    "stock_type" :formData.category,
              "price" : formData.price,
              "units" : formData.unit,
              "thresvalue" : formData.thresvalue,
              "description" : formData.description,
              "qty_type" : formData.category,
              "avail_qty" : formData.quanity,
    

}

const handleSubmit=()=>{
    const errors={}
    let formIsValid= true 
    if(!selectedImage){
        formIsValid= false;
        errors['productpic']="Please Select Image"
    }
   if(!formData.productname){
       formIsValid= false;
       errors['productname']="please Enter Product Name"
   }
   if(!formData.description){
    formIsValid= false;
    errors['description']="please Enter Description"
}
if(!formData.productid){
    formIsValid= false;
    errors['productid']="please Enter ProductId"
}
if(!formData.category){
    formIsValid= false;
    errors['category']="please Select Category"
}
if(!formData.price){
    formIsValid= false;
    errors['price']="please Enter Price"
}
if(!formData.unit){
    formIsValid= false;
    errors['unit']="please Select Unit"
}
if(!formData.thresholdunit){
    formIsValid= false;
    errors['thresholdunit']="please Enter Thresholdunit"
}
if(!formData.quanity){
    formIsValid= false;
    errors['quanity']="please Enter quanity"
}
console.log(errors)
setDropError(errors)
setFormError(errors)
console.log(detail)

if(Object.keys(errors).length === 0 && Object.keys(parms).length === 0  ){
    axios.post('https://demo.emeetify.com:81/pet/stocks/',productPayload,config)
    .then((response)=>{
        console.log(response.data)
        toast.success(response?.data?.message)
        setFormData(initialState)
        setSelectedImage(null)
    }).catch((error)=>{
        console.log(error)
    })
 

} 

if(parms && detail && Object.keys(errors).length === 0){
    axios.put(`https://demo.emeetify.com:81/pet/stocks/${detail?.stock_id}`,editPayload,config)
    .then((response)=>{
        console.log(response?.data)
        toast.success(response?.data?.message)
    }).catch((error)=>{
        console.log(error)
    })
}
else{
    toast.error("Please Fill All the Fields")
}
}

    const handleClickBackAddProduct=()=>{
        navigate('/pet-food-accessories')
    }
    const handleProductUpload=(e)=>{
        let reader= new FileReader();
        
        console.log(reader)
            let file = e.target.files[0];
        // console.log("/////",file)
        setProductPictureupload(file)
            reader.onloadend=()=>{
                // console.log("/////",reader.result)
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)

    }
    const handleClose=()=>{
        setSelectedImage(null);
    }

    return(
        <>
        <Navbar/>
        <ToastContainer/>
        <Card className='main-card-add-product'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAddProduct} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
    {/* {
      !  parms && !location ?
        <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Edit Product</Typography>:
        <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Add Product</Typography>

    } */}
            <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>{detail  ?"Edit ":"Add" } Product</Typography>:

    <Card className='card-add-product-details'>
    <input
  accept="image/*"
  id="image-upload"
  type="file"
  style={{ display: 'none' }}
onChange={handleProductUpload}
/>
<label htmlFor="image-upload">
<Button component='span'
  name='productpic'

 sx={{marginLeft:'40px',marginTop:'25px',textTransform:'none',color:'white',backgroundColor:'blue'}}

 > Upload Product 
{/* <AddPhotoAlternateIcon  className="add-user-photo"/> */}
  </Button>   
       </label>
       {
        selectedImage &&
        <Card  sx={{width:'300px',marginLeft:'50px',marginTop:'15px',height:'200px'}}> 
   <CloseOutlinedIcon onClick={handleClose}    className={'remove-icon-upload-profile'} />

            <img src={selectedImage} alt='no pic' />

        </Card>
       }
       {
        dropError?.productpic &&
        <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{dropError?.productpic}</Grid>

       }
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Product Name</Typography>
                <TextField
                onChange={handleInputChange}
                value={formData.productname}
                name='productname'
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
   {
    !formData.productname && formError.productname &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.productname}</Grid>
 }

            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Description</Typography>
                <TextareaAutosize 
                onChange={handleInputChange}
                value={formData.description}
                name='description'
                minRows={10} className='text-area-auto' />
  {
    !formData.description && formError.description &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.description}</Grid>
 }
            </Grid>
            <Grid item sx={{marginLeft:'35px',marginTop:'-75px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Product Id</Typography>
                <TextField
                onChange={handleInputChange}
                value={formData.productid}
                name="productid"
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                  {
    !formData.productid && formError.productid &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.productid}</Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Category</Typography>
                <Select 
                value={formData.category}
                onChange={handleInputChange}
                name="category"
                displayEmpty
                sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem value={""}><em>Select Category</em></MenuItem>
                  {
                    categoryList.map((category)=>(
                        <MenuItem key={category?.id} value={category?.category_name}>{category?.category_name}</MenuItem>

                    ))
                  }
                  
                 </Select>
                 {
    !formData.category && formError.category &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.category}</Grid>
 }
            </Grid>
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Price</Typography>
                <TextField 
                onChange={handleInputChange}
                value={formData.price}
                name="price"
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
                {
    !formData.price && formError.price &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.price}</Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Unit</Typography>
            <Select
            value={formData.unit}
            name={'unit'}
            onChange={handleInputChange}
            sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem value={"kg"}>KG</MenuItem>
                    <MenuItem value={"Nos"}>Nos</MenuItem>
                 </Select>
                 {
    !formData.unit && formError.unit &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.unit}</Grid>
 }
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'84px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Threshold Unit</Typography>
                <TextField 
                onChange={handleInputChange}
                name="thresholdunit"
                value={formData.thresholdunit}
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
  {
    !formData.thresholdunit && formError.thresholdunit &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.thresholdunit}</Grid>
 }
            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Quantity</Typography>
            <TextField
            onChange={handleInputChange}
            value={formData.quanity}
            name="quanity"
             sx={{height:'57px',width:'360px',backgroundColor:'#f6f6f6'}} />
               {
    !formData.quanity && formError.quanity &&
    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>{formError.quanity}</Grid>
 }
            </Grid>
        </Grid>

        <Stack direction='row' className='stack-btn-cancel-add-product'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
       {/* {
        parms ?
        <Button className='add-pet-btn' onClick={handleSubmit}>Update Product</Button>:
        <Button className='add-pet-btn' onClick={handleSubmit}>Add Product</Button>

       } */}

        <Button className='add-pet-btn' onClick={handleSubmit}>{detail ?"Update":"Add"} Product</Button>

        </Stack>
    </Card>
        </Card>
        </>
    )
}