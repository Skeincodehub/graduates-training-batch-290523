import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './UserDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import userpic3 from '../Dashboard/Web - Menu/chat&notification/user1.png';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export function UserDetails(){
const navigate=useNavigate();
const parms = useParams();
console.log("qwerty", parms);
const location = useLocation();
const dataDetail = location.state;
const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };
console.log(dataDetail)
const handleBackProduct=()=>{
    navigate('/users')
}
useEffect(()=>{
axios.get(`https://demo.emeetify.com:81/pet/address/?user_id=${parms?.id}`,config)
.then((res)=>{
    console.log("123456",res?.data)
}).catch((error)=>{
    console.log(error)
})



},[])

const handleEdit=(dataDetail,parms)=>{
    navigate(`/edit-user/${parms?.id}`,{state:dataDetail})
  
    console.log(dataDetail,"1234")
}
    return(
        <>
        
        <Navbar/>
        <Card className='main-card-user-details'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleBackProduct}> 
        <ArrowBackIcon/><Typography >Back</Typography></Button>
            <Typography className='user-detail-text'>User Details</Typography>
            <Stack direction='row' className='product-stack'>
    <Box>
        <img src={`https://demo.emeetify.com:5016/${dataDetail?.profile_pic}`} className='user-image' alt=''/>
    </Box>
    <Box className='profile-user-details'>
        <Typography className="username-text" >{dataDetail.firstname +" "+ dataDetail.lastname}</Typography>
        <Typography className='phone-number-text'>{dataDetail.mobile_no}</Typography>
        <Typography>{dataDetail.email}</Typography>

        
    </Box>
    <Button className='edit-btn-user ' dataDetails={dataDetail} detail={parms} onClick={(e)=>handleEdit(dataDetail,parms)}>Edit</Button>
</Stack>
<Box className='address-text-box'>
    <Typography className="address-text" >Address</Typography>
    <Typography className='address-content' >       {dataDetail.address+","+dataDetail.city}<br/>{dataDetail.state+","+dataDetail.country+","+dataDetail.pincode}
</Typography>
</Box>
 <Stack className='stack-address'>
    <Card className='address-home'>
     
        <Typography className='remove-btn'><span className='remove-text'> Remove</span> <CloseIcon className='remove-icon'/> </Typography>
       
        <Box sx={{alignItems:'center',marginLeft:'70px',marginTop:'20px'}}>
             <Typography>Home <ModeEditIcon sx={{height:'15px',width:'15px'}}/></Typography>
        <Typography>
       {dataDetail.address+","+dataDetail.city}<br/>{dataDetail.state+","+dataDetail.country+","+dataDetail.pincode}
        </Typography>
        </Box>
    </Card>
    <Card className='address-office'>
     
        <Typography className='remove-btn'><span className='remove-text'> Remove</span> <CloseIcon className='remove-icon'/> </Typography>
       
        <Box sx={{alignItems:'center',marginLeft:'70px',marginTop:'20px'}}>
             <Typography>Office <ModeEditIcon sx={{height:'15px',width:'15px'}}/></Typography>
        <Typography>
        {dataDetail.address+","+dataDetail.city}<br/>{dataDetail.state+","+dataDetail.country+","+dataDetail.pincode}
        </Typography>
        </Box>
    </Card>
 </Stack>
        </Card>
        </>
    )
}