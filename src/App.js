import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import  Header from './Components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer';
import ProductModel from './Components/ProductModel';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart';

const MyContext=createContext();
function App() {
  


 const [countryList,setcountryList]=useState([]);
 const [selectedCountry,setselectedCountry]=useState('');
  //product zoom state
  const [isOpenProductModel,setisOpenProductModel]=useState(false);

 useEffect(()=>{
  getCountry('https://countriesnow.space/api/v0.1/countries/');
 },[]);
 const getCountry= async(URL)=>{
  const responsive=await axios.get(URL).then((res)=>{
    setcountryList(res.data.data);
  })
 }
 const values={
  countryList,
  setselectedCountry,
  selectedCountry,
  isOpenProductModel,
  setisOpenProductModel
 }
  return (
          <>
         <BrowserRouter>
         <MyContext.Provider value={values}>
         <Header  />  
           <Routes>
            <Route path="/" exact={true} element={<Home   />}/>
            <Route path="/cat/:id" exact={true} element={<Listing/>}/>
            <Route  path="/product/:id" exact={true} element={<ProductDetails/>}/>
            <Route  path="/cart" exact={true} element={<Cart/>}/>
           </Routes>
        <Footer/>
          {
                isOpenProductModel===true && <ProductModel />
          }
           </MyContext.Provider>
         </BrowserRouter>
          </>  
  );
}

export default App;

export {MyContext};