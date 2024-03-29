import { Button, Card, CardContent, FormHelperText, IconButton, InputBase, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';





import { Navbar } from "./Navbar";
import  './Postlanding.css'
import { useEffect, useState } from "react";
import { FormControl } from "@mui/base";
import { TablePosts } from "./Posts/TablePosts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Category } from "@mui/icons-material";
import { Loader } from "./Loader/Loader";




export function Posts(){
const navigate=useNavigate();
const [selectedMenu,setSelectedMenu]=useState()
const [selectCategory,setSelectCategory]=useState([]);
const [searchData,setSearchData]= useState([])
const [breedCategory,setBreedCategory]=useState()
const [loaderEnable,setLoaderEnable] = useState();
  const handleClickAddNew=()=>{
    navigate('/add-pet')
  }

  const localToken=localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token")
  const config=
  {
    headers:{
      'x-access-token': localToken,
      'x-refresh-token': localRefreshToken,
      
    }}

  useEffect(()=>{
    axios.get('https://demo.emeetify.com:81/pet/categories/avail_cats', config)
    .then((response)=>{
        console.log("12345",response.data.status);
        setLoaderEnable(response?.data)
        setSelectCategory(response?.data?.data)
    }).catch((error)=>{
        console.log("error",error)
    })
},[])

const handleSearchChange=(e)=>{
  const search = e.target.value

  axios.get(`https://demo.emeetify.com:81/pet/users/filternames?firstname=${search}&lastname=&mobile_no=`)
  .then((res)=>{
    console.log(res?.data)
    setSearchData(res?.data?.data)
  }).catch((error)=>{
    console.log(error)
  })
}

const handleSelectChange=(e)=>{

setSelectedMenu(e.target.value)
}
console.log("///",selectCategory)
  return(

  
    <>
 {
  loaderEnable?.status ?<>
 
     
    <Navbar/>
<Card className="main-body-post">
<input type='date'  className="post-date"/>
<Typography className='title-posts'>Posts</Typography>
 <Stack direction='row'>
<Card className='total-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Total Posts<br/>34</Typography>
  <PetsIcon className='peticon-orders-card'/>

  </CardContent>
</Card>
<Card className='approved-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Approved<br/>21</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
<Card className='rejected-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Rejected<br/>11</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
<Card className='pending-posts-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Pending<br/>02</Typography>
  <PetsIcon className='peticon-orders-card'/>
  </CardContent>
</Card>
 </Stack>
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
                  <MenuItem  defaultValue={""}>Select State</MenuItem>

          <MenuItem  value={'coimbatore'}>Coimbatore,Tamil Nadu</MenuItem>
          <MenuItem value={'Tiruppur'}>Tiruppur</MenuItem>
          <MenuItem value={'Chennai'}>Chennai</MenuItem>
        </Select>
</Stack>
<Stack className='main-stack-category-select' direction='row'>
  <Select
value={selectedMenu}
onChange={handleSelectChange}
id="demo-simple-select"
// placeholder="select"
displayEmpty
className="select-category"
  >
    <MenuItem defaultValue=""><em>Select Category</em></MenuItem>
    {
      selectCategory.map((item)=>(
        <MenuItem key={item?.id} value={item?.category_name}>{item?.category_name}</MenuItem>
      )
    )
    }
      {/* <MenuItem  value="Cat">Cat</MenuItem>
       <MenuItem value={'Bird'}>Bird</MenuItem>
         <MenuItem value={'Dog'}>Dog</MenuItem> */}


 </Select>
 <Select
 value={breedCategory}
onChange={(e)=>{setBreedCategory(e.target.value)}}
  displayEmpty
className="select-breed"
  >
     <MenuItem defaultValue=""><em>Select Breed  </em>
     </MenuItem>
      <MenuItem  value={'cat'}>German Shepherd</MenuItem>
       <MenuItem value={'Bird'}>Rottweiler</MenuItem>
         <MenuItem value={'Dog'}>BullDog</MenuItem>
 </Select>

 <Button className='add-new-btn' onClick={handleClickAddNew}>Add a new</Button>
</Stack>

<TablePosts data={searchData}/>
</Card>

 </>
 :
 <Loader/>
}
    </>
  );
}