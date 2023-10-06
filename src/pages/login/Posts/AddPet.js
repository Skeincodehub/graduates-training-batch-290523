import { Box, Button, Card, Grid, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { Navbar } from "../Navbar";
import './AddPet.css';


import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactImageUploading from "react-images-uploading";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

let initailState={
    category:'',
    gender:'',
    petname:'',
    description:'',
    numbers:'',
    breed:'',
    price:'',
    age:'',
    location:'',
    color:'',
    city:'',
    state:'',
    kciRegister:'',
    champion:'',
    microchip:'',
    vaccination:''
}

export function allowsOnlyCharacters(e) {
    // const re = /[a-zA-Z]+/g;
     const re = /^[a-zA-Z\s]*$/;
     if (!re.test(e.key)) {
     e.preventDefault();
 }
    }
    export function allowsOnlyCharactersAndNumeric(e) {
        const re = /[a-zA-Z0-9]+/;
    if (!re.test(e.key)) {
        e.preventDefault();
    console.log("erroronly")


     }
    }
    
    export function allowsOnlyNumeric(e) {
   const re = /^[0-9\b]+$/;
    if (!re.test(e.key)) {
        e.preventDefault();
    }
    }
export function AddPet(){
    const navigate=useNavigate();
    const location= useLocation();
    const dataDetail= location.state
    const [selectedImage,setSelectedImage]=useState(null);
    const [pictureupload,setPictureupload]=useState(null)
    const [imageRemove,setImageRemove] =useState(true)
    const [formData,setFormData]=useState(initailState)
    const [formError,setFormError]=useState(initailState)
    const localToken=localStorage.getItem("token");
    const localRefreshToken = localStorage.getItem("refresh_token")

    
    const config=
    {
      headers:{
        'x-access-token': localToken,
        'x-refresh-token': localRefreshToken,
        
      }}

      useEffect(()=>{
        if(dataDetail){
            setFormData({
                category:dataDetail?.category_name,
                gender: dataDetail?.gender,
                petname:dataDetail?.pet_name,
                description:dataDetail?.description,
                numbers:dataDetail?.avail_qty,
                breed:dataDetail?.breed,
                price:dataDetail?.price,
                age:dataDetail?.age,
                location:dataDetail?.location,
                color:dataDetail?.color,
                city:dataDetail?.city,
                state:dataDetail?.state,
                kciRegister:dataDetail?.kcireg,
                champion:dataDetail?.champion,
                microchip:dataDetail?.microchip,
                vaccination:dataDetail?.vaccination
            })
            setSelectedImage(` https://demo.emeetify.com:5016/${dataDetail?.images[0]}`)
        }
      },[])


    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({...formData,[name]:value
        })

    }
    const payload={
        "category_id":formData.category,
        "gender":formData.gender,
        "pet_name":formData.petname,
        "description":formData.description,
        "avail_qty":formData.numbers,
        "breed":formData.breed,
        "image": selectedImage ,
        "price":formData.price,
        "age":formData.age,

        "location":formData.location,   
        "color":formData.color,
        "city":formData.city,
        "state":formData.state,
        "kcireg":formData.kciRegister,
        "champion":formData.champion,
        "microchip":formData.microchip,
        "vaccination":formData.vaccination,
        "from_date":"",
        "to_date":"",
        "premium":"",
        "premium_amount":"",
       
    }
 
const nameonlyregex = /^[a-zA-Z\s]*$/
    useEffect(()=>{
            axios.get('https://demo.emeetify.com:81/pet/categories/avail_cats', config)
            .then((response)=>{
                // console.log("12345",response.data)
            }).catch((error)=>{
                console.log("error",error)
            })
    },[])

    const handleSubmit=(e)=>{
        console.log(formData);
        e.preventDefault();
     console.log(   !/^[a-zA-Z\s]*$/.test(formData.petname))
        const errors={}
        let formIsValid= true;
        if(!formData.category){
            formIsValid= false;
            errors['category']="please Select Category"
        }
        if(!formData.gender){
            formIsValid= false;
            errors['gender']="please Select Gender"
        }
        if(!formData.description){
            formIsValid= false;
            errors['description']="please enter description"
        }
        if(!formData.petname){
            formIsValid= false;
            errors['petname']="please enter pet name"
        }
        else if(! nameonlyregex.test(formData.petname)){
          console.log("regex")
          formIsValid=false;
            errors['petname']="please enter a Valid Name"
        }
        if(!formData.numbers){
            formIsValid= false;
            errors['numbers']="please enter quanity"
        }
        else if(!  /^[0-9\b]+$/.test(formData.numbers)){
            formIsValid = false ;
            errors['numbers']="please enter numbers only"
        }
        if(!formData.breed){
            formIsValid= false;
            errors['breed']="please Select breed"
        }
        if(!formData.price){
            formIsValid= false;
            errors['price']="please enter price "
        }
        if(!formData.age){
            formIsValid= false;
            errors['age']="please enter age"
        }
        if(!formData.location){
            formIsValid= false;
            errors['location']="please enter location "
        }
        if(!formData.color){
            formIsValid= false;
            errors['color']="please enter color "
        }
        if(!formData.kciRegister){
            formIsValid= false;
            errors['kciRegister']="please select Kci  "
        }
        if(!formData.champion){
            formIsValid= false;
            errors['champion']="please  select Champion "
        }
        if(!formData.microchip){
            formIsValid= false;
            errors['microchip']="please select microchip  "
        }
        if(!formData.vaccination){
            formIsValid= false;
            errors['vaccination']="please select vaccination "
        }
        if(!formData.city){
            formIsValid= false;
            errors['city']="please enter city"
        }
        if(!formData.state){
            formIsValid= false;
            errors['state']="please enter state"
        }
        setFormError(errors)
if(Object.keys(errors).length === 0 && dataDetail === null ){



            axios.post("https://demo.emeetify.com:81/pet/pets/",payload,config)
            .then((response)=>{
                console.log("response",response)
                toast.success("Pet Added Successfully")
               setSelectedImage(null)
             setFormData(initailState)
            
            })
            .catch((error)=>{
                console.log("error",error);
            })
        }

    if(dataDetail && Object.keys(errors).length === 0){
        axios.put(`https://demo.emeetify.com:81/pet/pets/${dataDetail?.pet_id}`,payload,config)
        .then((response)=>{
            console.log(response?.data)
            toast.success(response?.data?.message)
        }).catch((error)=>{
            console.log(error)
        })
    }
    else{
        toast.error("Please Enter All Fields")
    }
    }

    const handleClickBackPetPost=()=>{
        navigate('/posts')
    }
const handleImageUpload= async(e)=>{
    console.log(e)
    let reader= new FileReader();
// console.log(reader)
    let file = e.target.files[0];
// console.log("/////",file)
setPictureupload(file)
    reader.onloadend=()=>{
        // console.log("/////",reader.result)
        setSelectedImage(reader.result)
    }
    reader.readAsDataURL(file)

}


// useEffect(() => {
//     if (pictureupload) {
//       setSelectedImage(URL.createObjectURL(pictureupload));
//     }
//   }, [pictureupload]);
useEffect(()=>{

// console.log("------>>>",selectedImage)
},[selectedImage, imageRemove])

const handleClose=()=>{
    setSelectedImage(null)
}
    return(
    <>
        <Navbar/>
  <ToastContainer/>
    <Card className='main-body-posts-add-pets'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackPetPost} > 
             <ArrowBackIcon/><Typography >Back</Typography>
        </Button>
    
        <Typography className='add-pet-text'>{dataDetail?"Edit":"Add"} Pet</Typography>
    <Card  className='add-pet-card'>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Category</Typography>
                <Select
    name="category"
    id="demo-simple-select"
    onChange={handleChange}
    value={formData.category}
   sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}

 >
   <MenuItem value={'Dog'}>
          Dog
   </MenuItem>
   <MenuItem value={'Cat'}>Cat</MenuItem>
   <MenuItem value={"Birds"}>Bird</MenuItem>
 </Select>
 
 { !formData?.category && formError?.category &&
<Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.category}</Grid> }
            </Grid>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Gender</Typography>
                <Select
   name="gender"
   onChange={handleChange}
   value={formData.gender}
   id="demo-simple-select"
   sx={{height:'50px',width:'370px',backgroundColor:'#f6f6f6'}}
 >
   
   <MenuItem value={"Male"}>Male</MenuItem>
   <MenuItem value={"Female"}>Female</MenuItem>
 </Select>
 {
    !formData.gender&& formError.gender &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.gender} </Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Pet Name</Typography>
                <TextField name="petname" 
                 onChange={handleChange}
                 onKeyPress={ allowsOnlyCharacters}
                 value={formData.petname}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />

{ !formData?.petname && formError?.petname &&
<Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.petname}</Grid> }



            </Grid>
          
            <Grid item sx={{marginTop:'25px',marginLeft:'80px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Description</Typography>
                <TextareaAutosize name="description" 
                onChange={handleChange}
                value={formData.description}
                minRows={10} className='text-area-auto' />
 {
    !formData.description && formError.description &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.description} </Grid>
 }
            </Grid>
            </Grid>
            <Grid item sx={{marginLeft:'35px',marginTop:'-80px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Numbers</Typography>
                <TextField name="numbers"
                onChange={handleChange}
                onKeyPress={ allowsOnlyNumeric}
                value={formData.numbers}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                { !formData?.numbers && formError?.numbers &&
<Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.numbers}</Grid> }
            </Grid>
        
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography name='breed'
            onChange={handleChange}
            value={formData.breed}
            sx={{color:'gray',marginLeft:'15px'}}>Breed</Typography>
            <Select
   name="breed"
   onChange={handleChange}
    value={formData.breed}
   id="demo-simple-select"
   sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}} >
   
   <MenuItem value={"German Shepherd"}>German Shepherd</MenuItem>
   <MenuItem value={'Rotwiller'}>Rottwiller</MenuItem>
 </Select>

 {
    !formData.breed && formError.breed &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.breed} </Grid>
 }
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'89px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Price</Typography>
                <TextField name='price'
                onChange={handleChange}
                value={formData.price}
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
 {
    !formData.price && formError.price &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.price} </Grid>
 }
    
            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Age</Typography>
            <TextField name='age'
            onChange={handleChange}
            onKeyPress={ allowsOnlyNumeric}
            value={formData.age}
            sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />


{
    !formData.age && formError.age &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.age} </Grid>
 }
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'70px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Location</Typography>
                <TextField  name='location' 
                onChange={handleChange}
                value={formData.location}
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
 {
    !formData.location && formError.location &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.location} </Grid>
 }
            </Grid>
          
        </Grid>
        <Grid container>
            <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Color</Typography>
            <TextField  name='color'
            onChange={handleChange}
            value={formData.color}
            sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />

{
    !formData.color && formError.color &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.color} </Grid>
 }
            </Grid>
            <Grid item sx={{marginTop:'20px',marginLeft:'70px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>City</Typography>
                <TextField  name='city' 
                onChange={handleChange}
                value={formData.city}
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />
 {
    !formData.city && formError.city &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.city} </Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
        <Grid item sx={{marginLeft:'30px',marginTop:'21px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>State</Typography>
            <TextField name='state'
            onChange={handleChange}
            value={formData.state}
            sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}} />


{
    !formData.state && formError.state &&
    <Grid sx={{marginTop:'10px',marginLeft:'80px',color:'red'}}>{formError.state} </Grid>
 }
            </Grid>

        </Grid>
        <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Upload Images</Typography>
                <Typography sx={{color:'lightgrey'}}>(2 more images can be add)</Typography>
            </Box>
            <input
  accept="image/*"
  id="image-upload"
  type="file"
  style={{ display: 'none' }}
onChange={handleImageUpload}
/>
<label htmlFor="image-upload">

            <Button  component='span' className='upload-pet-pic-btn'>Upload</Button>
            </label>
        
        </Stack>
        <Stack direction='row'>
           { selectedImage &&
    
                <Card className="upload-pet-1">
      <CloseOutlinedIcon onClick={handleClose}    className={'remove-icon-upload-pet'} />

            <img src={selectedImage}/>
            </Card> }
            {/* <Card className="upload-pet-1">
                <img src={addPet2}/>
                <CloseOutlinedIcon className='remove-icon-upload-pet2'/>
            </Card> className={imageRemove  && selectedImage=== true ?'remove-icon-upload-pet':""}
            <Card className="upload-pet-1">
                <img src={addPet3}/>
                 className={'remove-icon-upload-pet'}
                 className={selectedImage=== true ?'remove-icon-upload-pet':"closecss"}
                <CloseOutlinedIcon className='remove-icon-upload-pet3'/>
            </Card>
            <Card className="upload-pet-1">
                <img src={addPet3}/>
                <CloseOutlinedIcon className='remove-icon-upload-pet3'/>
            </Card> */}
        </Stack>
        <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Upload Video</Typography>
            </Box>
            <Button className='upload-video-pet-pic-btn'>Upload</Button>
        </Stack>
        <Box sx={{marginLeft:'30px',marginTop:'21px'}}>
        <Typography sx={{color:'gray',marginLeft:'15px'}}>KCI Registration</Typography>
        <Select
 name='kciRegister'
 onChange={handleChange}
 value={formData.kciRegister}
 sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
   id="demo-simple-select"
 >
   
   <MenuItem value={"Yes"}>Yes</MenuItem>
   <MenuItem value={"No"}>No</MenuItem>
 </Select>
        {
            !formData.kciRegister && formError.kciRegister &&
            <Grid sx={{color:'red',marginTop:'10px',marginLeft:'25px'}}>{formError.kciRegister}</Grid>
        }
        </Box>
        <Stack direction='row' className='stack-upload-image'>
            <Box>    
                <Typography sx={{color:'black'}}>Attach KCI doc.</Typography>
            </Box>
            <Button className='upload-kci-pet-pic-btn'>Upload</Button>
        </Stack>
        <Stack direction='row' className='stack-champion'>
            <Box>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Champion</Typography>
            <Select
               id="demo-simple-select"
            name="champion"
            onChange={handleChange}
            value={formData.champion}
            sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                 </Select>
                 {
            !formData.champion && formError.champion &&
            <Grid sx={{color:'red',marginTop:'10px',marginLeft:'25px'}}>{formError.champion}</Grid>
        }
            </Box>
            <Box className='box-microchip'>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Microchip</Typography>
            <Select
               id="demo-simple-select"
            name='microchip'
            onChange={handleChange}
          value={formData.microchip}
            sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                 </Select>
                 {
            !formData.microchip && formError.microchip &&
            <Grid sx={{color:'red',marginTop:'10px',marginLeft:'25px'}}>{formError.microchip}</Grid>
        }
            </Box>
        </Stack>
        <Box  sx={{marginLeft:'30px',marginTop:'21px'}}> 
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Vaccination</Typography>
            <Select
               id="demo-simple-select"
            name='vaccination'
            onChange={handleChange}
          value={formData.vaccination}
          sx={{height:'55px',width:'350px',backgroundColor:'#f6f6f6'}}>
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                 </Select>
                 {
            !formData.vaccination && formError.vaccination &&
            <Grid sx={{color:'red',marginTop:'10px',marginLeft:'25px'}}>{formError.vaccination}</Grid>
        }
            </Box>
            <Stack direction='row' className='stack-upload-image'>
            <Box>
                <Typography sx={{color:'black'}}>Vaccination Attachment</Typography>
            </Box>
            <Button className='upload-vaccination-pet-pic-btn'>Upload</Button>
        </Stack>
        <Stack direction='row' className='stack-btn-cancel-add-pet'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
            <Button className='add-pet-btn' onClick={handleSubmit}>{dataDetail ? "Update":"Add"} Pet</Button>

        </Stack>
    </Card>

    </Card>
    </>
    )
}