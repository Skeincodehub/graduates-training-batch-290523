import { Box, Button, Card, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Pagenation } from "./pagenation";
import './TableOrdersPet.css'

export function TableOrderPet({filterDatas,search,parentDataCallback,getData,value,foodProduct, datas}){
    const navigate= useNavigate()
    const parms = useParams();
    // console.log("WWWWWWWWWWWWWWWW",getData)
    // console.log("::::::::::++=======>>>>>>>>",foodProduct)
    // console.log("=======>>>>>>>>",value)

    // console.log("gg", filterDatas , "ddddd", datas)
//    var dataStructure = data
    const [filterData,setFilterData]= useState(datas)
    const [dataSet,setDataSet] =useState([])
    const [productarray,setProductarray]=useState([])
const [data,setData]= useState(datas)

// console.log("//////////////",data)
    const handleClick =(getData)=>{
// console.log("dataaaaa",getData)
        navigate(`/orders/${getData?.order_id}`,{state: getData})
    }
    // const sendCallbackFunction =(datas)=>{

    //     parentDataCallback(datas)
    // }

// Array.isArray(data) && data.map((item)=>{
//     console.log("====>", item)
// //     item?.orders?.orders?.map((newItem)=>{
// // console.log("------->",newItem);
// //     })
// Object.entries(item?.orders).forEach(([key, value]) => {
//     console.log(`${key} ${value}`); 
//     setDataSet(key?.products[0])

//   });
// })

// for(let i=0;i<data.length;i++){
//     const local = data[i].orders.products;
//     // console.log(local);
//     setDataSet(local)
//     for(let j=0;j<local.length;j++){
//         // console.log('breed',local[j].breed)
//     }
// }
//   console.log(dataSet)


useEffect(()=>{
// for(let local of data){
//         console.log("local check>>>>",local.orders.products)
//     local.orders.products.map((item)=>{
//         const check = [];
//         check.push(item)
// console.log("---->",item)
// setProductarray(check)
//     })
// }

// console.log("Tableeeeeeeeeeee",search)
// console.log("DAtttaaaaaaas",data)

},[filterDatas,search,data,getData,value,foodProduct, datas])


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
                   {value === "pet" ?" Category" :"No of Items" }
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
  
  
  {
    
  value ==="pet" ?(
  
 getData?.map((getData)=>(
        <TableRow className='tablerow'>
            <TableCell>
                <Checkbox/>
            </TableCell>
            <TableCell key={getData?.order_id}>
                  { getData?.to_date != undefined ? 
             getData?.to_date :"--"
             }
                    </TableCell>
              <TableCell>
                  { getData?.order_id != undefined ? 
             getData.order_id :"--"
             }
            </TableCell>
            <TableCell>
                Pets
             {/* { getData.orders.products[0].stock_type != undefined ? 
             getData.orders.products[0].stock_type :"--"
             } */}
            </TableCell>
            <TableCell>      { getData?.breed != undefined ? 
             getData?.breed :"--"
             }</TableCell>
            <TableCell>₹       { getData?.price != undefined ? 
             getData?.price :"--"
             }</TableCell>
            <TableCell><Button  
       
            sx={{textTransform:'none'}}  key={getData?.order_id} onClick={(e)=>handleClick(getData)}>
            { getData?.name != undefined ? 
             getData?.name :"--"
             }
               </Button></TableCell>
            <TableCell>{getData?.location} </TableCell>
            <TableCell> <Button 
            className={"delivered-btn-style" }
            >      { getData?.status != undefined ? 
             getData?.status :"--"
             } </Button></TableCell>
            <TableCell>...</TableCell>
        </TableRow>
    
        ))
  ):(
    
foodProduct?.map((getData)=>(
    <TableRow className='tablerow'>
        <TableCell>
            <Checkbox/>
        </TableCell>
        <TableCell key={getData?.order_id}>
              { getData?.to_date != undefined ? 
         getData?.to_date :"--"
         }
                </TableCell>
          <TableCell>
              { getData?.order_id != undefined ? 
         getData.order_id :"--"
         }
        </TableCell>
        <TableCell>
            {getData?.avail_qty != undefined ? getData.avail_qty:"--"}
         {/* { getData.orders.products[0].stock_type != undefined ? 
         getData.orders.products[0].stock_type :"--"
         } */}
        </TableCell>
        <TableCell>      { getData?.breed != undefined ? 
         getData?.breed :"--"
         }</TableCell>
        <TableCell>₹       { getData?.price != undefined ? 
         getData?.price :"--"
         }</TableCell>
        <TableCell><Button  
   
        sx={{textTransform:'none'}}  key={getData?.order_id} onClick={(e)=>handleClick(getData)}>
        { getData?.name != undefined ? 
         getData?.name :"--"
         }
           </Button></TableCell>
        <TableCell>{getData?.location} </TableCell>
        <TableCell> <Button 
        className={"delivered-btn-style" }
        >      { getData?.status != undefined ? 
         getData?.status :"--"
         } </Button></TableCell>
        <TableCell>...</TableCell>
    </TableRow>

    ))
    
    
    )
     
        }

  
  

     </TableBody>

        </Table>
{/* <Pagenation/> */}
        </Card>
        </>
    )
}