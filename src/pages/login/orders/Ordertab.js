import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PetsIcon from '@mui/icons-material/Pets';

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useEffect, useState } from "react";

import "../orders/Ordertab.css";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { TableOrderPet } from "./TableOrdersPet";
import { FoodPetTab } from "./FoodPetTab";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar";
// import '.././Orderslanding.css'
import '..//Orderslanding.css'
import { Loader } from "../Loader/Loader";

export function Ordertab({ data, parentCallback, refreshData }) {
  const navigate = useNavigate();
  // let getDatas = getData;
  console.log("******************", data);
  const [value, setValue] = useState("pet");
  const [petFilterData, setPetFilterData] = useState([]);
  const [location, setLocation] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [arrayData, setArrayData] = useState(data);
  const [arrayFun, setArrayFun] = useState(data);
  // console.log("+++++++++++++++++++++++++++", arrayData);

  const [getData,setGetData]=useState([{}]);
const [orderData,setOrderData]=useState()
const [productData,setProductData]=useState()
const [loaderEnable,setLoaderEnable]= useState();
const [foodProductList,setFoodProductList] = useState([])

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
  const url=`https://demo.emeetify.com:81/pet/order/orderfilter?type=pet&firstname=${userSearch}`
  const url1=`https://demo.emeetify.com:81/pet/order/orderfilter?type=pet&firstname=`

// const header={
//   'jwt': localToken,
//   'refresh_token': localRefreshToken
// }

useEffect(()=>{

},[])

const callbackFunction=(childData,child)=>{
  setDataReport(childData)
setChange(child) 
 console.log("QWERTY")

}
console.log("LLLLL",dataReport)

// useEffect(()=>{
//   console.log(dataReport)
//   console.log(change)
// },[callbackFunction])
const getApiPet=()=>{
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
}
useEffect(()=>{
getApiPet()
},[userSearch])
useEffect(()=>{

 
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
axios.get(`https://demo.emeetify.com:81/pet/order/orderfilter?type=stock&firstname=`,config)
        .then((res)=>{
            console.log(res?.data?.data)
            setFoodProductList(res?.data?.data)
            
        }).catch((error)=>{
            console.log(error)
        })
 

},[])

console.log("getDataaa",foodProductList)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const sendData = () => {
  //   parentCallback(petFilterData, userSearch);
  // };
  // const parentDataCallback = (child) => {
  //   console.log("+++++++++++++++++++++++++++", child);
  // };
  const handlepetplaceorder = () => {
    navigate("/pet-place-order");
  };
  const handlePlaceOrderFood = () => {
    navigate("/pet-place-order");
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;

    setUserSearch(e?.target?.value);
   
    //   var updatedList =[...data]
    //   updatedList = updatedList.filter((data) => (
    //    data.toLowerCase().indexOf(search.toLowerCase()) !== -1

    //    )
    // );
    // // Trigger render with updated values
    // setArrayFun(updatedList);

    // console.log(">>>>>>>>>>>>>>>>>>>",updatedList)
  };

  // useEffect(() => {
  //   console.log("=============151515151=================>??", userSearch);
  //   setIsLoading(true)
  //   axios
  //     .get(
  //       `https://demo.emeetify.com:81/pet/order/orderfilter?type=pet&firstname=${userSearch}`
  //     )
  //     .then((response) => {
  //       console.log("QWERTY", response?.data?.data);
  //       setPetFilterData(response?.data?.data);
  //       sendData();
  //   setIsLoading(false)

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [userSearch]);

  const handleSearchFood = (e) => {
    const search = e.target.value;
    axios
      .get(
        `https://demo.emeetify.com:81/pet/order/orderfilter?type=${value}&firstname=${search}`
      )
      .then((res) => {
        // console.log("****",res?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
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
<PetsIcon  className='peticon-orders-card'/>
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


      <Box sx={{ width: "100%", marginTop: "20px", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{ marginLeft: "20px" }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Pets" value="pet" />
              <Tab
                label="Foods & Accessories"
                value="stock"
                sx={{ marginLeft: "50px" }}
              />

              <Box sx={{ marginLeft: "500px" }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={location}
                  className="select-location"
                  displayEmpty
                  onChange={handleLocationChange}
                >
                  <MenuItem defaultValue="">Select City</MenuItem>
                  <MenuItem value={"coimbatore"}>
                    Coimbatore,Tamil Nadu
                  </MenuItem>
                  <MenuItem value={20}>Tiruppur</MenuItem>
                  <MenuItem value={30}>Chennai</MenuItem>
                </Select>
              </Box>
            </TabList>
          </Box>
          <TabPanel value="pet">
            <div className="searchbar-main-div">
              <div>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    borderRadius: "25px",
                    backgroundColor: "lightgrey",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    onChange={handleSearchChange}
                    inputProps={{ "aria-label": "search " }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon sx={{ rotate: "90deg", color: "black" }} />
                  </IconButton>
                </Paper>
              </div>
              <div>
                <Button
                  className="place-order-btn"
                  onClick={handlepetplaceorder}
                >
                  Place Order
                </Button>
              </div>
            </div>
            {/* {!isLoading ? (
              <p>Loading</p>
            ) : ( */}
            <TableOrderPet
            value={value}
             getData={getData}
            />
            {/* )} */}
          </TabPanel>
          <TabPanel value="stock">
            <div className="searchbar-main-div">
              <div>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    borderRadius: "25px",
                    backgroundColor: "lightgrey",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    onChange={handleSearchFood}
                    inputProps={{ "aria-label": "search " }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon sx={{ rotate: "90deg", color: "black" }} />
                  </IconButton>
                </Paper>
              </div>
              <div>
                <Button
                  className="place-order-btn"
                  onClick={handlePlaceOrderFood}
                >
                  Place Order
                </Button>
              </div>
            </div>

<TableOrderPet
 value={value}

 foodProduct={foodProductList}
/>
            {/* <FoodPetTab data={value} /> */}
          </TabPanel>
        </TabContext>
      </Box>
      </Card>
      </>
      :
      <Loader/>
                }
    </>
  );
}
