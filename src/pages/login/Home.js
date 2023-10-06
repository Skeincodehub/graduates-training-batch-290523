import {  Box, Button, Card, Divider, Grid, Stack,  Typography} from "@mui/material";
import React, { useState } from "react";
import './Home.css'
//navbar import 
import PetsIcon from '@mui/icons-material/Pets';
//logo import 

import petdogimg from '../login/Dashboard/Web - Menu/dashboard_bg2.png';
import birdspic from '../login/Dashboard/Web - Menu/chat&notification/pxfuel.jpg'
import germandog from '../login/Dashboard/Web - Menu/chat&notification/german-dog.jpg';
import catimg from '../login/Dashboard/Web - Menu/chat&notification/cat.jpeg';
import petthings from '../login/Dashboard/Web - Menu/chat&notification/pet-things.jpg';
import pettoys from '../login/Dashboard/Web - Menu/chat&notification/pet-toys.jpg';
import peticon from '../login/Dashboard/Web - Menu/chat&notification/pet-icon.jpeg';
import { useEffect} from 'react';
import puppyimg from '../login/Dashboard/Web - Menu/chat&notification/puppy.jpg';
// import '../../index.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Loader } from "./Loader/Loader";
import CircularProgress from '@mui/material/CircularProgress';

export function Home(){
  const location = useLocation();
  const locationData= location.state
const navigate=useNavigate();
const [fetchedData,setFetchedData]=useState()
const [imgData,setImgData]=useState();
const [dataset,SetDataset]=useState();
const [userData,setUserData]= useState([]);
useEffect(()=>{
  if(!localStorage.getItem('token')){
      navigate('/')
  }

},[])

useEffect(()=>{


          axios.get('https://demo.emeetify.com:81/pet/utils/dashboard')
          .then((response)=>{
            // console.log(response.data.data);
            setFetchedData(response?.data);
            const imageSetData= response?.data?.data[0]?.petAddedBy[0]?.profile_pic 
            // console.log("OOOOO",imageSetData);
            const setData= response?.data?.data[0]?.petAddedBy[2]?.profile_pic
            // console.log("SetData",setData)
            SetDataset(`https://demo.emeetify.com:5016/${setData}`);
            setImgData(`https://demo.emeetify.com:5016/${imageSetData}`);
          }).catch((error)=>{
            console.log("error",error)
          })
},[]);
// console.log("--->",fetchedData);
// console.log("123456",imgData);
  return(
    <>{
      fetchedData == null ?
      // <CircularProgress sx={{height:'200px',width:'200px',padding:'10px',marginLeft:'450px',marginTop:'250px'}}/> 
      <Loader/>
      :
    <>
    <ToastContainer/>
    <Navbar location={locationData}/>
<Box className="main-body">
  <input type="date" defaultValue={'12-06-2023'}/>
  <Typography className="title-dashboard">Dashboard</Typography>
  <Stack className="card-pet"> 
  <Grid item>
<Typography className="heading-welcome">Welcome {locationData?.firstname}</Typography>
<Typography className="heading-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
<br/>accussantium doloremque </Typography>
</Grid>
<Grid item>
  <img src={petdogimg} className="pet-dog" alt=""/></Grid>

  </Stack>
  <Divider sx={{marginTop:'10px'}}/>


  <Typography className="title-dashboard">Posts</Typography>

<Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>

<Grid item xs={4} className="posts-main" >
<Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New posts<br/>{fetchedData?.data[0]?.petNewCount}</Typography>
<div>
<img src={germandog} className="bird-img" alt=""/>
<img src={birdspic} className="bird-img1" alt=""/><br/>
<img src={puppyimg} className="bird-img2" alt=""/>
<img src={catimg} className="bird-img3" alt=""/>
<Button className="view-all-btn">View All</Button>
</div>
        </Grid>
        <Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card" >

<Typography className="total-posts-name">Total Posts<br/>{fetchedData?.data[0]?.petCount}</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>{fetchedData?.data[0]?.petApprovedCount}</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <br />

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "410px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>{fetchedData?.data[0]?.petRejectedCount}</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>{fetchedData?.data[0]?.petPendingCount}</Typography>
<PetsIcon className='peticon'/>
  </Card>
        </Grid>
  
  </Grid>  

  <Divider sx={{marginTop:'10px'}}/>


<Typography className="title-dashboard">Orders</Typography>

<Card sx={{height:'330px',width:'100%',backgroundColor:'lightgray'}}>
{/* <Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
<Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card">

<Typography className="total-posts-name">Total Posts<br/>34</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>21</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <br/>

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "420px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>05</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>08</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>

</Grid> */}

<div className="div-order">
  <div>
<Grid container rowSpacing={1} columnSpacing={{xs:1}}>
  <Grid item xs={3} className="orders-card1" sx={{height:'90px', width:'120px', marginTop:'50px',marginLeft:'40px',backgroundColor:'white'  }}>
  <PetsIcon className='peticon-orders'/>

<Typography className="total-orders-name">Total Orders<br/>
<Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderCount}</Typography></Typography>




        
</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'20px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Approved<br/>
<Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderApproveCount}</Typography></Typography>

</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'20px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Rejected<br/><Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderRejectedCount}</Typography></Typography>

</Grid>
<Grid item xs={3} className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'35px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">pending<br/><Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderPendingCount}</Typography></Typography>

</Grid>
<Grid item xs={3}  className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'25px',width:'120px',backgroundColor:'white'  }}>
<PetsIcon className='peticon-orders'/>
<Typography className="total-orders-name">Inprocess<br/><Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderProgressCount}</Typography></Typography>

 </Grid>
<Grid item xs={3}  className="orders-card1" sx={{height:'90px',marginTop:'50px',marginLeft:'25px',width:'120px',backgroundColor:'white'  }} >
<PetsIcon className='peticon-orders'/>
 
<Typography className="total-orders-name">Delivered<br/><Typography sx={{marginLeft:'50px'}}>{fetchedData?.data[0]?.orderDeliverCount}</Typography></Typography>

</Grid>
</Grid>
    </div>
  <div>
    <Grid container>
      <Grid item sx={{height:'300px',width:'300px',marginRight:'15px',marginTop:'15px', backgroundColor:'white'}}> 
      <Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New Orders<br/>10</Typography>
<div>
<img src={petthings} className="bird-img" alt=""/>
<img src={pettoys} className="bird-img1" alt=""/><br/>
<img src={peticon} className="bird-img2" alt=""/>
<img src={catimg} className="bird-img3" alt=""/>
<Button className="view-all-btn">View All</Button>
</div>

      </Grid>
    </Grid>

  </div>
</div>
</Card>

{/* <Grid container  rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>


        <Grid item xs={2} sx={{marginLeft:'60px'}}>
        <Card className="total-posts-card" >

<Typography className="total-posts-name">Total Posts<br/>34</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className="total-posts-card-approved">

<Typography className="total-posts-name">Approved<br/>21</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <br />

        <Grid
          item
          xs={2}
          sx={{ marginLeft: "420px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-rejected" >

<Typography className="total-posts-name">Rejected<br/>05</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ marginLeft: "45px", marginTop: "-110px", float: "right" }}
        >
         <Card className="total-posts-card-pending" >

<Typography className="total-posts-name">Pending<br/>08</Typography>
<PetsIcon sx={{float:"right",color:'white',marginTop:'-25px',marginRight:'50px'}}/>
  </Card>
        </Grid>
        <Grid item xs={4} className="posts-orders" >
<Typography sx={{color:'black',marginTop:'50px',marginLeft:'60px'}}>New posts<br/>8</Typography>
<div>
<img src={germandog} className="bird-img"/>
<img src={birdspic} className="bird-img1"/><br/>
<img src={puppyimg} className="bird-img2"/>
<img src={catimg} className="bird-img3"/>
<Button className="view-all-btn">View All</Button>
</div>
        </Grid>
  
  </Grid>  */}




</Box>

 </>  
}
</>
  );
}