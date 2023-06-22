import { Button, Card, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import './TableOrdersPet.css'

export function TableOrderPet(){
    const navigate= useNavigate()

    const handleClick =()=>{
        navigate('/orders')
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
                        Order Id
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
                  #00987
                </TableCell>
                <TableCell>
                   Dog
                </TableCell>
                <TableCell>German Shephred</TableCell>
                <TableCell>₹7000</TableCell>
                <TableCell><Button  sx={{textTransform:'none'}}  onClick={handleClick}>Karthick Raja</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button  className='approve-order-btn'>Approve</Button></TableCell>
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
                   Cat
                </TableCell>
                <TableCell>Persian</TableCell>
                <TableCell>₹8000</TableCell>
                <TableCell><Button  sx={{textTransform:'none'}} onClick={handleClick}>Vicky</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'red'} }  className='approve-order-btn'>Approve</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>



            {/* <TableRow className='tablerow'>
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
                   Cat  
                </TableCell>
                <TableCell sx={{align:"right"}}>Persian</TableCell>
                <TableCell>₹8000</TableCell>
                <TableCell  sx={{width:'1200px'}}><Button onClick={handleClick}>Vicky</Button></TableCell>
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
                   #00234
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
                   #00871
                </TableCell>
                <TableCell>
                   Parrot
                </TableCell>
                <TableCell>Re-Necked Parrot</TableCell>
                <TableCell>₹2,500</TableCell>
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Saranya Devi</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'#efc653 ',textTransform:'none'} }>Inprogress</Button></TableCell>
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
                   Duck
                </TableCell>
                <TableCell>Indian Runner Duck</TableCell>
                <TableCell>₹2,500</TableCell>
                <TableCell><Button sx={{textTransform:'none'}} onClick={handleClick}>Ramya Vargesh</Button></TableCell>
                <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button sx={{color:'green',textTransform:'none'} }>Delivered</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>

 </TableBody>

        </Table>
        </Card>
        </>
    )
}