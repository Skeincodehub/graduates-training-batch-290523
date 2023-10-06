import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Navbar } from "../Navbar";
import './Addetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import adimg from '../Dashboard/Web - Menu/chat&notification/shelterdog.png';


export function Addetail(datas){
const navigate=useNavigate();
const parms = useParams()
// console.log(parms)
const location = useLocation()
console.log(location)
const dataDetail= location.state
console.log(dataDetail)
const AddDate=dataDetail?.created_at
var AddonDate =new Date(AddDate)
var AddonDisplayDate= AddonDate.getDate()+"-"+(AddonDate.getMonth()+1)+"-"+  AddonDate.getFullYear();
// console.log("::::::::",AddonDisplayDate)

console.log('///',location)

 const handleEdit=(dataDetail, parms)=>{
    console.log("--->",dataDetail);

    navigate(`/ad/edit/${parms.ad_id}`, {state: dataDetail })
 }
const handleClickBackAd=()=>{
    navigate("/adds")
}
    return(
        <>
        <Navbar/>
        <Card className='main-card-ad-detail'>
        <Button className='back-btn' sx={{color:'black',textTransform:'none'}} onClick={handleClickBackAd} >
             <ArrowBackIcon/><Typography >Back</Typography></Button>
    <Typography sx={{marginTop:'15px',marginLeft:'50px',fontWeight:'bold'}}>Ad Details</Typography>
     <Card className="sub-card-ad-detail">
        <Box>
            <Typography className='added-date-text'>Added On :<span>{AddonDisplayDate}</span></Typography>
            <Button className="edit-btn-ad-detail" dataDetails={dataDetail} detail={parms} onClick={(e)=>handleEdit(dataDetail,parms)}>Edit</Button>
        </Box>
        <Stack direction='row' className='stack-ad-detail'>
            <img src={adimg} className='ad-detail-img'/>
            <Box className='box-ad-detail-text'>
                <Typography sx={{fontWeight:'bold'}}>Ad Title : {dataDetail?.ad_title}</Typography><br/>
                <Typography>Ad Id &nbsp; &nbsp; :     {dataDetail?.ad_id}</Typography><br/>
                <Typography>Postion : {dataDetail?.position}</Typography><br/>
                <Typography>Pages &nbsp; :{dataDetail?.pages}</Typography><br/> 
                <Typography>Timer &nbsp; : {dataDetail?.timer}</Typography> <br/>
                <Typography>Link&nbsp; &nbsp;  : <span className='span-link'>{dataDetail?.link}</span></Typography> 
            </Box>
        </Stack>
        <Typography className='description-text'>Description</Typography>
            <Card className='lorem-para-card-ad-details'>

                <Typography className='lorem-para-1-content'> {dataDetail?.ad_description} <br/>
                </Typography>
              
            </Card>
     </Card>

        </Card>
        </>
    )
}