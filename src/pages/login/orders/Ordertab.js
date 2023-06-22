import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';


import '../orders/Ordertab.css'
import { Button } from '@mui/material';
import { TableOrderPet } from './TableOrdersPet';
import { FoodPetTab } from './FoodPetTab';
import { useNavigate } from 'react-router-dom';

export function Ordertab(){ 
    const navigate=useNavigate()
    const [value, setValue] = useState('1');
    const [location, setLocation] = useState('');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    const handlepetplaceorder=()=>{
      navigate('/pet-place-order')
    }
 

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
      console.log(event.target.value)
    };
    return(
        <>
         <Box sx={{ width: '100%',marginTop:'20px', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList sx={{marginLeft:'20px'}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Pets" value="1" />
            <Tab label="Foods & Accessories" value="2" sx={{marginLeft:'50px'}} />
           
       <Box sx={{marginLeft:'500px'}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={location}
          className='select-location'
          onChange={handleLocationChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem  value={'coimbatore'}>Coimbatore,Tamil Nadu</MenuItem>
          <MenuItem value={20}>Tiruppur</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
        </Select>
        </Box>
          </TabList>
        </Box>
        <TabPanel value="1">
       <div className='searchbar-main-div'>
        <div>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
        </div>
        <div>
            <Button className='place-order-btn' onClick={handlepetplaceorder} >Place Order</Button>

        </div>
       </div>
       
       <TableOrderPet/>
         </TabPanel>
        <TabPanel value="2">
        <div className='searchbar-main-div'>
        <div>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
        </div>
        <div>
            <Button className='place-order-btn' >Place Order</Button>

        </div>
       </div>
            <FoodPetTab/>
        </TabPanel>
  
      </TabContext>
    </Box>
        
        </>
    )
}