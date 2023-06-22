import { Button, Card, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import './TableOrdersPet.css'

export function FoodPetTab(){
    const navigate= useNavigate()

    const handleClick =()=>{
        navigate('/orders-food&Accessories')
    }
    return(
        <>
       <Card  className="card-main-table" sx={{marginTop:'20px',height:'330px' ,width:'980px'}}>
        <Table className='table-full'>
            <TableHead > 
                <TableRow>
                    <TableCell sx={{textAlign:'center',marginleft:'15px'}}>
                        <Checkbox/>
                    </TableCell>
                    <TableCell sx={{}}>
                    Date
                    </TableCell>
                    <TableCell sx={{textAlign:'center'}}>
                        Order Id
                    </TableCell>
                      <TableCell>
                  No.of.items
                    </TableCell>
                    <TableCell sx={{textAlign:'center'}}>
                  Price
                    </TableCell>
                      <TableCell>
            User
                    </TableCell>
                    <TableCell sx={{textAlign:'center'}}>
               Location
                    </TableCell>
                     <TableCell>
                    Status
                    </TableCell> 
                     <TableCell>
                    Action
                    </TableCell>

                </TableRow>
            </TableHead>
 <TableBody  className='tablebody'>
            {/* <TableRow className='tablerow' >
                <TableCell>
                
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
                   #00987
                </TableCell>
                <TableCell>
                   Dog
                </TableCell>
                <TableCell sx={{width:'1000px' ,fontFamily:'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>German Shephred</TableCell>
                <TableCell>₹7000</TableCell>
                <TableCell sx={{width:'1200px'}}><Button onClick={handleClick} >Karthick Raja</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button className='approve-order-btn' >Approve</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow> */}
             <TableRow className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                   23/04/2021
                </TableCell>
                  <TableCell>
                  #00987
                </TableCell>
                <TableCell>
                   03
                </TableCell>
                <TableCell><Button sx={{textTransform:'none'}}  onClick={handleClick}>Karthick Raja</Button></TableCell>
                <TableCell>₹229</TableCell>
                  <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button   className='approve-order-btn'>Approve</Button></TableCell>
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
                   #00567
                </TableCell>
                <TableCell>
                   02
                </TableCell>
                
                <TableCell><Button sx={{textTransform:'none'}}  onClick={handleClick}>Vicky</Button></TableCell>

                <TableCell>₹399</TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button   className='approve-order-btn'>Approve</Button></TableCell>

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
                   #00234
                </TableCell>
                <TableCell>
                   05
                </TableCell>
                
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Ranjith Kumar</Button></TableCell>

                <TableCell>₹158</TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'red',textTransform:'none'}}>Rejected</Button></TableCell>

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
                   #00871
                </TableCell>
                <TableCell>
                   01
                </TableCell>
                
                <TableCell><Button sx={{textTransform:'none'}}  onClick={handleClick}>Saranya Devi</Button></TableCell>

                <TableCell>₹2000</TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'yellow',textTransform:'none'}}>Inprocess</Button></TableCell>

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
                   #06754
                </TableCell>
                <TableCell>
                   01
                </TableCell>
                
                <TableCell><Button sx={{textTransform:'none'}}  onClick={handleClick}>Ramya Vargesh</Button></TableCell>

                <TableCell>₹1999</TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'green',textTransform:'none'}}>Delivered</Button></TableCell>

                <TableCell>...</TableCell>
            </TableRow>

         
 </TableBody>

        </Table>
        </Card>
        </>
    )
}