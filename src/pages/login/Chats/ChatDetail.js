import { Box, Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './ChatDetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from "react-router-dom";
import chatprofile from '../Dashboard/Web - Menu/chat&notification/user1.png';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Chatmap } from "./Chatmap";
import axios from "axios";
export function ChatDetail(){
    const locationState = useLocation().state
    const [locationData,setLocationData]= useState(locationState)
    const location = locationData.sender_id
    console.log(location)
    const navigate=useNavigate();
const [messageSent,setMessageSent] = useState([]);
const [msgpopup,setMsgpopup] = useState(false)
const [message,setMessage] = useState([]);
const [msg, setMsg] = useState()
const [sendMsg,setSendMsg]=useState([])
const [socket, setSocket] = useState();
const [msgRecieved,setMsgRecieved]= useState([])
    const localToken = localStorage.getItem("token");
const localRefreshToken = localStorage.getItem("refresh_token");
const config = {
  headers: {
    "x-access-token": localToken,
    "x-refresh-token": localRefreshToken,
  },
};
// console.log(localToken)
const a= 2
const socketliveUrl=`http://demo.emeetify.com:5013/?token=${localToken}&reciepent_id=${location}&pet_id=`
const socketUrl= `https://demo.emeetify.com:5014/socket.io/?token=${localToken}&reciepent_id=${a}&pet_id=68`
useEffect(()=>{

 

    const newsocket = io(socketliveUrl)
console.log("sockettt",newsocket)

//  newsocket.emit('document-comments', 'Hello, Socket.IO!');

 newsocket.on('document-comments', (msg) => {
    console.log(msg)
  console.log(`Received message: ${JSON.stringify(msg)}`);
   setMsg(JSON.stringify(msg))
   let recieveMsg = JSON.stringify(msg)
   console.log("QWERTY",recieveMsg.message)
   setMsgRecieved(recieveMsg.message)


 });
   setSocket(newsocket);
// return ()=>{
//     newsocket.disconnect();

// }
},[])
// useEffect(()=>{
//      handleSend()
// },[msgRecieved,messageSent,message])
useEffect(()=>{
for (let i = 0; i > msgRecieved?.length; i++) {
    const element = msgRecieved[i];
    console.log(msgRecieved[i])
  
}
},[messageSent,msgRecieved,message])


const handleChange=(e)=>{
    setMessageSent(e.target.value)
}

useEffect(()=>{
console.log("??")
},[sendMsg,messageSent])





const [msgMap,setMsgMap]=useState([{
    'reciepent_id': location,

},{

}])

const handleSend=()=>{
//  setMsgMap([...msgMap,{messages:messageSent}])
     
socket.emit('create-document-comment', {
        'reciepent_id':location,
        'message': messageSent
       });
       setSendMsg([messageSent])    
       console.log(messageSent) 

// if(messageSent ){
//     if (messageSent.trim() !== '') {

//     // setSendMsg([ messageSent]);
//         // setMessageSent('');
//         setMsgpopup(false)
//         setSendMsg.push([{messageSent}])
//         console.log("///////////",sendMsg)

//         setSendMsg([messageSent])

//       }
// }
   
    // if (messageSent & socket) {
    //     if (messageSent.trim() !== '') {
    //         setMsgpopup(false)
    //         sendMsg.push([{messageSent}])
    //         console.log("///////////",sendMsg)
    
    //         setSendMsg([messageSent])
    //      console.log("000", messageSent);
    //      setMsgpopup(true)
    //  // Send the message to the server     
    //   socket.emit("create-document-comment", messageSent);
    // //   setMessage("" );
    //   let msg = messageSent;
    //   console.log(messageSent)
    //   setMessageSent('')
    //   setMessage('')

    // }
    //  }


   
    

    // if (message ) {
    //           console.log("0000", message);
    //           // Send the message to the server
    //           socket.emit("create-document-comment", "welcome");
    //           setMessage("");
    //         }


    
    }
    // const emitAlert = () => {
    //     // Emit an alert message to the server
    //     socket.emit('create-document-comment', "welcome");
    //   };
    const handleClickBackChat=()=>{
        navigate('/chats')
    }

    return(
        <>
        <Navbar/>
        <Card className='main-card-chat-detail'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackChat} >
         <ArrowBackIcon/><Typography >Back</Typography></Button>
         <Card className='card-chat-content'>
{console.log(msg)}
         {msg !== undefined  && JSON.parse(msg).map((i)=>(
            <>
            <Box>
        <Stack direction='row' className='stack-chat-content'>
            <img src={chatprofile} className='chat-detail-profile-img'/>
            <Card className='chat-content-card'>
                <Typography className='chat-text-content'>
               { 
               i.reciepent_id === location ? <>{i?.message}</>:''
               }
                </Typography>
            </Card>
        </Stack>
        <Typography className='time-content'>1 min</Typography>
        </Box>
        <Box className='box-alter-chat'>
            <Card className='card-alter-chat'>
                <Typography className='chat-text-alter-content'> </Typography>

            </Card>
            <Typography className='time-content-alter-chat'>1 min</Typography>
        </Box>
        <Box sx={{marginTop:'200px'}}>
        <Stack direction='row' className='stack-chat-content'>
            <img src={chatprofile} className='chat-detail-profile-img'/>
            <Card className='chat-content-card'>
                <Typography className='chat-text-content'>
                {i?.message}                </Typography>
            </Card>
        </Stack>
        <Typography className='time-content'>1 min</Typography>
        </Box>
      
            {/* {
                msgpopup && messageSent ?
                <Stack direction='row' className='stack-chat-content'>
                <img src={chatprofile} className='chat-detail-profile-img'/>
                <Card className='chat-content-card'>
                    <Typography className='chat-text-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </Card>
            </Stack>:''
            } */}

            {/* <Typography className='time-content-alter-chat'>1 min</Typography> */}


<Stack direction='row' sx={{marginTop:'150px'}}  className='stack-chat-content'>
            <img src={chatprofile} className='chat-detail-profile-img'/>
            <Card className='chat-content-card'>
                <Typography className='chat-text-content'>
                {i?.message}                </Typography>
            </Card>
        </Stack>   
        
        {/* <Chatmap/> */}
{/* {
    message && messageSent ?
    message?.map((data,index)=>(
        <Card>hhhhhhhhhh</Card>
    )):''
   
} */}



{/* {
    messageSent && msgMap &&
msgMap.map((j,index)=>(
    <Box key={index} className='box-alter-chat'>
        <Card className='card-alter-chat'>
                <Typography key={index} className='chat-text-alter-content'>{j.messages} </Typography>
               
            </Card>   </Box>
))
} */}

        {/* {
            messageSent && 
         
            <Box className='box-alter-chat'>
            <Card className='card-alter-chat'>
                    <Typography className='chat-text-alter-content'>{messageSent} </Typography>
    
                </Card>   </Box>
        } */}
{/*      
{
    msg.map((k)=>(


    ))

}
      */}

     {/* <Box>
        <Stack direction='row' className='stack-chat-send'>
        <TextField className='textfield-chat' value={messageSent} onChange={handleChange}  placeholder="Type here..."></TextField>
        <SendIcon onClick={handleSend} className='send-icon'/>

        </Stack>
     </Box> */}
        </>
        ))}
        {
    sendMsg.map((j,index)=>(
        <Box key={index} className='box-alter-chat'>
            <Card className='card-alter-chat'>
                    <Typography key={index} className='chat-text-alter-content'>{j} </Typography>
                   
                </Card>   </Box>
    ))
}
           <Box>
        <Stack direction='row' className='stack-chat-send'>
        <TextField className='textfield-chat' value={messageSent} onChange={handleChange}  placeholder="Type here..."></TextField>
        <SendIcon onClick={handleSend} className='send-icon'/>

        </Stack>
     </Box>     
        </Card>
      
 
      
        </Card>
        </>
    )
}