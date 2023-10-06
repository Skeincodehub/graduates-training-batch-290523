import { AppBar, Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, Menu, MenuItem, Select, Stack, styled, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import CloseIcon from '@mui/icons-material/Close';
import './Home.css'
import MuiAppBar from '@mui/material/AppBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import PetsIcon from '@mui/icons-material/Pets';
// file import starts
import './AddOrderslanding.css'
//file import ends

//navlogo imports
import chaticon from '../login/Dashboard/Web - Menu/chat.png';
import notifyicon from '../login/Dashboard/Web - Menu/Notification2.png'
//logo 
import numberonelogo from '../login/Dashboard/Web - Menu/chat&notification/image1.png';
import logo from "../login/Dashboard/Web - Menu/pawprint.png";
import profilepic from "../login/Dashboard/Web - Menu/chat&notification/profilepicicon.png";
import dashboardlogo from '../login/Dashboard/Web - Menu/Dashboard.png'
import orderslogo from '../login/Dashboard/Web - Menu/Orders.png';
import postlogo from '../login/Dashboard/Web - Menu/posts.png';
import adlogo from '../login/Dashboard/Web - Menu/Ads.png';
import petsfoodlogo from '../login/Dashboard/Web - Menu/Food&accessories.png'
import userlogo from '../login/Dashboard/Web - Menu/Users.png';
import feedbacklogo from '../login/Dashboard/Web - Menu/Feedbacks.png';
import orderlistphoto from '../login/Dashboard/Web - Menu/chat&notification/dog-german-orders.jpg'

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Ordertab } from "./orders/Ordertab";
import { Navbar } from "./Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export function AddOrderslanding(){

  const initialState={
    customername:'',
  customernumber:'',
    producttype:'',
    productname:'',
    productid:'',
    availqty:'',
    requriedqty:'',
    price:'',
   }
    const navigate=useNavigate();
    const [formData,setFormData] = useState(initialState)
    const [formError,setFormError] = useState()
const [availqtyData,setAvailqtyData] = useState()
  const [openAddForm,setOpenAddForm]=useState(false)
  const [fetchedData,setFetchedData]=useState([])
  const [phonenumber,setPhonenumber]=useState()
  const [nameData,setNameData] = useState();
  const [stockData,setStockData] = useState([])
  const [petList,setPetList]= useState([])
    const [stockList,setStockList]= useState([])
const [dataSet,setDataSet] = useState()
  const [filterList,setFilteredList] =useState([])
  const [productTypeData,setProductTypeData]= useState([])
  const [productDataName,setProductDataName] =useState()
  const [dropDownError,setDropDownError]=useState()
  const [productidData,setProductidData]=useState()
  const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };
  const parms = useParams();
  const location = useLocation()
  const  dataDetail = location.state;
  console.log(dataDetail)
const handleAddForm=()=>{
  setOpenAddForm(true)
}

useEffect(()=>{
if(parms && dataDetail){
  setFormData({
    customername:'',
    customernumber:'',
      producttype:'',
      productname:'',
      productid:'',
      availqty:'',
      requriedqty:'',
      price:dataDetail?.premium_amount,

  })
  setPhonenumber(dataDetail?.mobile_no)
}
},[])
const handleInputChange=(e)=>{
  const {name,value}=e.target;
  // console.log("1234",formData)
  
      setFormData({...formData,[name]:value})
      
}
const handlePosts=(e)=>{
navigate('/posts')
}
const handleDashborad=(e)=>{
navigate('/home')
}

const handleSubmit=()=>{
  const errors={}
         let formIsValid= true 
        // if(!formData.productid){
        //     formIsValid= false;
        //     errors['productid']="please Enter product id"
        //     console.log("errrrrroor")
        // }
        // if(!formData.availqty){
        //     formIsValid= false;
        //     errors['availqty']="Please Enter Avail Qty"
        // }
        if(!formData.requriedqty){
          formIsValid= false;
          errors['requriedqty']="Please Enter Requried Qunatity"
      }
      if(!formData.price){
        formIsValid= false;
        errors['price']="Please Enter Price"
      }
      if(!nameData){
        formIsValid= false;
        errors['customername']="Please Select Customer Name"
      }
      if(!phonenumber){
        formIsValid = false;
        errors['customernumber']="Please Select  Customer Number "
      }
      if(!productTypeData){
        formIsValid = false;
        errors['producttype']="Please Select   Product Type "
      }
      if(!productDataName){
        formIsValid = false;
        errors['productname']="Please Select  Product Name "
      }
      if( formData.requriedqty >  availqtyData ){
        formIsValid = false;
        errors['requriedqty']="Please give requried quanity less than Available "
      }
setFormError(errors)
setDropDownError(errors)
      console.log(errors)

if(Object.keys(errors).length === 0 ){
  axios.post("https://demo.emeetify.com:81/pet/order",payload,config)
  .then((response)=>{
    console.log("123",response?.data)
    toast.success(response?.data?.message)
  }).catch((error)=>{
    console.log(error)
  })
}


}
useEffect(()=>{
axios.get("https://demo.emeetify.com:81/pet/users/",config)
.then((res)=>{
  console.log(res?.data?.data)
  setFetchedData(res?.data?.data)
}).catch((error)=>{
  console.log(error)
})


axios.get("https://demo.emeetify.com:81/pet/stocks/",config)
.then((response)=>{
  console.log(response?.data)
  setStockData(response?.data?.data)
})

},[])

const payload ={
  "user_id":  productDataName,
  "product_id":[
    {
      "id":productidData,
      "quantity": formData.requriedqty
    }],
    "address_id":"",
"product_type":productTypeData,
"total_amount":formData.price,
"status":"placed",
"clear_cart":"null",
"cart_id":""
}

useEffect(()=>{
if(phonenumber === nameData?.id){
  console.log("QWERTYU")
}
},[phonenumber])

useEffect(()=>{

  if(productTypeData==="P"){
    axios.get("https://demo.emeetify.com:81/pet/pets",config)
    .then((response)=>{
      console.log(response?.data?.data)
      setPetList(response?.data?.data)

    }).catch((error)=>{
      console.log(error)
    })
  }
  else if (productTypeData==="F"){
    axios.get("https://demo.emeetify.com:81/pet/stocks",config)
    .then((response)=>{
      console.log(response?.data)
      setStockList(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })

  }
},[productTypeData])

      useEffect(()=>{

   axios.get(`https://demo.emeetify.com:81/pet/users/filternames?firstname=&lastname=&mobile_no=${phonenumber}`,config)
      .then((res)=>{
        // console.log("123456",res?.data?.data[0])
        setNameData(res?.data?.data[0])
        
      }).catch((error)=>{console.log(error)})
      },[phonenumber]) 
    const handleCustomerNameChange=()=>{
   
   
    }
      const theme = useTheme();
      const [open, setOpen] = useState(true);
    
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

//       const handleMenuItem=(product)=>{
// setProductidData(product?.stock_id)
// setAvailqtyData(product?.avail_qty)

//         console.log("==>",product)
//       }

const handleSelect=(e)=>{
  console.log(e.target.value)
  setProductDataName(e.target.value)
}
useEffect(()=>{
 console.log(productTypeData)
 if(productTypeData==="P"){

  for(let i=0;i<=petList.length;i++){
    // console.log("ZXC",petList[i])
    if(petList[i]?.pet_id  ===  productDataName){
      // console.log("ZXCVBN", petList[i])
     setFilteredList(petList[i]) 
     setProductidData(petList[i]?.pet_id)
     setAvailqtyData(petList[i]?.avail_qty)
    }
  }
}
  if(productTypeData==="F"){
    for(let i=0;i<=stockList.length;i++){
 if(stockList[i]?.stock_id  ===  productDataName){
      // console.log("ZXCVBN", stockList[i])
     setFilteredList(stockList[i]) 
     setProductidData(stockList[i]?.stock_id)
     setAvailqtyData(stockList[i]?.avail_qty)
    }
}
}
},[productDataName])
const handleMenu=(product)=>{
  console.log("mohan")
  setProductidData(product?.stock_id)
setAvailqtyData(product?.avail_qty)
}


return(
        <>
     <Navbar/>
     <ToastContainer/>
      <Box sx={{marginLeft:'250px'}}>      
        <Button className='back-btn-addorder'
        onClick={(e)=>navigate('/orders-home')}
        sx={{color:'black'}} > 
        <ArrowBackIcon/>
        <Typography >Back</Typography></Button>
        {
          parms && dataDetail ?
          <Typography className='new-order-text'>Update Order</Typography>:
          <Typography className='new-order-text'>Add a New Order</Typography>

        }
        </Box>

        <Card className="main-body-orders-addpets-landing">
      
        {/* <Card> */}
            <Typography className='select-customer-text'>Select Customer</Typography>
          <div className="d-flex-div">
          <div className="contact-customer-number">
            <Typography className="customer-contact-text">Customer Contact Number</Typography>
            <Select
    onChange={(e)=>setPhonenumber(e.target.value)}
    value={phonenumber}
    displayEmpty
    name="customernumber"
          id="demo-simple-select"
          sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}
     >
      {
        parms && dataDetail ? <MenuItem value={""}>haiii</MenuItem> :""
      }
         {
          fetchedData.map((number)=>(
            <MenuItem key={number?.id} value={number?.mobile_no}>{number?.mobile_no}</MenuItem>

          ))
         }
        </Select>
        {
          !phonenumber && dropDownError?.customernumber ? 
          <Grid sx={{marginLeft:'50px',marginTop:'30px',color:'red'}}>{dropDownError?.customernumber}</Grid>:""
        }
        </div>
        <div className="customer-name-div">
        <Typography className="customer-contact-text">Customer Name</Typography>
        
        <Select
        value={nameData?.firstname}
        name="customername"
   onChange={handleCustomerNameChange}
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
      <MenuItem  value={nameData?.firstname}>{nameData?.firstname}</MenuItem>


 </Select> 
  {/* {
  fetchedData.map((name)=>(
    <MenuItem key={name?.id} value={name?.id}>{name?.name}</MenuItem>
    ))
  
 } */}
 {
          !nameData && dropDownError?.customername ? 
          <Grid sx={{marginLeft:'50px',marginTop:'30px',color:'red'}}>{dropDownError?.customername}</Grid>:""
        }
 
        </div>

        </div>
        <Typography className='select-customer-text'>Select Products</Typography>
        <Box sx={{height:'350px',width:'auto',marginLeft:'25px'}}>
          {/* <Button sx={{textTransform:'none',color:'red',float:'right'}}>Remove <CloseIcon sx={{color:'black'}}/></Button> */}
       
        <Grid container>
          <Grid item>
          <Typography className="customer-contact-text">Product Type</Typography>
          <Select
   onChange={(e)=>setProductTypeData(e.target.value)}
   value={productTypeData}
   name="producttype"
   id="demo-simple-select"
   sx={{marginLeft:'40px',height:'50px',width:'320px',backgroundColor:'lightgray'}}

>
<MenuItem  value={"P"}>Pet</MenuItem>
<MenuItem  value={"F"}>Food and Accessories</MenuItem>


{/* {
  stockData.map((product)=>(
    <MenuItem key={product?.stock_id} value={product?.stock_type}>{product?.stock_type}</MenuItem>

  ))
} */}
 </Select>
 {
          !productTypeData && dropDownError?.producttype ? 
          <Grid sx={{marginLeft:'50px',marginTop:'30px',color:'red'}}>{dropDownError?.producttype}</Grid>:""
        }
 

          </Grid>
          <Grid item sx={{marginLeft:'60px'}}>
          <Typography className="customer-contact-text">Product Name</Typography>
          <Select
   onChange={handleSelect}
   value={productDataName}
   name="productname"
   id="demo-simple-select"
   sx={{marginLeft:'40px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
 { petList &&
  petList.map((product)=>(
    <MenuItem  key={product?.pet_id} value={product?.pet_id}>
            {/* <Button key={product?.stock_id} data={product} onClick={(e)=>handleMenuItem(product)}> */}

      {product?.pet_name}
            {/* </Button> */}
</MenuItem>

  ))
 }
  { stockList &&
  stockList.map((product)=>(
    <MenuItem  key={product?.stock_id} value={product?.stock_id}>
      {/* <Button key={product?.stock_id} data={product} onClick={(e)=>handleMenuItem(product)}> */}
      {product?.name} 
      {/* </Button> */}
      </MenuItem>

  ))
 }
 </Select>
 {
          !productDataName && dropDownError?.productname ? 
          <Grid sx={{marginLeft:'50px',marginTop:'30px',color:'red'}}>{dropDownError?.productname}</Grid>:""
        }
 
           </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{marginTop:'10px',marginLeft:'15px'}}>
          <Typography className="customer-contact-text">Product ID</Typography>
         
         <TextField 
         onChange={(e)=>setProductidData(e.target.value)}
         value={productidData}
         disabled
         name="productid"
         className="textfield-product-id">{dataSet?.stock_id}</TextField>

{
  !productidData && dropDownError?.productid ?
  <Grid sx={{marginLeft:'50px',marginTop:'40px',color:'red'}}> {dropDownError?.productid}</Grid>:""
}
          </Grid>
          {/* <Grid item sx={{marginLeft:'55px',marginTop:'10px'}}>
          <Typography className="customer-contact-text">Product Type</Typography>
          <Select
   
   id="demo-simple-select"
   sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


 >
   <MenuItem value={'chappi'}>
          Chappi
   </MenuItem>
   <MenuItem value={20}>Pedigree</MenuItem>
   <MenuItem value={30}>1</MenuItem>
 </Select>

          </Grid> */}
          </Grid>
          <Grid container>
          <Grid item sx={{marginLeft:'15px',marginTop:'30px'}}>
          <Typography className="customer-contact-text">Avail Quantity</Typography>
          <TextField
          onChange={(e)=>setAvailqtyData(e.target.value)} 
          name="availqty"
          value={availqtyData}
          disabled
          className="textfield-product-id" />

{/* {
  !formData?.availqty && formError?.availqty ?
  <Grid sx={{marginLeft:'50px',marginTop:'45px',color:'red'}}> {formError?.availqty}</Grid>:""
} */}

          </Grid>
          <Grid item sx={{marginLeft:'60px',marginTop:'30px'}}>
          <Typography className="customer-contact-text">Requried Quantity </Typography>
          <TextField 
            onChange={handleInputChange} 
            name="requriedqty"
            value={formData.requriedqty}
          className="textfield-product-id" />

{
   formError?.requriedqty ?
  <Grid sx={{marginLeft:'50px',marginTop:'45px',color:'red'}}> {formError?.requriedqty}</Grid>:""
}
          </Grid>
        </Grid>
      <Grid container>
        <Grid item sx={{marginTop:'15px'}}>

        </Grid>

      </Grid>

    <Grid sx={{marginTop:'30px',marginLeft:'15px'}}>
    <Typography className="customer-contact-text">Price</Typography>
    <TextField
      onChange={handleInputChange} 
      name="price"
      value={formData.price}
    className="textfield-product-id" />
{
  !formData?.price && formError?.price ?
  <Grid sx={{marginLeft:'50px',marginTop:'45px',color:'red'}}> {formError?.price}</Grid>:""
}
    </Grid>
        </Box>
      {/* <Button className='add-another-product-btn' onClick={handleAddForm}>Add another product +</Button>
      {
        openAddForm ?
        <Box sx={{height:'350px',width:'auto',marginLeft:'25px',border:'1px solid black'}}>
        <Button 
        sx={{textTransform:'none',color:'red',float:'right'}}
        onClick={(e)=>setOpenAddForm(false)}
        >Remove <CloseIcon sx={{color:'black'}}/></Button>
     
      <Grid container>
        <Grid item>
        <Typography className="customer-contact-text">Product Name</Typography>
        <Select
 
 id="demo-simple-select"
 sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


>
 <MenuItem value={'chappi'}>
        Chappi
 </MenuItem>
 <MenuItem value={20}>Pedigree</MenuItem>
 <MenuItem value={30}>1</MenuItem>
</Select>

        </Grid>
        <Grid item sx={{marginLeft:'60px'}}>
        <Typography className="customer-contact-text">Product id</Typography>
        <TextField className="textfield-product-id"/>

         </Grid>
      </Grid>
      <Grid container>
        <Grid item sx={{marginTop:'10px'}}>
        <Typography className="customer-contact-text">Unit</Typography>
        <Select
 
 id="demo-simple-select"
 sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


>
 <MenuItem value={3}>
3kg
 </MenuItem>
 <MenuItem value={20}>2 kg</MenuItem>
 <MenuItem value={30}>1 kg</MenuItem>
</Select>

        </Grid>
        <Grid item sx={{marginLeft:'55px',marginTop:'10px'}}>
        <Typography className="customer-contact-text">Quantity</Typography>
        <Select
 
 id="demo-simple-select"
 sx={{marginLeft:'30px',height:'50px',width:'320px',backgroundColor:'lightgray'}}


>
 <MenuItem value={1}>
 1
 </MenuItem>
 <MenuItem value={20}>2</MenuItem>
 <MenuItem value={30}>3</MenuItem>
</Select>

        </Grid>
      </Grid>
  <Grid sx={{marginTop:'15px',marginLeft:'15px'}}>
  <Typography className="customer-contact-text">Price</Typography>
  <TextField className="textfield-product-id" />

  </Grid>
      </Box>
      :""
      } */}
      <Box className='delivery-address-box'>
        {/* <Typography className='select-delivery-text'>Select Delivery Address</Typography>
        <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Home" control={<Radio />} label="Home" />
        <FormControlLabel value="office" control={<Radio />} label="Office" />
        <FormControlLabel value="others" control={<Radio />} label="Others" />
        
      </RadioGroup>
    </FormControl>
    <Grid container>
      <Grid item> 
      <Typography className="customer-contact-text">State</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
      <Grid item sx={{marginLeft:'70px'}}> 
      <Typography className="customer-contact-text">City</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
    </Grid>
      <Grid container sx={{marginTop:'35px'}}>
      <Grid item > 
      <Typography className="customer-contact-text">Location</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
      <Grid item sx={{marginLeft:'70px'}}> 
      <Typography className="customer-contact-text">Pincode</Typography>
      <TextField className="textfield-product-id" />   
      </Grid>
    </Grid> */}
    <Typography className='select-delivery-text'>Select Delivery Address</Typography>
<Table>
  <TableHead>
    <TableRow>
    <TableCell sx={{textAlign:'',color:'gray', marginleft:'15px'}}>
                        Type
                    </TableCell>
                    <TableCell sx={{align:'right',color:'gray'}}>
                    Address Line
                    </TableCell>
                    <TableCell sx={{textAlign:'',color:'gray', marginleft:'15px'}}>
                        City
                    </TableCell>
                    <TableCell sx={{align:'right',color:'gray'}}>
                     State
                    </TableCell>
                    <TableCell sx={{align:'right',color:'gray'}}>
                     Pincode
                    </TableCell>
    </TableRow>
  </TableHead>
  <TableBody className="table-body">
    <TableRow className="table-row">
    <TableCell sx={{textAlign:'', marginleft:'15px'}}>
                       Home
                    </TableCell>
                    <TableCell sx={{textAlign:'', marginleft:'15px'}}>
                      {nameData?.address}
                    </TableCell>
                    <TableCell sx={{align:'right',}}>
                    {nameData?.city}
                    </TableCell>
                    <TableCell sx={{align:'right'}}>
                    {nameData?.state}
                    </TableCell>
                    <TableCell sx={{align:'right'}}>
                    {nameData?.pincode}
                    </TableCell>
    </TableRow>
    <TableRow>
    <TableCell sx={{textAlign:'',color:'gray', marginleft:'15px'}}>
                     office
                    </TableCell>
                    <TableCell sx={{textAlign:'', marginleft:'15px'}}>
                    {nameData?.address}
                    </TableCell>
                    <TableCell sx={{align:'right'}}>
                    {nameData?.city}
                    </TableCell>
                    <TableCell sx={{align:'right'}}>
                    {nameData?.state}
                    </TableCell>
                    <TableCell sx={{align:'right'}}>
                    {nameData?.pincode}
                    </TableCell>
    </TableRow>
  </TableBody>
</Table>

    <Stack direction='row' sx={{marginTop:'80px',marginLeft:'20px'}}>
      <Button   className='cancel-btn'>Cancel</Button>
      {
        parms && dataDetail ?
        <Button  onClick={handleSubmit} className='addorder-btn'>Update Order</Button>:
        <Button  onClick={handleSubmit} className='addorder-btn'>Add Order</Button>
      }
  
    </Stack>
      </Box>
        {/* </Card> */}
        </Card>


        </>
    )
}