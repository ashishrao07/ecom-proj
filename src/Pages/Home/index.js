import HomeBanner from "../../Components/HeaderBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import Rating from '@mui/material/Rating';

import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import banner2 from "../../assets/images/banner2.PNG";
import banner3 from "../../assets/images/banner3.PNG";
import banner4 from "../../assets/images/banner4.PNG";
import newsLetterImg from "../../assets/images/coupon.webp";
import { CiMail } from "react-icons/ci";
import Footer from "../../Components/Footer";

const Home=()=>{
    
    return (
     <>
      <HomeBanner/>
      <HomeCat/>
      <section className="homeProducts">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <div className="sticky">
                  <div className="banner">
                        <img src="https://fullstack-ecommerce.netlify.app/static/media/banner1.957b2952d2e9b8c1f445.jpg" className='cursor w-100'/>
                    </div>
                 <div className="banner mt-4">
                    <img src={banner2} className="cursor w-100"/>
                    </div>  
                </div> 
                    
                </div>
                <div className="col-md-9 productRow ">
                    <div className="d-flex align-items-center">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className="text-light text-sml mb-0">Do not miss the current offers untill the end of March</p>
                           
                        </div>
                        <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward/></Button>
                    </div>
                    <div className="product_row w-100 mt-4">
                    <Swiper
                             slidesPerView={4}
                            spaceBetween={0}                    
                            Navigation={true}
                            slidesPerGroup={3}
                          modules={[Navigation]}
                                 className="mySwiper"
                    >
                     <SwiperSlide>  
                     <ProductItem/>
                      
                     </SwiperSlide>
                     <SwiperSlide>  

                     <ProductItem/>
                     </SwiperSlide>
                     <SwiperSlide>  
                     <ProductItem/>
                     </SwiperSlide>

                     <SwiperSlide>  
                     <ProductItem/>
                     </SwiperSlide>       
                 </Swiper>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                            <p className="text-light text-sml mb-0">New Products with updated stocks</p>
                           
                        </div>
                        <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward/></Button>
                    </div>
                    <div className="product_row productRow2 d-flex w-100 mt-4">
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                     <ProductItem/>
                   
                    </div>
                         <div className="d-flex mt-4 mb-4  bannerSection">
                            <div className="banner">
                              <img src={banner3} className="cursor w-100"/>
                             </div>
                             <div className="banner">
                              <img src={banner4} className="cursor w-100"/>
                             </div>
                         </div>
                    
                </div>
                
            </div>
        </div>
        </section>

        <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <p className="text-white"> $20 discount on your first order</p>
                       <h2 className="text-white">Join our newsLetter and get...</h2>
                       <p className="text-light">Join our Email subscription now to get updates<br/> on promotions and coupons</p>
                   
                     <form>
                        <CiMail/>
                        <input type="text"placeholder="Your Email Address" />
                        <Button>Subscribe</Button>
                     </form>
                   
                    </div>
                    <div className="col-md-6">
                        <img src={newsLetterImg}/>
                        </div>
                </div>
            </div>
        </section>
       
     </>
    )
 }
 export default Home;