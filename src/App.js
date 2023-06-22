
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { AddOrderslanding } from './pages/login/AddOrderslanding';
import { Addetail } from './pages/login/Ads/Addetail';
import { AddNewAd } from './pages/login/Ads/AddNewAd';
import { Adds } from './pages/login/Ads/Adds';
import { Chat } from './pages/login/Chats/Chat';
import { ChatDetail } from './pages/login/Chats/ChatDetail';
import { Dashboard } from './pages/login/Dashboard/Dashboard';
import { Feedback } from './pages/login/Feedback/Feedback';
import { Home } from './pages/login/Home';

import { Login } from './pages/login/Login';
import { Orders } from './pages/login/Orders';
import { OrdersFoodandAccessories } from './pages/login/OrdersFoodandAccessories';
import { Orderslanding } from './pages/login/Orderslanding';
import { AddProduct } from './pages/login/Petfood/AddProduct';
import { ProductDetails } from './pages/login/Petfood/ProductDetails';
import { PetFoodLanding } from './pages/login/PetFoodLanding';
import { Posts } from './pages/login/Posts';
import { AddPet } from './pages/login/Posts/AddPet';
import { Postdeatils } from './pages/login/Posts/Postdeatils';
import { Profile } from './pages/login/Profile/Profile';
import { AddUser } from './pages/login/Users/AddUser';
import { UserDetails } from './pages/login/Users/UserDetails';
import { UserLanding } from './pages/login/Users/UserLanding';
function App() {

  return (
    
    <div>
   <BrowserRouter>
      <Link to={'/'}/>
      <Routes>
        
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/orders-home' element={<Orderslanding/>}></Route>
    <Route path='/orders' element={<Orders/>}></Route>
    <Route path='/posts' element={<Posts/>}></Route>
    <Route path='/adds' element={<Adds/>}></Route>
    <Route path='/users' element={<UserLanding/>}></Route>
    <Route path='/feedback' element={<Feedback/>}></Route>
    <Route path='/chats' element={<Chat/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>


    <Route path='/orders-food&Accessories' element={<OrdersFoodandAccessories/>}></Route>
    <Route path='/post-deatils' element={<Postdeatils/>}></Route>
    <Route path='/add-pet' element={<AddPet/>}></Route>
    <Route path='/pet-place-order' element={<AddOrderslanding/>}></Route>
    <Route path='/pet-food-accessories' element={<PetFoodLanding/>}></Route>
    <Route path='/product-details' element={<ProductDetails/>}></Route>
    <Route path='/add-new-product' element={<AddProduct/>}></Route>
    <Route path='/user-details' element={<UserDetails/>}></Route>
    <Route path='/add-user' element={<AddUser/>}></Route>
    <Route path='/ad-details' element={<Addetail/>} ></Route>
    <Route path='/add-new-ad' element={<AddNewAd/>} ></Route>
    <Route path='/chat-detail' element={<ChatDetail/>} ></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
