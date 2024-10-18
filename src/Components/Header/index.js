import logo from '../../assets/images/logo2.png';
import { Link } from "react-router-dom";
import CountryDropdown from '../countryDropdown/index.js'

import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import SearchBox from './SearchBox/index.js';
import Navigation from '../Navigation/index.js';
import { useContext } from 'react';
import { MyContext } from '../../App.js';






const Header=()=>{
    const context=useContext(MyContext);

   return (
    <>
        <div className="headerwrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mt-0 mb-0 text-center  " > Due some <b >Technical Reasons</b> Order may be proccessed with a slight delay</p>
                </div>
            </div>
        
   <header className="header">
        <div className="container">
              <div className='row'>
                   <div className="logoWrapper d-flex align-items-center col-sm-2">
                          <Link to={'/'}><img src={logo} alt="logo"/></Link>
                   </div>
                   <div className='col-sm-10 d-flex align-items-center part2'>
                      {
                        context.countryList.length !==0 &&  <CountryDropdown />
                      }  
                       
                          {/* header search here*/}
                          <SearchBox/>
                          {/* header search ends here*/}
                    <div className='part3 d-flex align-items-center ml-auto'>
                         <Button className='user' > < FaRegUser/></Button>
                    <div className='ms-2 me-2 cartTab d-flex align-items-center'>
                                    <span className='price'>$69.99</span>
                                    <div className='position-relative ml-2'>
                                    <Button className='user ms-3' > < GiShoppingCart/></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                               </div>
                   </div>
                   

                                   </div>
                              </div>
        </header>

        <Navigation />
    </div>
    
    </>
   )
}
export default Header;