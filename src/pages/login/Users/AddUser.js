import { Button, Card, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { Navbar } from "../Navbar";
import './AddUser.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const initialState={
    firstname:'',
    lastname:'',
    addresstype:"",
    phonenumber:'',
    addressline:'',
    roleid:'',
    emailid:'',
    password:'',
    country:'',
    state:'',
    city:'',
    pincode:''

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
      console.log("erroronly");
    }
  }
  
  export function allowsOnlyNumeric(e) {
    const re = /^[0-9\b]+$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }
export function AddUser(){
    const navigate=useNavigate();
const [profilePictureupload,setProfilePictureupload]= useState();
const [selectedImage,setSelectedImage]=useState();
  const [formData,setFormData]=useState(initialState)
  const [formError,setFormError]=useState(initialState)
const [selectedCountry,setSelectedCountry]=useState()
const [selectedState,setSelectedState] = useState()
const [selectedCity,setSelectedCity]= useState()
const [countryList,setCountryList]=useState([])
const [stateList,setStateList]=useState([])
const [cityList,setCityList]= useState([])
const [dropError,setDropError]= useState(initialState)
const parms=useParams()
// console.log(parms)
const location = useLocation()
// console.log("QWERTYU",location)

const detail = location.state
const detailpic= `https://demo.emeetify.com:5016/${detail?.profile_pic}`
// console.log(detail)
const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };

const regemail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  useEffect(()=>{
        axios.get('https://demo.emeetify.com:81/pet/location/countries')
        .then((response)=>{
            console.log("Countryyy",response?.data?.data)
            setCountryList(response?.data?.data)

        }).catch((error)=>{
            console.log("error",error)
        })
  },[])

  useEffect(()=>{
    if(parms  && detail){
        setFormData({
            firstname:detail?.firstname,
            lastname:detail?.lastname,
            phonenumber:detail?.mobile_no,
            roleid:detail?.role_id,
            emailid:detail?.email,
            password:detail?.password,
            country:detail?.country,
            pincode:detail?.pincode
       
        })   
      
        setSelectedImage(detailpic)

        setSelectedCountry(detail?.country)
        setSelectedState(detail?.state)
        setSelectedCity(detail?.city)
    }

  },[])
const addresspayload={
       "country":selectedCountry,
    "state":selectedState,
    "city": selectedCity,
    "pincode":formData.pincode,
   " address_line":formData.addressline,
   " address_type": formData.addresstype
}
  const userpayload={
    "firstname":formData?.firstname,
    "lastname":formData?.lastname,
    "role_id":formData.roleid,
    "mobile_no":formData.phonenumber,
    "email":formData.emailid,
    "password":formData.password,
    // "country":selectedCountry,
    // "state":selectedState,
    // "city": selectedCity,
    // "pincode":formData.pincode,

    "profile_pic": selectedImage,
    "status":'',
}
  const handleCountry=(e)=>{
    const getState =e.target.value
    console.log("stateee", getState)
    setSelectedCountry(getState)
  }
  const handleStateChange=(e)=>{
    const stateCode = e.target.value ;
    setSelectedState(stateCode)
  }
  const handleCityChange=(e)=>{

    setSelectedCity(e.target.value)
  }

  useEffect(()=>{
        axios.get(`https://demo.emeetify.com:81/pet/location/states?country_code=${selectedCountry}`)
        .then((response)=>{
            // console.log("state",response?.data?.data)
            setStateList(response?.data?.data)

        }).catch((error)=>{
            console.log("error",error)
        })
  },[selectedCountry])
  useEffect(()=>{
    axios.get(`https://demo.emeetify.com:81/pet/location/cities/?state_code=${selectedState}&country_code=${selectedCountry}`)
    .then((response)=>{
        // console.log("city",response?.data?.data)
        setCityList(response?.data?.data)
    }).catch((error)=>{
        console.log(error)
    })
  },[selectedState,selectedCountry])
const handleProfileUpload=(e)=>{
        let reader= new FileReader();
        
        console.log(reader)
            let file = e.target.files[0];
        // console.log("/////",file)
        setProfilePictureupload(file)
            reader.onloadend=()=>{
                console.log("/////",reader.result)
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)

    }
    const handleClose=()=>{
        setSelectedImage(null);
    }
const handleInputChange=(e)=>{
    const {name,value}=e.target;
// console.log("1234",formData)

    setFormData({...formData,[name]:value})
    }
    // console.log("data",formData)
    const handleClickBackAddUser=()=>{
        navigate('/users')
    }

    const handleSubmit=()=>{
         const errors={}
         let formIsValid= true 
        if(!formData.firstname){
            formIsValid= false;
            errors['firstname']="please Enter FirstName"
            // console.log("errrrrroor")
        }
        if(!formData.lastname){
            formIsValid= false;
            errors['lastname']="Please Enter LastName"
            // console.log("===>",errors)
        }
        if(!formData.phonenumber){
            formIsValid= false;
            errors['phonenumber'] ="please Enter PhoneNumber";
         }
         if(!formData.roleid){
            formIsValid= false;
            errors['roleid']="please select Role Id";
         }
         if(!formData.emailid){
            formIsValid= false;
            errors['emailid']= "please enter email id"
         }
        //  else if(regemail.test(formData.emailid)){
        //     formIsValid = false
        //     errors['emailid']="please enter valid  email"
        //     console.log("QWERTY")

        //  }
         if(!formData.password){
            formIsValid= false;
            errors['password']= "please enter password"
         }
         if(!formData.addressline){
            formIsValid= false;
            errors['addressline']= "please enter Address"
         }
         if(!formData.addresstype){
            formIsValid= false;
            errors['addresstype']= "please select Address Type"
         }
         if(!selectedCountry){
            formIsValid= false;
            errors['country']="please select Country"
            // console.log(errors)
         }
         if(!selectedState){
            formIsValid = false;
            errors['state']="Please Select State"
         }
         if(!selectedCity){
            formIsValid= false;
            errors['city'] = "Please Select City"
         }
         if(!formData.pincode){
            formIsValid = false;
            errors['pincode']="please  Enter Pincode" 
         }
         if(!selectedImage){
            formIsValid= false;
            errors['profilepic']="Please Select Image"
         }

setFormError(errors);
setDropError(errors)
console.log("errorss",formError)
console.log("1234",dropError)
console.log("567",errors)

         if(Object.keys(errors).length === 0){
            axios.post("https://demo.emeetify.com:81/pet/users/register",userpayload,config)
            .then((response)=>{
                console.log(response?.data?.data)
            }).catch((error)=>{
                console.log(error)
            })
            axios.post("https://demo.emeetify.com:81/pet/address/",addresspayload,config)
            .then((response)=>{
                console.log("QWERTY",response?.data?.data)
            }).catch((error)=>{
                console.log(error)
            })
       
       
         }
         if(parms && detail && Object.keys(errors).length == 0 ){

            axios.put(`https://demo.emeetify.com:81/pet/users/${parms.id}`,userpayload,config)
            .then((response)=>{
                console.log(response.data)
                toast.success(response?.data?.message)
            }).catch((error)=>{
                console.log(error)
            })
        }
         else{
          
            console.log("9876543210")  }

           

    }
useEffect(()=>{

},[formError,dropError])
    return(
        <>
        <Navbar/>
        {/* {
            console.log("QWERT",countryList[0]?.code)
        } */}
        <ToastContainer/>
     <Card className='main-card-add-user'>
     <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAddUser} > 
    <ArrowBackIcon/><Typography >Back</Typography></Button>
{
    parms && detail ? 
    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}> Edit User   </Typography>

    :    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}> Add  User   </Typography>

}


     {/* <input className='input-file' type='file'/> */}
     <input
  accept="image/*"
  id="image-upload"
  type="file"
  style={{ display: 'none' }}
onChange={handleProfileUpload}
/>
<label htmlFor="image-upload">
<Button component='span'
 sx={{marginLeft:'40px',marginTop:'25px',textTransform:'none',color:'white',backgroundColor:'blue'}}
 name='profilepic'
 > Upload Profile Picture
{/* <AddPhotoAlternateIcon  className="add-user-photo"/> */}
  </Button>   
       </label>
       {
        selectedImage &&
        <Card  sx={{width:'300px',marginLeft:'50px',height:'200px'}}> 
   <CloseOutlinedIcon onClick={handleClose}    className={'remove-icon-upload-profile'} />

            <img src={selectedImage} />

        </Card>
       }
 {
    !selectedImage && dropError.profilepic &&
    <Grid sx={{marginTop:'50px',marginLeft:'40px',color:'red'}}>{dropError.profilepic}</Grid>
 }
     
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography 
                sx={{color:'gray',marginLeft:'15px'}}
              
                >First Name</Typography>
                   <TextField 
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                onKeyPress={allowsOnlyCharacters}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                {
    !formData.firstname && formError.firstname &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.firstname}</Grid>
 }
            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Last Name</Typography>

             <TextField 
                name="lastname"
                onKeyPress={allowsOnlyCharacters}
                value={formData.lastname}
                onChange={handleInputChange}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                      {
    !formData.lastname && formError.lastname &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.lastname}</Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Phone Number</Typography>
                <TextField 
                name='phonenumber'
                value={formData.phonenumber}
                onChange={handleInputChange}
                onKeyPress={allowsOnlyNumeric}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                                      {
    !formData.phonenumber && formError.phonenumber &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.phonenumber}</Grid>
 }
            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Role Id</Typography>
            <Select
            sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
            value={formData.roleid}
            name='roleid'
            onChange={handleInputChange}
        >
      <MenuItem  value={'1'}>Admin</MenuItem>
      <MenuItem  value={'2'}>User</MenuItem>
            </Select>
            {
    !formData.roleid && formError.roleid &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.roleid}</Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>Email id</Typography>
                <TextField 
                name='emailid'
                value={formData.emailid}
                onChange={handleInputChange}
                sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                      {
    !formData.emailid && formError.emailid &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.emailid}</Grid>
 }

            </Grid>
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Password</Typography>
            <TextField 
        name='password'
        value={formData.password}
        onChange={handleInputChange}
        sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
                              {
    !formData.password && formError.password &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.password}</Grid>
 }
            </Grid>
        </Grid>
        <Grid container>
            
            <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
            <Typography sx={{color:'gray',marginLeft:'15px'}}>Address Type</Typography>
                   <Select
                sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
                value={formData.addresstype}
                name='addresstype'
                onChange={handleInputChange}
                // onChange={handleCountry}
             
            
                >
             
                       <MenuItem value={"home"}>Home</MenuItem>
                       <MenuItem value={"office"}>Office</MenuItem>

         
                    </Select>
                    {
        ! formData.addresstype && formError.addresstype &&
        <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.addresstype}</Grid>
     }
    
                </Grid>
                
                <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                    <Typography sx={{color:'gray',marginLeft:'15px'}}> Address</Typography>
            <TextField
            onChange={handleInputChange}
            value={formData.addressline}
            name='addressline'
            />
                    {
        ! formData.addressline && formError.addressline &&
        <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.addressline}</Grid>
     }
                </Grid>
               
            </Grid>



        <Grid container>
            
        <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
        <Typography sx={{color:'gray',marginLeft:'15px'}}>Country</Typography>
               <Select
            sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
            value={selectedCountry}
            // value={formData.country}
            name='country'
            // onChange={handleInputChange}
            onChange={handleCountry}
         
        
            >
           {
               countryList.map((country,index)=>(
                   <MenuItem key={country?.code} value={country?.code}>{country?.name}</MenuItem>


               ))
           }
                
                </Select>
                {
    ! selectedCountry && dropError.country &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{dropError.country}</Grid>
 }

            </Grid>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}> State</Typography>
 <Select
            sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
            value={selectedState}
            onChange={handleStateChange}
            // value={formData.state}
            // name='state'
            // onChange={handleInputChange}
        
            >
           {
               stateList.map((state,index)=>(
                   <MenuItem key={index} value={state?.code}>{state?.name}</MenuItem>


               ))
           }
                
                </Select>
                {
    ! selectedState && dropError.state &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{dropError.state}</Grid>
 }
            </Grid>
           
        </Grid>
           <Grid container>
            
        <Grid item sx={{marginLeft:'30px',marginTop:'25px'}}>
             <Typography sx={{color:'gray',marginLeft:'15px'}}>City</Typography>
               <Select
           sx={{height:'50px',width:'350px',backgroundColor:'#f6f6f6'}}
           value={selectedCity}
  onChange={handleCityChange}
// value={formData.city}
// name='city'
// onChange={handleInputChange}
           >
               {
                   cityList.map((city)=>(
<MenuItem key={city?.name} value={city?.name}> {city?.name}</MenuItem>
                   ))
               }
                 
        
                </Select>
                {
    ! selectedCity && dropError.city &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{dropError.city}</Grid>
 }
            </Grid>
            
            <Grid item sx={{marginTop:'25px',marginLeft:'35px'}}>
                <Typography sx={{color:'gray',marginLeft:'15px'}}>PinCode</Typography>
       <TextField
         onKeyPress={allowsOnlyNumeric}
         name='pincode'
         value={formData.pincode}
         onChange={handleInputChange}
       sx={{height:'57px',width:'350px',backgroundColor:'#f6f6f6'}} />
       {
    ! formData.pincode && formError.pincode &&
    <Grid sx={{marginTop:'20px',marginLeft:'40px',color:'red'}}>{formError.pincode}</Grid>
 }
            </Grid>
           
        </Grid>
      
        <Stack direction='row' className='stack-btn-cancel-add-product'>
            <Button className='cancel-add-pet-btn'>Cancel</Button>
                {
                     parms &&  detail ?  <Button className='add-pet-btn' onClick={handleSubmit}>  Update User </Button>
                     :            <Button className='add-pet-btn' onClick={handleSubmit}>  Add User </Button>

                }
             

        </Stack>
     </Card>
        </>
    )
}