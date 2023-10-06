import { Button, Card, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './TableOrdersPet.css'

export function FoodPetTab( props){
    console.log("QWERTY",props?.data)
    const navigate= useNavigate()
    const [foodListData,setFoodListData] = useState([])
    const [foodProductList,setFoodProductList] = useState([])
    const localToken = localStorage.getItem("token");
    const localRefreshToken = localStorage.getItem("refresh_token");
    const config = {
      headers: {
        "x-access-token": localToken,
        "x-refresh-token": localRefreshToken,
      },
    };
  
    const handleClick =()=>{
        navigate('/orders-food&Accessories')
    }

    useEffect(()=>{
    //     for(let i= 0 ; i<=foodProductList.length; i++){
    //     //   console.log(foodProductList[i])
    //     if(foodProductList[i]?.product_type === "F"){
    //         console.log(foodProductList[i])
    //         setFoodListData(foodProductList[i])
    //     }
    // }
    },[foodProductList])
    useEffect(()=>{
axios.get(`https://demo.emeetify.com:81/pet/order/orderfilter?type=${props?.data}&firstname=`,config)
        .then((res)=>{
            console.log(res?.data?.data)
            setFoodProductList(res?.data?.data)
            
        }).catch((error)=>{
            console.log(error)
        })
    },[])   
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
                  User
                    </TableCell>
                      <TableCell>
                      Price 
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
         {
            foodProductList.map((data)=>(
                <TableRow key={data?.id} className='tablerow'>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                  {data?.from_date}
                </TableCell >
                  <TableCell key={data?.id}>
                  {data?.order_id}
                </TableCell>
                <TableCell>
                {data?.avail_qty}
                </TableCell>
                <TableCell><Button sx={{textTransform:'none'}}  onClick={handleClick}>{data?.user_id}</Button></TableCell>
                <TableCell>₹{data?.price}</TableCell>
                  <TableCell>Coimbatore,India</TableCell>
                <TableCell> <Button   className='approve-order-btn'>{data?.status}</Button></TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            ))
         } 
             


         
 </TableBody>

        </Table>
        </Card>
        </>
    )
}