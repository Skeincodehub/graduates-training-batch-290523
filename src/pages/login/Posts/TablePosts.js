

import { Button, Card, Checkbox, Menu, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './TablePosts.css'

export function TablePosts(){
    const navigate= useNavigate()

    const handleClick =()=>{
        navigate('/post-deatils')
    }

    const handleApprove=()=>{

    }

    return(
        <>
        <Card className="card-main-table" sx={{marginTop:'20px',height:'400px',width:'100%'}}>
        <Table className='table-full'  sx={{ width:'1000px'}}>
            <TableHead > 
                <TableRow>
                    <TableCell sx={{textAlign:'',color:'gray', marginleft:'15px'}}>
                        <Checkbox/>
                    </TableCell>
                    <TableCell sx={{align:'right',color:'gray'}}>
                    Date
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                        Pet Name
                    </TableCell>
                      <TableCell  sx={{color:'gray'}}>
                    Category
                    </TableCell>
                    <TableCell sx={{textAlign:'center',width:'1000px',color:'gray'}}>
                    Breed
                    </TableCell>
                      <TableCell sx={{color:'gray'}}>
                    Price
                    </TableCell>
                    <TableCell sx={{textAlign:'center',color:'gray',width:'1000px'}}>
                    User
                    </TableCell>
                    <TableCell sx={{color:'gray'}}>
                    Location
                    </TableCell>
                    <TableCell sx={{color:'gray '}}>
                    Status
                    </TableCell> 
                     <TableCell sx={{color:'gray'}}>
                    Action
                    </TableCell>

                </TableRow>
            </TableHead>
 <TableBody  className='tablebody'>
           
             <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
               Rocky
                </TableCell>
                <TableCell>
                   Dog
                </TableCell>
                <TableCell>German Shephred</TableCell>
                <TableCell>₹7000</TableCell>
                <TableCell><Button  sx={{textTransform:'none'}}  onClick={handleClick}>Karthick Raja</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> 
                    <PopupState variant="popover" popupId="demo-popup-menu">
              {(PopupState) => (
    <React.Fragment>
                    <Button  {...bindTrigger(PopupState)} className='approve-order-btn'>Approve</Button>

            <Menu className='menu-on-approve-btn'{...bindMenu(PopupState)}>
              <MenuItem >Approve Post </MenuItem>
              <MenuItem >Reject Post </MenuItem>
              <MenuItem >Close Post </MenuItem>
            </Menu   >
     
    </React.Fragment>
              )}
            </PopupState>
            </TableCell>               
             <TableCell>...</TableCell>
            </TableRow>

            <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
                  Cherry
                </TableCell>
                <TableCell>
                   Cat
                </TableCell>
                <TableCell>Persian</TableCell>
                <TableCell>₹8000</TableCell>
                <TableCell><Button  sx={{textTransform:'none'}} onClick={handleClick}>Vicky</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
          
                    
                <TableCell>    <Button sx={{color:'red'} }  className='approve-order-btn'>Approve</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>

            <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                <TableCell>
                 Candy
                </TableCell>
                <TableCell>
                   Dog
                </TableCell>
                <TableCell>Rottweiler</TableCell>
                <TableCell>₹9000</TableCell>
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Ranjith Kumar</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'red', textTransform: 'none'} }>Rejected</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
                    Mani
                </TableCell>
                <TableCell>
                   Parrot
                </TableCell>
                <TableCell>Re-Necked Parrot</TableCell>
                <TableCell>₹2,500</TableCell>
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Saranya Devi</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'lightgrey ',textTransform:'none'} }>Post Closed</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
                  Duck
                </TableCell>
                <TableCell>
                   Duck
                </TableCell>
                <TableCell>Indian Runner Duck</TableCell>
                <TableCell>₹2,500</TableCell>
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Ramya Vargesh</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'green',textTransform:'none'} }>Approved</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>

 </TableBody>

        </Table>
        </Card>
        </>
    )
}