import {
  Box,
  Button,
  Card,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";

import { Navbar } from "./Navbar";
import "./PetFoodLanding.css";

// import iamsmartpuppy from "../login/Dashboard/asserts/iamspuppy.jpeg";
// import chappiimg from "../login/Dashboard/asserts/chappi.jpeg";
// import petwaterer from "../login/Dashboard/asserts/petwaterer.jpeg";
// import pedigree from "../login/Dashboard/asserts/pedigree.jpg";
// import chewbones from "../login/Dashboard/asserts/chewbones.jpg";

import { Petfoodtable } from "./Petfood/Petfoodtable";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Loader } from "./Loader/Loader";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";

export function PetFoodLanding() {
  const navigate = useNavigate();
  const parms= useParams()
  const [stockData, setStockData] = useState([]);
  const [searchValue,setSearchValue]= useState("")
  const [productList,setProductList]=useState([])
  const [categoryData,setCategoryData]=useState([])
  const [filterSearchProduct,setFilterSearchProduct]= useState([])
  const [loader,setLoader] = useState(false)
const [openPopup,setOpenPopup]=useState(false)
  const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };
  const handleProductClick = () => {
    navigate("");
  };

  const handleDeleteProduct=(stock)=>{
    console.log("qwerty ")
    setOpenPopup(true);
    // console.log(stock.stock_id)
  

  }
  const handleYesDelete=(stock)=>{
// console.log("delete No",stock?.stock_id)
    axios.delete(`https://demo.emeetify.com:81/pet/stocks/${stock?.stock_id}`,config,
    {
      'name':stock?.name,
      "stock_type": stock?.stock_type,
      "price":stock?.price,
      "units":stock?.units,
      "thresvalue": stock?.thresvalue,
      "description": stock?.description,
      "qty_type":stock?.qty_type,
      "avail_qty":stock?.avail_qty
    }
    ).then((response)=>{
      // console.log("=====>",response.data)
      toast.success(response?.data?.message )
      setOpenPopup(false)
      axios
      .get(`https://demo.emeetify.com:81/pet/stocks/stockfilter?name=${searchValue}`, config)
      .then((response) => {
        console.log(response?.data);
        setStockData(response?.data?.data);
        setLoader(response?.data?.status)
      }).catch((error)=>{
          console.log("error",error)
        })   

      // if(response?.data?.data?.status=== true){
        
      //   axios.get('https://demo.emeetify.com:81/pet/ads/')
      //   .then((response)=>{
         
      //     // console.log(response.data.data);
      //     setLoaderEnable(response?.data)
      //     setAdData(response?.data?.data)
      //   }).catch((error)=>{
      //     console.log("error",error)
      //   })    }
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleEditProduct=(stock)=>{
    const {stock_id} =parms
    console.log(stock)
    navigate(`/edit-product/:${stock?.stock_id}`,{state:stock})
    // navigate(`/product-details/:${stock?.id}`,{state:stock})
  }
  const handleNewPetOrder = () => {
    navigate("/add-new-product");
  };

  useEffect(()=>{
getDetailsApi()
  },[searchValue])
const handleSearchProduct=(e)=>{
  const search= e.target.value
  setSearchValue(search)

}
const getDetailsApi=()=>{
  axios
  .get(`https://demo.emeetify.com:81/pet/stocks/stockfilter?name=${searchValue}`, config)
  .then((response) => {
    console.log(response?.data);
    setStockData(response?.data?.data);
    setLoader(response?.data?.status)
  })
  .catch((error) => {
    console.log(error);
  });
}
  

  return (
<>
{
  loader ?

    
    <>
      <Navbar />
      <Card className="main-body-pet-food-accessories">
        <Typography className="heading-pet-food">
          
          Pet Food & Accessories
        </Typography>
        <Stack direction="row" className="stack-card">
          <Card className="total-products-card">
            <Typography className="total-products-text">
              Total Products
              <br />
              574
            </Typography>
            <PetsIcon className="peticon-petfood-card" />
          </Card>
          <Card className="threshold-products-card">
            <Typography className="total-products-text">
              Threshold Reached
              <br />
              32
            </Typography>
            <PetsIcon className="peticon-petfood-card" />
          </Card>
        </Stack>
        <Box className="search-bar-box">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              borderRadius: "25px",
              backgroundColor: "lightgrey",
              alignItems: "center",
              marginLeft: "50px",
              marginTop: "35px",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              onChange={handleSearchProduct}
              inputProps={{ "aria-label": "search " }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ rotate: "90deg", color: "black" }} />
            </IconButton>
          </Paper>
        </Box>
        <Stack direction="row">
          <Box>
            <Select value={productList}
            onChange={(e)=>setProductList(e.target.value)}
            displayEmpty className="select-product-pet-food">
              <MenuItem value="">
                <em>Select Product</em>
              </MenuItem>
              {
                stockData.map((productList)=>(
                  <MenuItem key={productList?.id} value={productList?.name}>{productList?.name}</MenuItem>

                ))
              }
             
            </Select>
          </Box>
          <Box>
            <Select value={categoryData}
          onChange={(e)=>setCategoryData(e.target.value)}
            displayEmpty 
            className="select-category-pet-food">
              <MenuItem value="">
                <em>Select Category </em>
              </MenuItem>
              {
                stockData.map((category)=>(
                  <MenuItem key={category?.id} value={category?.stock_type}>{category?.stock_type}</MenuItem>

                ))
              }
              
            </Select>
          </Box>
          <Box className="add-new-btn-box">
            <Button className="add-new-btn" onClick={handleNewPetOrder}>
              Add a new
            </Button>
          </Box>
        </Stack>
        {/* <Petfoodtable/> */}

        <Card>
          <Table sx={{ marginTop: "15px", marginLeft: "10px", width: "auto" }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Product Name
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Product Id
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Category
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Qty
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Price
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Stock Available
                </TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body-petfood">
              {
             stockData ?
                stockData.map((stock)=>(
                  <TableRow className="table-row-petfood">
 <TableCell key={stock?.id}>
                    <img src={`https://demo.emeetify.com:5016/${stock?.images}`} className="table-item-img1" alt="" />
                  </TableCell>
                  <TableCell key={stock?.id}>{stock?.name}</TableCell>
                  <TableCell key={stock?.id}>{stock?.stock_id} </TableCell>
                  <TableCell key={stock?.id}>{stock?.stock_type} </TableCell>
                  <TableCell key={stock?.id}>{stock?.thresvalue+stock?.units} </TableCell>
                  <TableCell key={stock?.id}>{stock?.price} </TableCell>
                  <TableCell key={stock?.id}>{stock?.avail_qty} </TableCell>
                  <TableCell key={stock?.id}>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(PopupState) => (
                      <React.Fragment>
                        <Button {...bindTrigger(PopupState)}>...</Button>

                        <Menu
                          className="menu-on-approve-btn"
                          {...bindMenu(PopupState)}
                        >
                       
                          <MenuItem
                       key={stock?.id}
                       stock={stock}
                       onClick={(e)=>handleEditProduct(stock)}

                          >
                            Edit
                          </MenuItem>

                          <MenuItem
                           onClick={(e)=>handleDeleteProduct(stock)}
                          >
                          Delete Product
                          {
                            openPopup && 
                            <Modal 
                    sx={{backgroundColor:'white',opacity:'0.9'}}
                          open={openPopup}
                          // close={(e)=>setOpenPopup(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
                            <Card sx={{height:'150px',width:'300px',marginLeft:'500px',marginTop:'250px'}}>
                              <Typography sx={{marginLeft:'40px',marginTop:'25px'}}>Are you Sure Want to Delete?</Typography>
                              <Button 
                              className="yes-btn"
                              sx={{marginLeft:'40px',marginTop:'20px',":hover":'none',textTransform:'none',color:'white',backgroundColor:'green'}}
                              onClick={(e)=>handleYesDelete(stock)}
                              >Yes</Button>
                              <Button 
                              sx={{marginLeft:'30px',marginTop:'20px',textTransform:'none',color:'white',backgroundColor:'red'}}
                              onClick={(e)=>setOpenPopup(false)}
                              >No</Button>

                            </Card></Modal>
                          } 
                           </MenuItem>
                         
                        </Menu>
                      </React.Fragment>
                       
                    )}
                  </PopupState>
                    
                    
                    </TableCell>
                  </TableRow>
                ))
            
              :
             "No Data Found"
//               <>

//               {stockData.map((stock) => (
//                 <TableRow className="table-row-petfood">
//                   <TableCell key={stock?.id}>
//                     <img src={`https://demo.emeetify.com:5016/${stock?.images}`} className="table-item-img1" alt="" />
//                   </TableCell>
//                   <TableCell key={stock?.id}>{stock?.name}</TableCell>
//                   <TableCell key={stock?.id}>{stock?.stock_id} </TableCell>
//                   <TableCell key={stock?.id}>{stock?.stock_type} </TableCell>
//                   <TableCell key={stock?.id}>{stock?.thresvalue+stock?.units} </TableCell>
//                   <TableCell key={stock?.id}>{stock?.price} </TableCell>
//                   <TableCell key={stock?.id}>{stock?.avail_qty} </TableCell>
//                   <TableCell key={stock?.id}>
//                   <PopupState variant="popover" popupId="demo-popup-menu">
//                     {(PopupState) => (
//                       <React.Fragment>
//                         <Button {...bindTrigger(PopupState)}>...</Button>

//                         <Menu
//                           className="menu-on-approve-btn"
//                           {...bindMenu(PopupState)}
//                         >
                       
//                           <MenuItem
//                        key={stock?.id}
//                        stock={stock}
//                        onClick={(e)=>handleEditProduct(stock)}

//                           >
//                             Edit
//                           </MenuItem>

//                           <MenuItem
//                            onClick={(e)=>handleDeleteProduct(stock)}
//                           >
//                           Delete Product
//                           {
//                             openPopup && 
//                             <Modal
//                     sx={{backgroundColor:'white',opacity:'0.9'}}
//                           open={openPopup}
//                           // close={(e)=>setOpenPopup(false)}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//                             <Card sx={{height:'150px',width:'300px',marginLeft:'500px',marginTop:'250px'}}>
//                               <Typography sx={{marginLeft:'40px',marginTop:'25px'}}>Are you Sure Want to Delete?</Typography>
//                               <Button 
//                               sx={{marginLeft:'40px',marginTop:'20px',textTransform:'none',color:'white',backgroundColor:'green'}}
//                               onClick={(e)=>handleYesDelete(stock)}
//                               >Yes</Button>
//                               <Button 
//                               sx={{marginLeft:'30px',marginTop:'20px',textTransform:'none',color:'white',backgroundColor:'red'}}
//                               onClick={(e)=>setOpenPopup(false)}
//                               >No</Button>

//                             </Card></Modal>
//                           } 
//                            </MenuItem>
                         
//                         </Menu>
//                       </React.Fragment>
                       
//                     )}
//                   </PopupState>
                    
                    
//                     </TableCell>

//                 </TableRow>
//               ))}
//               </>
              }
            </TableBody>
          </Table>
        </Card>
      </Card>
    </>
    :
    <Loader/>
       }
  </>
  );
}
