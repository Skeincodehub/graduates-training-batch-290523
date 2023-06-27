import { Button, Card, CardContent, IconButton, InputBase, Menu, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';

import { Navbar } from "../Navbar";
import './Adds.css';
import React from "react";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
export function Adds(){
        const navigate=useNavigate();
        const handleAddedit=()=>{
            navigate('/ad-details')
        }

        const handleAddAd=(e)=>{
            navigate('/add-new-ad');
        }
    return(
        <>
        <Navbar/>
        <Card className='main-card-adds'>
        <Typography sx={{marginTop:'15px',marginLeft:'50px',}}>Ads</Typography>
     <Card className='total-users-card-landing'>
  <CardContent>
  <Typography className="total-posts-name-posts-card">Total Ads<br/>65</Typography>
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
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{rotate:'90deg',color:'black'}}/>
      </IconButton>
     
    </Paper>
</Stack>
<Stack className='main-stack-category-select' direction='row'>
  <Select
 value=''
 
  displayEmpty
className="select-category"
  >
     <MenuItem value=""><em>Select Page</em>
     </MenuItem>
      <MenuItem  value={'cat'}>Home</MenuItem>
       <MenuItem value={'Bird'}>Orders</MenuItem>
         <MenuItem value={'Dog'}>Posts</MenuItem>
 </Select>

 <Button className="add-new-ad-btn" onClick={handleAddAd}>Add  a new ad</Button>
</Stack>
<Table className='table-full'  sx={{ width:'1000px'}}>
            <TableHead > 
                <TableRow>
                  
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Ad Title
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                       Ad id
                    </TableCell>
                      <TableCell  sx={{color:'gray'}}>
                Position
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                  Pages
                    </TableCell>
                      <TableCell sx={{color:'gray'}}>
                    Timer
                    </TableCell>
                   
                     <TableCell sx={{color:'gray'}}>
                    Action
                    </TableCell>

                </TableRow>
            </TableHead>
 <TableBody  className='tablebody'>
           
             <TableRow className='tablerow'>
             
                <TableCell>
          Siberian Husky Puppies For Sale
                </TableCell>
                  <TableCell>
             #00987
                </TableCell>
                <TableCell>
                   Bottom
                </TableCell>
                <TableCell>Login,Registration,Cart,sumaary...</TableCell>
                <TableCell>2 mins</TableCell>
                <TableCell> 
                    <PopupState  variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)}>...</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem onClick={handleAddedit} >Edit </MenuItem>
             
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell>               
         
            </TableRow>

            <TableRow className='tablerow'>
           
            <TableCell>
        ORGANIX Pet Food
                </TableCell>
                  <TableCell>
             #00567
                </TableCell>
                <TableCell>
                 Top &  Bottom
                </TableCell>
                <TableCell>Cart,Sumaary</TableCell>
                <TableCell>2 mins</TableCell>
                <TableCell> 
                    <PopupState  variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)}>...</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem >Edit </MenuItem>
          
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell> 
            </TableRow>

            <TableRow className='tablerow'>
         
            <TableCell>
Dog Grooming video
                </TableCell>
                  <TableCell>
             #00234
                </TableCell>
                <TableCell>
                   Top
                </TableCell>
                <TableCell>Login</TableCell>
                <TableCell>3 mins</TableCell>
                <TableCell> 
                    <PopupState  variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)}>...</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem >Edit </MenuItem>
     
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell> 
            </TableRow>
            <TableRow className='tablerow'>
             
            <TableCell>
        Purple Pet Sitter Services
                </TableCell>
                  <TableCell>
             #00871
                </TableCell>
                <TableCell>
                 Top
                </TableCell>
                <TableCell>Help,Contact Us </TableCell>
                <TableCell>1 min</TableCell>
                <TableCell> 
                    <PopupState  variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)}>...</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem >Edit </MenuItem>
             
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell> 
            </TableRow>
            <TableRow className='tablerow'>
             
            <TableCell>
          PetRescue Digital
                </TableCell>
                  <TableCell>
             #06754
                </TableCell>
                <TableCell>
                   Bottom
                </TableCell>
                <TableCell>Login,Registration</TableCell>
                <TableCell>1 min</TableCell>
                <TableCell> 
                    <PopupState  variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)}>...</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem >Edit</MenuItem>
            
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell> 
            </TableRow>

 </TableBody>

        </Table>
        </Card>
        </>
    )
}