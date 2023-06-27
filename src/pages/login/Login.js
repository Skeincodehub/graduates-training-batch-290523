import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import './Login.css';
import { LoginCredientials } from "./LoginCredientials";
import '@fontsource/roboto/700.css';
export function Login(){

    return(
        <>
        
            <Card className="container">
                <Stack direction="row">
                <Grid sx={{backgroundColor:'white',height:"650px",width:"600px",marginTop:'40px',marginLeft:'100px'}}>
                   <Typography sx={{marginTop:'70px',marginLeft:"180px",fontSize:'35px',}} 
              
                   >Hello There!</Typography>
                   <Typography sx={{marginTop:'15px',marginLeft:'90px',color:'grey'}}>Welcome back dear friend! Please login and enjoy our services</Typography> 
                    <LoginCredientials/>
                </Grid>
                 <Grid className="img-container" sx={{height:"650px",width:"500px",marginTop:'40px'}}>
                <h1 className="heading">Pet</h1>
                <h2 className="heading-sales">Sales</h2>
                <Typography sx={{marginTop:'290px',marginLeft:'50px',color:'whitesmoke'}}>Welcome back dear friend!<br/> Please login and enjoy our<br/> services</Typography> 
                </Grid>
                </Stack>  
            </Card>

           
        
        </>
    )
}