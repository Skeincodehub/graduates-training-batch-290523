import { Box, Button, Card, Grid, Input, Modal, TextField, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import axios from "axios";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import KeyIcon from '@mui/icons-material/Key';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom' 
import './Login.css';
import { Service } from "./Services/Service";
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allowsOnlyNumeric } from "./Ads/AddNewAd";

export function LoginCredientials(){
    const navigate=useNavigate()
    const parms= useParams()
    const location = useLocation()
    const [roleData,setRoleData] = useState()
    const [numberData,setNumberData]= useState()
    const [formErrorForgotPassword,setFormErrorForgotPassword]= useState()
    const [openModel,setOpenModel]=useState(false)
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const [formError,setFormError]=useState({
        email:'',
        password:''
    })

    const handleinputChange=(e)=>{
        const number = e.target.value

        setNumberData(number);
    }
    const forgotPasswordPayload={
        "mobile_no":numberData
    }
const handleResetPassword=(e)=>{

    const errors={};
    let formIsValid= true ;
    if(!numberData){
        formIsValid = false ;
        errors['forgotpassword']="Please Enter Mobile Number"
    }

setFormErrorForgotPassword(errors)

if(Object.keys(errors).length == 0)
    axios.post("https://demo.emeetify.com:81/pet/users/forgotPassword",forgotPasswordPayload)
.then((res)=>{
    if(res?.data.status){
        navigate("/reset-password",{state:numberData})
    }
    else if(res?.data?.status == false){
        toast.error(res?.data?.message)
    }
}).catch((error)=>{
    console.log(error)
})
}

    const handleChange=(e)=>{
        const {name,value}=e.target ;
        
        setFormData({...formData,[name]:value
        })
}

const loginpayload={
    'mobile_no':formData.email,
    'password':formData.password
}

const LoginDetails= [{username:"admin@gmail.com",password:"Admin@123"}]
// // Validate form fields
// function validateForm(email, password) {
//     // Perform necessary validation checks
//     if (!username || !password) {
//       // Display error messages for empty fields
//       return false;
//     }
//     return true;
//   }

const handleForgotPassword =()=>{
setOpenModel(true)
navigate("/reset-password")
   
}


const validateForm=()=>{
    if(!formData.email || !formData.password){
        return false;

    }
    return true;
}
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer yourToken' // Replace with your desired authorization token
  };
  
  const handleSubmit=(e)=>{
        console.log(formData)

        e.preventDefault();

            const errors={};
            let formIsValid= true ;
        if(!formData.email){
            formIsValid= false
            errors['email'] = "please enter your E-mail id";
        }
        if(!formData.password){
            formIsValid= false;
            errors['password']="please enter your Password";
        }

        setFormError(errors)

        if (!validateForm(formData.email, formData.password)) {
            // Display validation error messages
           // demo.emeetify.com:81
        
        return;
          }

        //   <Service/>
axios.post('https://demo.emeetify.com:81/pet/users/login',loginpayload)
        .then((response)=>{
            // console.log(",,,,",response)
            console.log(response.data);
            var userData= response?.data?.data
            setRoleData(response?.data?.data)
// console.log("---",response.data.refresh_token);
        if(response.data.status!== false)
        {
              localStorage.setItem('token',response.data.token);
                localStorage.setItem('refresh_token',response.data.refresh_token)
                navigate("/home",{state: userData});
                toast.success("Login Successfull")
              
        }
        else{
                console.log("login failed");
                toast.error("login failed")
            }
        }).catch((error)=>{
            console.log("error",error)
        })


    }


    // if(formData.email==LoginDetails[0].username && formData.password==LoginDetails[0].password){
    //     console.log("workingLogin");
    //     localStorage.setItem("username",formData.username)
    //     navigate("/home");
    // }
    // else{
    //     console.log("signup mismatched")
    // }
   
    // }
    // const local = localStorage.getItem('token')
    // useEffect(()=>{
    //     if(!local){
         
    //         navigate('/');
          
          
    //     }
    //     else{
    //  console.log("else working");
    //     }
    // },[])

    // const callbackParent=(roleData)=>{
    //     send(roleData)
    // }

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
        }

    },[])
    
    return(
        <div>
          <ToastContainer/>
            <Box sx={{marginTop:'30px',marginLeft:'160px'}}>           
              <form onSubmit={handleSubmit}>  
             <Typography sx={{marginLeft:'30px',color:"grey"}}> User Name</Typography>
            <TextField variant="filled" 
            className='input-username'
            name="email"
            placeholder="username"
            data-testid="user-name"
           
            value={formData.email}
            onChange={handleChange}

            ></TextField>
            {/* <input type='text' placeholder="username" value={formData?.username} onChange={handleChange}/> */}
            
            <div 
            data-testid='username_errmsg'
            className='div-error-msg'
            sx={{ marginLeft: "40px", marginTop: "110px", color: "red" }}>
                
                {!formData.email && formError.email}</div>

            <Typography sx={{marginLeft:'30px',marginTop:"50px",color:"grey"}} >Password</Typography>
            <TextField variant="filled" 
            className='input-username'
            type="password"
            name="password"
            data-testid = 'password'
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            ></TextField><br/>
 {formError.password && !formData.password && <Grid 
 name='password_errmsg'
 sx={{ marginLeft: "40px", marginTop: "50px", color: "red" }}>{formError.password}</Grid>}

     <FormGroup sx={{marginTop:'35px'}}>
         <FormControlLabel control={<Checkbox/>} label="Remember Me" />
      </FormGroup>
<Button  type="submit" className="login-btn" >Login</Button><br/>
<Button className="forgot-btn"
onClick={handleForgotPassword}
>Forgot password?</Button> 
{
    openModel  ?
    <Box>
           <ToastContainer/>
        <Modal
  open={openModel}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
  <Card sx={{height:'100vh',width:'100vw'}}>
<Card sx={{marginLeft:'350px',marginTop:'120px',height:'450px',width:'500px '}}>
    <Box sx={{marginLeft:'100px'}}>
<KeyIcon sx={{marginLeft:'100px',height:'80px',backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))',color:'white',rotate:'300deg',borderRadius:"100px",width:"80px"}}/>
<Typography 

sx={{marginLeft:'65px',fontWeight:'bold',fontSize:'20px',marginTop:"5px",textDecoration:'bold'}}>Forgot Password ? </Typography>

<Typography sx={{marginLeft:'25px',marginTop:"25px"}}>Enter Your Mobile Number </Typography>
<TextField sx={{marginLeft:'25px',marginTop:"15px"}} 
onChange={handleinputChange}
value={numberData}
name='forgotpassword'
onKeyPress={allowsOnlyNumeric}></TextField><br/>
 {
    formErrorForgotPassword?.forgotpassword && !numberData ?
    <Grid sx={{color:'red',marginLeft:'30px',marginTop:'15px'}}>{formErrorForgotPassword.forgotpassword}</Grid>
    
    :''
 }
<Button sx={{textTransform:"none",
backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))',color:'white',marginTop:'20px',marginLeft:'30px',
paddingLeft:"45px",paddingRight:"75px",textAlign:'center'}}
onClick={handleResetPassword}  

>
 
 Reset Password</Button><br/>

<Button
onClick={()=>setOpenModel(false)}
sx={{marginTop:"35px",marginLeft:'70px',textTransform:'none',color:'black'}}>
 <KeyboardBackspaceIcon/>   Back to Login</Button>
 </Box>
</Card>
  </Card>
  </Box>
</Modal>
    </Box>
    :""
}
</form>    
        </Box>

        </div>

    )
 }