import { Box,
     Button,
     Card, 
     IconButton, 
     InputBase, 
     MenuItem, 
     Paper,
     Select,
     Stack, 
     Table,
     TableBody, 
     TableCell, 
     TableContainer, 
     TableHead, 
     TableRow, 
     Typography } 
from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';


import { Navbar } from "./Navbar";
import './PetFoodLanding.css';
import iamsmartpuppy from '../login/Dashboard/asserts/iamspuppy.jpeg';
import chappiimg from '../login/Dashboard/asserts/chappi.jpeg';
import petwaterer from  '../login/Dashboard/asserts/petwaterer.jpeg';
import pedigree from  '../login/Dashboard/asserts/pedigree.jpg';
import chewbones from  '../login/Dashboard/asserts/chewbones.jpg';

import { Petfoodtable } from "./Petfood/Petfoodtable";
import { useNavigate } from "react-router-dom";


export function PetFoodLanding(){
    const navigate=useNavigate();
    
    const handleProductClick=()=>{
      navigate('/product-details')
    }

    const handleNewPetOrder=()=>{
      navigate('/add-new-product')
    }

    return(
        <>
        <Navbar/>
        <Card className='main-body-pet-food-accessories'>
            <Typography className='heading-pet-food'> Pet Food & Accessories</Typography>
            <Stack direction='row' className='stack-card'>
                <Card className='total-products-card'>
                    <Typography className='total-products-text'>Total Products<br/>574</Typography>
                    <PetsIcon className='peticon-petfood-card'/>
                </Card>
                <Card className='threshold-products-card'>
                    <Typography className='total-products-text'>Threshold Reached<br/>32</Typography>
                    <PetsIcon className='peticon-petfood-card'/>
                </Card>
            </Stack>
            <Box className='search-bar-box'>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex',borderRadius:'25px',backgroundColor:'lightgrey', alignItems: 'center',marginLeft:'50px',marginTop:'35px', width: 400 }}
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
    </Box>
    <Stack direction='row'>
      <Box>
      <Select
 value=''
 
  displayEmpty
className="select-product-pet-food"
  >
     <MenuItem value=""><em>Select Product</em>
     </MenuItem>
      <MenuItem  value={'Chappi'}>Chappi</MenuItem>
       <MenuItem value={'Pedigree'}>Pedigree</MenuItem>
         <MenuItem value={'IAMS-Smart Puppy'}>IAMS-Smart Puppy</MenuItem>
 </Select>
      </Box>
        <Box>
    <Select
      value=''
      displayEmpty
     className="select-category-pet-food"
    >
     <MenuItem value=""><em>Select Category </em>
     </MenuItem>
      <MenuItem  value={'Dry'}>Dry</MenuItem>
       <MenuItem value={'Chunks , Gravy ,Wet'}>Chunks,Gravy,Wet</MenuItem>
         <MenuItem value={'Dry , Pellets'}>Dry, Pellets</MenuItem>
 </Select>
        </Box>
        <Box className='add-new-btn-box'>
          <Button className="add-new-btn" onClick={handleNewPetOrder}>Add a new</Button>
        </Box>
     </Stack>
     {/* <Petfoodtable/> */}

  <Card>
      <Table sx={{marginTop:'15px',marginLeft:'10px',width:'auto'}}>
        <TableHead>
       <TableRow>
            <TableCell>
    
            </TableCell>
           <TableCell sx={{textAlign:'center',width:'100px'}}>
            Product Name
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}}>
            Product Id
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}}>
            Category
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}} >
            Qty
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}}>
            Price
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}}>
            Stock Available
            </TableCell>
            <TableCell sx={{textAlign:'center',width:'100px'}}>
            Action
            </TableCell>
           </TableRow>
        </TableHead>
    <TableBody className="table-body-petfood">
      <TableRow className='table-row-petfood'>
      <TableCell>
        <img src={iamsmartpuppy} className='table-item-img1' alt=''/>
      </TableCell>
      <TableCell>
        <Button sx={{textTransform:'none',padding:'0px'}} onClick={handleProductClick}>
        IAMS- Smart Puppy</Button>
      </TableCell>
      <TableCell>
     #00987
      </TableCell>
 <TableCell>
    Dry,Pellets
   </TableCell>
      <TableCell>
    3kg
      </TableCell>
      <TableCell>
      &#8377;  1600
      </TableCell>
      <TableCell>
    38
      </TableCell>
      <TableCell>
    ...
      </TableCell>
      </TableRow>
<TableRow className='table-row-petfood'>
      <TableCell>
        <img src={chappiimg} className='table-item-img1' alt=''/>
      </TableCell>
      <TableCell>
        Chuppi
      </TableCell>
      <TableCell>
     #00567
      </TableCell>
 <TableCell>
    Dry
   </TableCell>
      <TableCell>
    3kg
      </TableCell>
      <TableCell>
      &#8377;  347
      </TableCell>
      <TableCell>
    70
      </TableCell>
      <TableCell>
    ...
      </TableCell>
      </TableRow>

      <TableRow className='table-row-petfood'>
      <TableCell>
        <img src={petwaterer} className='table-item-img1' alt=''/>
      </TableCell>
      <TableCell>
        Gravity Pet Waterer
      </TableCell>
      <TableCell>
     #00234
      </TableCell>
 <TableCell>
    Accessories
   </TableCell>
      <TableCell>
    1kg
      </TableCell>
      <TableCell>
      &#8377; 2,000
      </TableCell>
      <TableCell>
    03
      </TableCell>
      <TableCell>
    ...
      </TableCell>
      </TableRow>
      <TableRow className='table-row-petfood'>
      <TableCell>
        <img src={pedigree} className='table-item-img1' alt=''/>
      </TableCell>
      <TableCell>
    Pedigree
      </TableCell>
      <TableCell>
     #00871
      </TableCell>
 <TableCell>
    Chunks, Gravy,Wet
   </TableCell>
      <TableCell>
    3kg
      </TableCell>
      <TableCell>
      &#8377;  540
      </TableCell>
      <TableCell>
    42
      </TableCell>
      <TableCell>
    ...
      </TableCell>
     </TableRow>
     <TableRow className='table-row-petfood'>
      <TableCell>
        <img src={chewbones} className='table-item-img1' alt=''/>
      </TableCell>
      <TableCell>
    Chew Bones
      </TableCell>
      <TableCell>
     #06754
      </TableCell>
 <TableCell>
      Bone
   </TableCell>
      <TableCell>
     3 Pieces
      </TableCell>
      <TableCell>
      &#8377;  299
      </TableCell>
      <TableCell>
    15
      </TableCell>
      <TableCell>
    ...
      </TableCell>
     </TableRow>
    </TableBody>
      </Table>
      </Card>
      
    

    </Card>
        </>
    )
}