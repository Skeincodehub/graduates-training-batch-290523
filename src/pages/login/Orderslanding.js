import {  Card, CardContent,  Stack, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";


import PetsIcon from '@mui/icons-material/Pets';
// file import 
import './Order.css';
import './Orderslanding.css'
import './Home.css';
//file import end

//navlogo imports

//logo 

import { Ordertab } from "./orders/Ordertab";
import { Navbar } from "./Navbar";
import axios from "axios";
import { Loader } from "./Loader/Loader";



export function Orderslanding(){
const [getData,setGetData]=useState([{}]);
const [orderData,setOrderData]=useState()
const [productData,setProductData]=useState()
const [loaderEnable,setLoaderEnable]= useState();
  const localToken=localStorage.getItem("token");
const localRefreshToken = localStorage.getItem("refresh_token")
const [dataReport,setDataReport]= useState([])
const [change,setChange] = useState("")
const config=
{
  headers:{
    'x-access-token': localToken,
    'x-refresh-token': localRefreshToken,
    
  }}
  const url=`https://demo.emeetify.com:81/pet/order/orderfilter?type=pet&firstname=${change}`
  const url1=`https://demo.emeetify.com:81/pet/order/orderfilter?type=pet&firstname=`

// const header={
//   'jwt': localToken,
//   'refresh_token': localRefreshToken
// }
const callbackFunction=(childData,child)=>{
  setDataReport(childData)
setChange(child) 
 console.log("QWERTY")

}
console.log("????",change)
console.log("LLLLL",dataReport)

// useEffect(()=>{
//   console.log(dataReport)
//   console.log(change)
// },[callbackFunction])

useEffect(()=>{

  axios.get(url,config
    )
    .then((response)=>{
      // console.log(response.data.data)
      setLoaderEnable(response.data)
      var data= response.data.data;
      setGetData(response?.data?.data);
     
      // console.log(".................................",response?.data);
    
    })
    .catch((error)=>{
      console.log("error",error);
    })
//  if(change!= undefined){
//   axios.get(url,config
//     )
//     .then((response)=>{
//       // console.log(response.data.data)
//       setLoaderEnable(response.data)
//       var data= response.data.data;
//       setGetData(response?.data);
//       // console.log(".................................",response?.data);
    
//     })
//     .catch((error)=>{
//       console.log("error",error);
//     })
//  }
//  else{
//   axios.get(url1,config
//     )
//     .then((response)=>{
//       // console.log(response.data.data)
//       setLoaderEnable(response.data)
//       var data= response.data.data;
//       setGetData(response?.data);
    
//     })
//     .catch((error)=>{
//       console.log("error",error);
//     })
//  }
 

},[change])

console.log("getDataaa",getData)
// console.log("orders-->",orderData);
// console.log("product---->",productData)
  return(
    <>
{
  loaderEnable?.status  ?
 
  <>

      <Navbar/>
<Card className="main-body-orders">
<input type="date" className='date' defaultValue={'12-06-2023'}/>
 <Typography className='title-dashboard'> Orders</Typography>
  <Stack direction="row">
  <Card  className="total-orders-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Total Orders<br/>26</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="approved-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Approved<br/>21</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="rejected-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Rejected<br/>05</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
  
    </Card>
    <Card  className="pending-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Pending<br/>02</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="inprocess-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Inprocess<br/>11</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
    <Card  className="delivered-card-landing" >
      <CardContent>
      <Typography className="total-posts-name-orders-card">Delivered<br/>08</Typography>
<PetsIcon className='peticon-orders-card'/>
      </CardContent>
    </Card>
  
    
     
  </Stack>

 
     {/* <Ordertab parentCallback={callbackFunction} data={getData}/> */}
        
  



</Card>

</>
: <Loader/>
}
    </>
  );
} 