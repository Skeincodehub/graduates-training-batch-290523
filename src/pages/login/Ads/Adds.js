import {
  Button,
  Card,
  CardContent,
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
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";

import { Navbar } from "../Navbar";
import "./Adds.css";
import React, { useEffect, useState } from "react";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Link, redirect, useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "../Loader/Loader";
export function Adds() {
const parms= useParams()
  const navigate = useNavigate();
  const [adData, setAdData] = useState([]);
  const [selectpage, setSelectpage] = useState();
 
const [openPopup,setOpenPopup]=useState(false)
const [searchChange,setSearchChange]=useState("")
const [adFilter,setAdFilter]=useState([])
const [loaderEnable,setLoaderEnable]=useState();
const localToken = localStorage.getItem("token");
const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  } 

  const handleAdChange=(e)=>{
    const adChange= e.target.value
    setSearchChange(e.target.value)
    axios.get(`https://demo.emeetify.com:81/pet/ads/filtertitle?title=${adChange}`)
    .then((response)=>{
      console.log(response?.data)
      setAdFilter(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const getApiData=()=>{
    axios.get(`https://demo.emeetify.com:81/pet/ads/filtertitle?title=`)
    .then((response)=>{
      console.log(response?.data)
           setLoaderEnable(response?.data)

      setAdData(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{ 
  axios.get('https://demo.emeetify.com:81/pet/ads/')
  .then((response)=>{
    // console.log(response.data.data)
    setLoaderEnable(response?.data)
    setAdData(response?.data?.data)
  }).catch((error)=>{
    console.log("error",error)
  })



},[searchChange])
useEffect(()=>{

},[adData])
const payloadDelete={

}
  const HandleAddedit=(data)=>{
const { ad_id}= parms ;
    navigate(`/ad-details/${data.ad_id}`, {state:data})
  }

  const handleDeleteAd=(data)=>{
    console.log("qwerty ")
    setOpenPopup(true);
    console.log(data.ad_id)
  

  }
  const handleYesDelete=(data)=>{
console.log("delete No",data.ad_id)
    axios.delete(`https://demo.emeetify.com:81/pet/ads/${data.ad_id}`,
    {
    "ad_title":data.ad_title,
    "ad_description":data.description,
      "ad_type":"",
      "position":data.position,
      "pages":data.pages,
      "timer":data.timer,
      "link":data.link,
      "to_location":"",
      "state":"tn",
      "status":"active"

    },config
    ).then((response)=>{
      // console.log("=====>",response.data.data.status)
      toast.success(response.data.message )
      setOpenPopup(false)
      axios.get('https://demo.emeetify.com:81/pet/ads/')
        .then((response)=>{
         
          // console.log(response.data.data)
          setLoaderEnable(response?.data)
          setAdData(response?.data?.data)
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

  const handleAddAd = (e) => {
    navigate("/add-new-ad");
  };
  return (
    <>
    {
      loaderEnable?.status ?
      <>
      <Navbar />
      <ToastContainer/>
      <Card className="main-card-adds">
        <Typography sx={{ marginTop: "15px", marginLeft: "50px" }}>
          Ads
        </Typography>
        <Card className="total-users-card-landing">
          <CardContent>
            <Typography className="total-posts-name-posts-card">
              Total Ads
              <br />
              65
            </Typography>
            <PetsIcon className="peticon-orders-card" />
          </CardContent>
        </Card>
        <Stack direction="row" sx={{ marginTop: "30px", marginLeft: "15px" }}>
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
              inputProps={{ "aria-label": "search " }}
              onChange={handleAdChange}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ rotate: "90deg", color: "black" }} />
            </IconButton>
          </Paper>
        </Stack>
        <Stack className="main-stack-category-select" direction="row">
          <Select
         displayEmpty
            value={selectpage}
            onChange={(e) => {
              setSelectpage(e.target.value);
            }}
            className="select-category"
          >
            <MenuItem defaultValue="">
              <em>Select Page</em>
            </MenuItem>
            <MenuItem value={"home"}>Home</MenuItem>
            <MenuItem value={"Bird"}>Orders</MenuItem>
            <MenuItem value={"Dog"}>Posts</MenuItem>
          </Select>

          <Button className="add-new-ad-btn" onClick={handleAddAd}>
            Add a new ad
          </Button>
        </Stack>
        <Table className="table-full" sx={{ width: "1000px" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ textAlign: "center", width: "1000px", color: "gray" }}
              >
                Ad Title
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", width: "1000px", color: "gray" }}
              >
                Ad id
              </TableCell>
              <TableCell sx={{ color: "gray" }}>Position</TableCell>
              <TableCell
                sx={{ textAlign: "center", width: "1000px", color: "gray" }}
              >
                Pages
              </TableCell>
              <TableCell sx={{ color: "gray" }}>Timer</TableCell>

              <TableCell sx={{ color: "gray" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tablebody">
            {adData.map((data, index) => (
              <TableRow className="tablerow" key={data?.ad_id}>
                <TableCell>{data?.ad_title ? data?.ad_title : "--"}</TableCell>
                <TableCell>{data?.ad_id ? data?.ad_id : "--"}</TableCell>
                <TableCell>{data?.position ? data?.position : "--"}</TableCell>
                <TableCell>{data?.pages ? data?.pages : "--"}</TableCell>
                <TableCell> {data?.timer ? data?.timer : "--"}</TableCell>
                <TableCell>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(PopupState) => (
                      <React.Fragment>
                        <Button {...bindTrigger(PopupState)}>...</Button>

                        <Menu
                          className="menu-on-approve-btn"
                          {...bindMenu(PopupState)}
                        >
                       
                          <MenuItem
                            onClick={(e)=>HandleAddedit(data)}
                            key={data?.ad_id}
                        
                            datas={data}

                          >
                            Edit
                          </MenuItem>

                          <MenuItem
                           key={data?.ad_id}
                           onClick={(e)=>handleDeleteAd(data)}
                          >
                          Delete Post
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
                              sx={{marginLeft:'40px',marginTop:'20px',textTransform:'none',color:'white',backgroundColor:'green'}}
                              onClick={(e)=>handleYesDelete(data)}
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
            ))}

            
          </TableBody>
        </Table>
      </Card>

      </>
       :
      <Loader/>
         } 
    </>
  );
}
