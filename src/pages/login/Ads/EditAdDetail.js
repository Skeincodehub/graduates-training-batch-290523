import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Navbar } from "../Navbar";
import "./AddNewAd.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import shelterdog from "../Dashboard/Web - Menu/chat&notification/shelterdog.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";



export function allowsOnlyCharacters(e) {
  // const re = /[a-zA-Z]+/g;
  const re = /^[a-zA-Z\s]*$/;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
}
export function allowsOnlyCharactersAndNumeric(e) {
  const re = /[a-zA-Z0-9]+/;
  if (!re.test(e.key)) {
    e.preventDefault();
    console.log("erroronly");
  }
}

export function allowsOnlyNumeric(e) {
  const re = /^[0-9\b]+$/;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
}

export function EditAdDetail() {
  const parms = useParams();
  // console.log("qwerty", parms);
  const location = useLocation();
  const dataDetail = location.state;
  // console.log("12345", dataDetail);
  const [box, setBox] = useState();
const [valueData,setValueData]=useState(dataDetail.ad_id)
const [timerData,setTimerData]=useState(dataDetail.timer)
  const navigate = useNavigate();
  const intialState = {
    addTitle: dataDetail.ad_title,
    timer: dataDetail.timer,
    adid: dataDetail.ad_id,
    description: dataDetail.ad_description,
    position: dataDetail.position,
    pages: dataDetail.pages,
    link: dataDetail.link,
    imageUpload: "",
  };
  const [formData, setFormData] = useState(intialState);
  const [formError, setFormError] = useState(intialState);
  const [selectedAddImage, setSelectedAddImage] = useState(null);
  const [pictureAddupload, setPictureAddupload] = useState(null);
  const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const [isValidData, setIsValidData] = useState(true);
  const [isValidDataAdid, setIsValidDataAdid] = useState(true);
const [cancelButton,setCancelButton]=useState()
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };

  const Editpayload = {
    ad_title: formData.addTitle,
    ad_description: formData.description,
    ad_type: "",
    position: formData.position,
    pages: formData.pages,
    timer: formData.timer,
    link: formData.link,
    to_location: "",
    state: "tn",
    status: "active",
  };
  const regexPattern = /^[A-Za-z0-9]+$/;
  const handleInputChange = (e) => {

const {name,value}=e.target;
setFormData({...formData,[name]:value});
  };


  // console.log(regexPattern.test(formData.addTitle))
  // const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     const errors={};
  //     let formIsValid =true;
  //     if(!formData.addTitle){
  //         formIsValid= false;

  //         errors['addTitle']="Please Give AD Title"
  //     }
  //     // else if(!/[a-zA-Z]+/g.test(formData.addTitle)){
  //     //     formIsValid=false
  //     //     errors['addTitle']="Add Title Should Contain only Charaters"
  //     // }
  //     if(!formData.timer){
  //         formIsValid= false;

  //         errors['timer']="Please  Select Timier"
  //     }
  //     if(!formData.adid){
  //         formIsValid= false;

  //         errors['adid']="Please Give AD id"
  //     }
  //     // else if(!/^\d+$/.test(formData.adid)){
  //     //     formIsValid=false
  //     //     errors['adid']="please give valid id"
  //     //     console.log("errrrrrrrr")
  //     // }
  //     if(!formData.position){
  //         formIsValid= false;

  //         errors['position']="Please Select Position"
  //     }
  //     if(!formData.description){
  //         formIsValid= false;

  //         errors['description']="Please Give Description"
  //     }
  //     if(!formData.pages){
  //         formIsValid= false;

  //         errors['pages']="Please Select Pages"
  //     }
  //     if(!formData.link){
  //         formIsValid= false;
  //         console.log("error")
  //         errors['link']="Please Select Link"
  //     }
  //     console.log("e",errors)
  //     setFormError(errors)

  //     if(errors===null){
  //         axios.post('https://demo.emeetify.com:81/pet/ads/',Addpayload,config)
  //         .then((response)=>{
  //             console.log("add",response.data);

  //         }).catch((error)=>{
  //             console.log("error",error)
  //         })
  //     }
  // }

  const handleAddImageUpload = (e) => {
    console.log(e);
    let readerData = new FileReader();
    let file = e.target.files[0];
    //     let readerData= new FileReader();
    console.log("reader", readerData);
    //     let file = e.target.files[0];
    // console.log("/////",file)
    setPictureAddupload(file);
    readerData.onloadend = () => {
      // console.log("/////",reader.result)
      setSelectedAddImage(readerData.result);
    };
    readerData.readAsDataURL(file);
  };
  const handleUpdateSubmit=(e)=>{
    e.preventDefault();
        let errors={};
        let formIsValid =true;
        if(!formData.addTitle){
            formIsValid= false;
  
            errors['addTitle']="Please Give AD Title"
        }
        // else if(!/[a-zA-Z]+/g.test(formData.addTitle)){
        //     formIsValid=false
        //     errors['addTitle']="Add Title Should Contain only Charaters"
        // }
        if(!formData.timer){
            formIsValid= false;
  
            errors['timer']="Please  Select Timier"
        }
        if(!formData.adid){
            formIsValid= false;
  
            errors['adid']="Please Give AD id"
        }
        // else if(!/^\d+$/.test(formData.adid)){
        //     formIsValid=false
        //     errors['adid']="please give valid id"
        //     console.log("errrrrrrrr")
        // }
        if(!formData.position){
            formIsValid= false;
  
            errors['position']="Please Select Position"
        }
        if(!formData.description){
            formIsValid= false;
  
            errors['description']="Please Give Description"
        }
        if(!formData.pages){
            formIsValid= false;
  
            errors['pages']="Please Select Pages"
        }
        if(!formData.link){
            formIsValid= false;
            console.log("error")
            errors['link']="Please Select Link"
        }
        console.log("e",errors)
        setFormError(errors)
if(formData===null){
   console.log("QWERTY",errors)
  }
  else{
    axios.put(`https://demo.emeetify.com:81/pet/ads/${dataDetail.ad_id}`,Editpayload,config)
    .then((response)=>{
      if(response.data.status){
        console.log("dataREsponse",response.data)
        toast.success("Ad Edited Successfully")
      }

    }).catch((error)=>{
        console.log(error)
    })  }
}
  useEffect(() => {
    if (pictureAddupload) {
      setSelectedAddImage(URL.createObjectURL(pictureAddupload));
    }
  }, [pictureAddupload]);
  useEffect(() => {}, [selectedAddImage]);

  const handleOnChange = (e) => {
    setBox(e.target.value);
    console.log("working on change");
  };
  const handleClose = () => {
    setSelectedAddImage(null);
  };

  const handleClickBackAd = () => {
    navigate("/adds");
  };

  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Card className="main-card-add-new-ad">
        <Button
          className="back-btn"
          sx={{ color: "black", textTransform: "none" }}
          onClick={handleClickBackAd}
        >
          <ArrowBackIcon />
          <Typography>Back</Typography>
        </Button>
        <Typography
          sx={{ marginTop: "15px", marginLeft: "50px", fontWeight: "bold" }}
        >
          Edit AD
        </Typography>
        <Card className="card-ad-content">
          <Grid container>
            <Grid item sx={{ marginTop: "25px", marginLeft: "35px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Add Title
              </Typography>
              <TextField
              name="addTitle"
                value={formData.addTitle}
                onChange={handleInputChange}
                 sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}}
              ></TextField>

              {/* <TextField 
                sx={{height:'57px',width:'370px',backgroundColor:'#f6f6f6'}}
                onChange={handleInputChange}
                // onKeyPress={allowsOnlyCharactersAndNumeric}
                value={dataDetail.ad_title}
                name="addTitle"
                />
                {
                    !isValidData && formData.addTitle && <p style={{ color: 'red' }}>Invalid input! Only letters and numbers are allowed.</p>
                }
                {
                    !formData.addTitle && formError.addTitle && 
                    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>
                        {formError.addTitle}
                    </Grid>
                } */}
              {
                    !formData.addTitle && formError.addTitle && 
                    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>
                        {formError.addTitle}
                    </Grid>
                }
            </Grid>
            <Grid item sx={{ marginTop: "25px", marginLeft: "80px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Timer
              </Typography>
              <Select
                onChange={handleInputChange}
                value={formData.timer}
defaultValue={formData.timer}

                name="timer"
                sx={{
                  height: "50px",
                  width: "350px",
                  backgroundColor: "#f6f6f6",
                }}
              >
               <MenuItem value={formData.timer}><em>{formData.timer}</em> </MenuItem>

                <MenuItem value={"2"}> 2min</MenuItem>
                <MenuItem value={"1"}>1 min</MenuItem>
              </Select>

              {!formData.timer && formError.timer && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.timer}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ marginTop: "25px", marginLeft: "35px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Ad Id
              </Typography>
              <TextField
                onChange={handleInputChange}
                name="adid"
                value={formData.adid}
                sx={{
                  height: "57px",
                  width: "350px",
                  backgroundColor: "#f6f6f6",
                }}
              />

              {!isValidDataAdid && formData.adid && (
                <p style={{ color: "red" }}>
                  Invalid input! Only letters and numbers are allowed.
                </p>
              )}
              {!formData.adid && formError.adid && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.adid}
                </Grid>
              )}
              {/* {
                formData.adid && formError.adid && 
                    <Grid sx={{marginTop:'10px',marginLeft:'40px',color:'red'}}>
                        {formError.adid}
                    </Grid>
                } */}
            </Grid>
            <Grid item sx={{ marginTop: "40px", marginLeft: "80px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Description
              </Typography>
              <TextareaAutosize
                name="description"
                onChange={handleInputChange}
                value={formData.description}
               
                minRows={10}
                className="text-area-auto"
              />
              {!formData.description && formError.description && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.description}
                </Grid>
              )}
            </Grid>
            <Grid item sx={{ marginLeft: "35px", marginTop: "-80px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Position
              </Typography>
              <Select
                onChange={handleInputChange}
                name="position"
                value={formData.position}
                defaultValue={formData.position}
                sx={{
                  height: "50px",
                  width: "350px",
                  backgroundColor: "#f6f6f6",
                }}
              >
                               <MenuItem value={formData.position}><em>{formData.position}</em> </MenuItem>

                <MenuItem value={"bottom"}>Bottom</MenuItem>
                <MenuItem value={"top"}>Top</MenuItem>
              </Select>
              {!formData.position && formError.position && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.position}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ marginTop: "25px", marginLeft: "35px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Pages
              </Typography>

              <Select
                onChange={handleInputChange}
                name="pages"
                value={formData.pages}
                defaultValue={formData.pages}
                sx={{
                  height: "50px",
                  width: "350px",
                  backgroundColor: "#f6f6f6",
                }}
              >
                               <MenuItem value={formData.pages}><em>{formData.pages}</em> </MenuItem>

                <MenuItem value={"1"}>Login,Registration,Settings</MenuItem>
                <MenuItem value={"2"}>Login,Registration </MenuItem>
              </Select>
              {!formData.pages && formError.pages && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.pages}
                </Grid>
              )}
            </Grid>
            <Grid item sx={{ marginTop: "25px", marginLeft: "80px" }}>
              <Typography sx={{ color: "lightgray", marginLeft: "15px" }}>
                Link
              </Typography>
              <Select
                onChange={handleInputChange}
                name="link"
                value={formData.link}
                defaultValue={formData.pages}
                sx={{
                  height: "50px",
                  width: "350px",
                  backgroundColor: "#f6f6f6",
                }}
              >
                 <MenuItem value={formData.link}>{formData.link}</MenuItem>   
                <MenuItem value={"1"}>http:google.com</MenuItem>
                <MenuItem value={"2"}>http:petfood.com</MenuItem>
              </Select>
              {!formData.link && formError.link && (
                <Grid
                  sx={{ marginTop: "10px", marginLeft: "40px", color: "red" }}
                >
                  {formError.link}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Stack direction="row" className="stack-upload-detail">
            <Box>
              <Typography>Upload Images</Typography>
              <Typography sx={{ color: "grey" }}>
                ( max 720 width & 350 height & size less than 100mb){" "}
              </Typography>
            </Box>
            <input
              accept="image/*"
              id="image-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleAddImageUpload}
            />
            <label htmlFor="image-upload">
              <Button component="span" className="upload-btn-add-new-ad">
                Upload
              </Button>
            </label>
          </Stack>
          {selectedAddImage && (
            <Box className="box-dog-pic-upload">
              <CancelRoundedIcon
                onClick={handleClose}
                className="cancel-icon"
              />
              <img src={selectedAddImage} className="img-upload" />
            </Box>
          )}

          <Stack direction="row" className="stack-btn-cancel-add-product">
            <Button onClick={(e)=>setCancelButton(null)} className="cancel-add-pet-btn">Cancel</Button>
            <Button className="add-pet-btn" onClick={handleUpdateSubmit}>Update AD</Button>
          </Stack>
        </Card>
      </Card>
    </>
  );
}
