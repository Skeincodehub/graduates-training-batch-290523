import { Box, Button, Card, Grid, Modal, TextField, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { allowsOnlyNumeric } from "../Ads/AddNewAd";
import { MuiOtpInput } from "mui-one-time-password-input";
export function Reset(){
const location= useLocation()
const navigate = useNavigate()
const [numberData,setNumberData]= useState()
const [formErrorForgotPassword,setFormErrorForgotPassword]= useState()
const [openPopUp,setOpenPopUp] = useState(false)
const [passwordPopUp,setPasswordPopUp]= useState(false)
const [otpValue,setOtpValue] = useState('')
const [formErrorsotp,setFormErrorsotp] =useState()
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
    setOpenPopUp(true)
}
else if(res?.data?.status == false){
    toast.error(res?.data?.message)
}
}).catch((error)=>{
console.log(error)
})
}

const handleChangePassword=()=>{
    axios.post("https://demo.emeetify.com:81/pet/users/changePassword",{mobile_no : numberData})
    .then((res)=>{
        console.log("QWERTYU",res)
    }).catch((error)=>{
        console.log(error)
    })
}
const handleOtpChange=(e)=>{
    setOtpValue(e)

}
const forgotPayload={
    'mobile_no':numberData ,
    "otp" :otpValue


}
const handleVerifyOtp =()=>{
    const errors={}
    let formIsValid = false

    if(!otpValue){
        formIsValid = true;
        errors['otpfield']= "Please Enter OTP"
    }
  
setFormErrorsotp(errors)

if(Object.keys(errors).length == 0){
    axios.post('https://demo.emeetify.com:81/pet/users/validate_otp',forgotPayload)
    .then((res)=>{
        // if(res?.data?.status){
        //     toast.success("OTP Verified Successfully")
        // }
        if(res?.status){
            toast.success("OTP Verified Successfully")
      setPasswordPopUp(true)
        }
    
    }).catch((error)=>{
        console.log(error)
    })
}

}

    return(
        <>
        <ToastContainer/>
        <Box >
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
onClick={()=>navigate("/")}
sx={{marginTop:"35px",marginLeft:'70px',textTransform:'none',color:'black'}}>
 <KeyboardBackspaceIcon/>   Back to Login</Button>
 </Box>
</Card>
  </Card>
  </Box>
  {
    openPopUp ?
    <Modal
    open={openPopUp}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{height:'100vh',width:'100vw'}}>
<Card sx={{marginLeft:'400px',marginTop:'120px',height:'500px',width:'500px '}}>
<Box sx={{marginLeft:'80px',height:'500px',width:'500px '}}>
    <KeyIcon sx={{marginLeft:'120px',height:'80px',backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))',
    marginTop:'20px',
    color:'white',rotate:'300deg',borderRadius:"100px",width:"80px"}}/>
<Typography 

sx={{marginLeft:'95px',fontWeight:'bold',fontSize:'20px',marginTop:"5px",textDecoration:'bold'}}>Enter OTP </Typography>
<Typography sx={{marginLeft:'15px',marginTop:"25px"}}>We have sent you One Time Password to your email </Typography>

{/* <Typography sx={{marginLeft:'75px',marginTop:"25px",textDecoration:'bold'}}> OTP </Typography> */}
<MuiOtpInput length={5} 
value={otpValue}
name="otpfield"
 onChange={handleOtpChange} sx={{height:'200px',marginTop:'-55px',marginLeft:"40px",width:'270px'}} 
/>
{
    formErrorsotp?.otpfield && ! otpValue ? <Box sx={{marginLeft:'60px',color:'red',marginTop:"-50px",textDecoration:'bold'}}>
        {formErrorsotp?.otpfield}
    </Box>:''
}
<Box>
<Button sx={{marginLeft:'50px',
paddingRight:'90px',paddingLeft:'80px',marginTop:'50px',
textTransform:'none',
backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))'
,color:'white'}}
onClick={handleVerifyOtp}
>Verify OTP</Button>
</Box>
</Box>

</Card>
    </Box>
  
  </Modal>
  :""
  }
  {
    passwordPopUp &&
     <Modal
    open={openPopUp}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{height:'100vh',width:'100vw'}}>
<Card sx={{marginLeft:'400px',marginTop:'120px',height:'500px',width:'500px '}}>
<Box sx={{marginLeft:'70px',height:'500px',width:'500px '}}>
    <KeyIcon sx={{marginLeft:'120px',height:'80px',backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))',
    marginTop:'20px',
    color:'white',rotate:'300deg',borderRadius:"100px",width:"80px"}}/>
<Typography 

sx={{marginLeft:'75px',fontWeight:'bold',fontSize:'20px',marginTop:"5px",textDecoration:'bold'}}>Create New Password </Typography>
<Box sx={{marginLeft:'60px'}}>
<Typography sx={{marginLeft:'45px',marginTop:"25px",textDecoration:'bold'}}> Enter New Password </Typography>
<TextField 
type={"password"}
>

</TextField>
<Typography sx={{marginLeft:'45px',marginTop:"25px",textDecoration:'bold'}}> Confirm New Password </Typography>
<TextField
type={"password"}

>
    
</TextField><br/>
<Button
sx={{marginLeft:'0px',
paddingRight:'60px',paddingLeft:'60px',marginTop:'30px',
textTransform:'none',
backgroundImage:'linear-gradient(to right,rgb(100, 14, 230),   rgb(182, 20, 211))'
,color:'white'}}
onClick={handleChangePassword}
>Change Password</Button>
</Box>
<Box>

</Box>
</Box>

</Card>
    </Box>
  
  </Modal>
    
  }

        </>
    )
}