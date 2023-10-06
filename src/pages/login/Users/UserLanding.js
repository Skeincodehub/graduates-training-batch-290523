import { Button, Card, CardContent, IconButton, InputBase, Menu, MenuItem, Modal, Paper, Select, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './UserLanding.css';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import userpic from '../Dashboard/Web - Menu/chat&notification/profilepicicon.png';
import userpic2 from '../Dashboard/Web - Menu/chat&notification/user.png';
import userpic4 from '../Dashboard/Web - Menu/chat&notification/boy.png';
import CircularProgress from '@mui/material/CircularProgress';
import userpic3 from '../Dashboard/Web - Menu/chat&notification/user1.png';
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

export function UserLanding(){
    const navigate=useNavigate();
    const [fetchedData,setFetchedData]=useState([])
    const [userList,setUserList]=useState()
    const [loaderEnable,setLoaderEnable]=useState([])
    const parms= useParams();
    const [phoneNumber,setPhoneNumber]=useState()
    const [openPopup,setOpenPopup]=useState(false)
    const [firstnameFilter,setFirstnameFilter] = useState("")
    const [lastnameFilter,setLastnameFilter] = useState()

    const [numberFilter,setNumberFilter] = useState()
const [filteredData,setFilteredData] =useState()
    const localToken = localStorage.getItem("token");
    const localRefreshToken = localStorage.getItem("refresh_token");
    const config = {
      headers: {
        "x-access-token": localToken,
        "x-refresh-token": localRefreshToken,
      },
    };
    const      headers= {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    }

const getApiUsers=()=>{
  axios.get(`https://demo.emeetify.com:81/pet/users/filternames?firstname=${firstnameFilter}&lastname=&mobile_no=`)
  .then((response)=>{
    console.log("response",response.data.data)
    setLoaderEnable(response.data)
    setFetchedData(response?.data?.data)
  }).catch((error)=>{
    console.log("error",error)
  })

}


    useEffect(()=>{
      // axios.get("https://demo.emeetify.com:81/pet/users/filternames?firstname=&lastname=&mobile_no=",config)
      // .then((response)=>{
      //   // console.log("dataaa",response.data.data)
      //   setLoaderEnable(response.data)
      //   setFetchedData(response?.data?.data)
      // }).catch((error)=>{
      //   console.log(error)
      // })
},[])

useEffect(()=>{
getApiUsers()
},[])
useEffect(()=>{
  getApiUsers()
  },[firstnameFilter])
    const handleSearchChange =(e)=>{
      console.log(e.target.value)
      setFirstnameFilter(e?.target?.value)
      setLastnameFilter(e?.target?.value)
      setNumberFilter(e?.target?.value)
     

    }

    // useEffect(()=>{

    //   axios.get(`http://192.168.0.123:5778/pet/users/filternames?keyword=${firstnameFilter}`)
    //   .then((response)=>{
    //     console.log("response",response.data)
        
    //   }).catch((error)=>{
    //     console.log("error",error)
    //   })
    //   console.log("--->",lastnameFilter)
    //   axios.get(`http://192.168.0.123:5778/pet/users/filternames?keyword=${lastnameFilter}`)
    //   .then((response)=>{
    //     console.log("response",response.data)
        
    //   }).catch((error)=>{
    //     console.log("error",error)
    //   })
    //   axios.get(`http://192.168.0.123:5778/pet/users/filternames?keyword=${numberFilter}`)
    //   .then((response)=>{
    //     console.log("response",response.data)
        
    //   }).catch((error)=>{
    //     console.log("error",error)
    //   })
    // },[firstnameFilter,lastnameFilter,numberFilter])

    const handlePhoneChange=(e)=>{
      console.log(e.target.value)
      setPhoneNumber(e.target.value)

      axios.get(`https://demo.emeetify.com:81/pet/users/filternames?firstname=&lastname=&mobile_no=${e.target.value}`)
      .then((response)=>{
        console.log("response",response.data.data)
        setFilteredData(response?.data?.data)
      }).catch((error)=>{
        console.log("error",error)
      })

    }

    const handleUserChange=(e)=>{
      console.log(e.target.value)
      setUserList(e.target.value)
    }

    const handleDeleteUser=(data)=>{
      console.log("qwerty ")
      setOpenPopup(true);
      console.log(data)
 
   }

   const handleYesDelete=(data)=>{
    console.log("delete No",data.id)
    console.log(data)
        axios.delete(`https://demo.emeetify.com:81/pet/users/${data.id}`,config,
        {
          "firstname":data?.firstname,
          "lastname":data?.lastname,
          "role_id":data?.roleid,
          "mobile_no":data?.mobile_no,
          "email":data?.emailid,
          "password":data?.password,
          "country":data?.country,
          "state":data?.state,
          "city": data?.city,
          "profile_pic": data?.profile_pic,
          "status":'',
          "pincode":data.pincode
    
        }
        ).then((response)=>{
          console.log("=====>",response.data)
          setOpenPopup(false)
          axios.get('https://demo.emeetify.com:81/pet/users/',config)
            .then((response)=>{
              setFetchedData(response?.data?.data)
              console.log(response.data.data)
              setLoaderEnable(response?.data)
             
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
          console.log("123456",error)
        })
      }


    const handleUserCard=(data)=>{
      const {id}=parms
        navigate(`/user-details/${data.id}`,{state: data})
        console.log(data)
    }
    const handleAddUser=()=>{
        navigate('/add-user')
    }
// console.log("_________>",loaderEnable)
    return(
        <>
        {
          loaderEnable.status ?
       
          <>
      
        <Navbar/>
     <Card className='main-card-Users'>
     <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Users</Typography>
     <Card className='total-users-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Total Users<br/>124</Typography>
  <PetsIcon className='peticon-orders-card'/>

  </CardContent>
</Card>
<Stack direction='row' sx={{marginTop:'30px',marginLeft:'15px'}}>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        onChange={handleSearchChange}
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
    <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         sx={{marginLeft:'420px'}}
       
         displayEmpty
          className='select-location'
          >
          <MenuItem defaultValue="">
           Select City
          </MenuItem>
          <MenuItem  value={'coimbatore'}>Coimbatore,Tamil Nadu</MenuItem>
          <MenuItem value={'Tirupur'}>Tiruppur</MenuItem>
          <MenuItem value={'Chennai'}>Chennai</MenuItem>
        </Select>
</Stack>
<Stack className='main-stack-category-select' direction='row'>
  <Select
 value={userList}
 onChange={handleUserChange}
displayEmpty
placeholder="UserName"
className="select-category"
  >
     <MenuItem defaultValue=""><em>User Name</em>
     </MenuItem>
     {
      fetchedData.map((userlist)=>(
        <MenuItem   value={userlist.firstname}>{userlist.firstname}</MenuItem>
      ))
     }
     
      
 </Select>
 <Select
 value={phoneNumber}
 onChange={handlePhoneChange}
  displayEmpty
className="select-breed"
  >
     <MenuItem defaultValue=""><em>Phone Number  </em>
     </MenuItem>

     {
      fetchedData.map((phonenumber)=>(

        <MenuItem  value={phonenumber.mobile_no}>{phonenumber.mobile_no}</MenuItem>

      ))

     }
     
 </Select>
 <Button className='add-new-btn' onClick={handleAddUser} >Add User</Button>
</Stack>
<Card className='users-list-card'>
<Stack direction='row' className="stack-users-list">
  
  {  fetchedData.map((data)=>(
<Card className='users-list-details-card'key={data.id} 

// onClick={(e)=>handleUserCard(data)}
>
  <CardContent>
    <div>
        <img src={`https://demo.emeetify.com:5016/${data?.profile_pic}`} className='userpic-style'/>
       <Button >
         {/* <MoreVertIcon sx={{float:'right'}}/> */}
   

        <PopupState variant="popover" popupId="demo-popup-menu">
                    {(PopupState) => (
                      <React.Fragment>
                        <Button sx={{float:'right',marginTop:'-100px',marginLeft:'115px',height:'50px',width:'50px',color:'black',}} {...bindTrigger(PopupState)}><MoreVertIcon /></Button>

                        <Menu
                          className="menu-on-approve-btn"
                          {...bindMenu(PopupState)}
                        >
                       
                          <MenuItem
                           onClick={(e)=>handleUserCard(data)}
                          key={data.id}

                          >
                            Edit
                          </MenuItem>

                          <MenuItem
                            key={data?.ad_id}
                            onClick={(e)=>handleDeleteUser(data)}
                          >
                          Delete User
                          {
                            openPopup && 
                            <Modal
                    sx={{backgroundColor:'white',opacity:'0.9'}}
                          open={openPopup}
                          //  close={(e)=>setOpenPopup(false)}
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
               
                  </Button>
        
        <Typography className='username-text'>{data?.firstname}</Typography>
        <Typography className='location-text'><LocationOnOutlinedIcon className='locationicon'/>
        Coimbatore,India </Typography>
        </div>
  </CardContent>
</Card>
    ))
  }
    
   </Stack>
</Card>
     </Card>

     </>
     : <Loader/>
       }
        </>
    )
}