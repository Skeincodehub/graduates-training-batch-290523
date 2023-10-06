import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
export function Service(){
const navigate=useNavigate();




    // const local = localStorage.getItem('token')
    // useEffect(()=>{
    //     if(!local){
         
    //         navigate('/');
          
          
    //     }
    //     else{
    //  console.log("else working");
    //     }
    // },[])

//     axios.post('https://demo.emeetify.com:81/playgroup/user/',loginpayload)
//     .then((response)=>{
//         console.log(response.data);
//         if(response.data.status!== false){
//           localStorage.setItem('token',response.data.token)
          
//             navigate("/home");
//          }
//         else{
           
// console.log("login failed");
//         }
//     }).catch((error)=>{
//         console.log("error",error)
//     })





    return(
        <>
        <h1></h1>
        </>
    );
}