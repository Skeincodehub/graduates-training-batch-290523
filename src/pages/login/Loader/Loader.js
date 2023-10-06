import './Loader.css'
import PetsIcon from '@mui/icons-material/Pets';

export function Loader(){
    
    return(

        <div class="wrapper">
<PetsIcon className="image"/>
     {/* <img src={img} className="image" alt=''/> */}
  <div class="circle">
  </div>
  <div class="circle1"></div>
</div>
    );
}