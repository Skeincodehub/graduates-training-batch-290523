import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import {useNavigate} from 'react-router-dom' 

export function LoginCredientials(){
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        username:"",
        password:""
    })
    const [formError,setFormError]=useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target ;
        
        setFormData({...formData,[name]:value
        })
}

const LoginDetails= [{username:"admin@gmail.com",password:"Admin@123"}]
    const handleSubmit=(e)=>{
        console.log(formData)
        e.preventDefault();
        const errors={};
        let formIsValid= true ;
    if(!formData.username){
        formIsValid= false
        errors['username'] = "please enter your E-mail id";
    }
    if(!formData.password){
        formIsValid= false;
        errors['password']="please enter password";
    }

    if(formData.username==LoginDetails[0].username && formData.password==LoginDetails[0].password){
        console.log("workingLogin");
        localStorage.setItem("username",formData.username)
        navigate("/home");
    }
    else{
        console.log("signup mismatched")
    }
   
    setFormError(errors)

    }
    return(
        <div>
            <Box sx={{marginTop:'30px',marginLeft:'160px'}}>           
              <form onSubmit={handleSubmit}>  
             <Typography sx={{marginLeft:'30px',color:"grey"}} > User Name</Typography>
            <TextField variant="filled" 
            className='input-username'
            name="username"
           
            value={formData.username}
            onChange={handleChange}

            ></TextField>
            {formError.username && !formData.username && <Grid sx={{ marginLeft: "40px", marginTop: "50px", color: "red" }}>{formError.username}</Grid>}

            <Typography sx={{marginLeft:'30px',marginTop:"50px",color:"grey"}} >Password</Typography>
            <TextField variant="filled" 
            className='input-username'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            ></TextField><br/>
 {formError.password && !formData.password && <Grid sx={{ marginLeft: "40px", marginTop: "50px", color: "red" }}>{formError.password}</Grid>}

     <FormGroup sx={{marginTop:'35px'}}>
         <FormControlLabel control={<Checkbox/>} label="Remember Me" />
      </FormGroup>
<Button  type="submit" className="login-btn" >Login</Button><br/>
<Button className="forgot-btn">Forgot password?</Button> 
</form>    
        </Box>

        </div>

    )
}