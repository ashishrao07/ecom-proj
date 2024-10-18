import Slider from 'react-slick';

import InnerImageZoom from 'react-inner-image-zoom'; 
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { useState } from 'react';
import {  useRef } from 'react';

const ProductZoom=()=>{
    const [slideIndex,setSlideIndex]=useState(0);
    const zoomSliderBig=useRef();
    const zoomSlider=useRef();
    const goto=(index)=>{
        setSlideIndex(index);
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
    var settings={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        fade:false,
        arrows:true,
    };
    var settings2={
        dots:false,
        infinite:false,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        fade:false,
        arrows:false,

    }
  
    return(
        <div className='productZoom'>
              <div className='productZoom position-relative'>
                    <div className='badge bg-primary'>69%</div>
                    <Slider {...settings2}className="zoomSliderBig" ref={zoomSliderBig}>
                            
                                        <div className="item">
                                                <InnerImageZoom
                                                     zoomType="hover" zoomScale={1}
                                                     src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg`}/>
                                        </div>
                                        <div className="item">
                                                <InnerImageZoom
                                                     zoomType="hover" zoomScale={1}
                                                     src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg`}/>
                                        </div>
                                        <div className="item">
                                                <InnerImageZoom
                                                     zoomType="hover" zoomScale={1}
                                                     src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg`}/>
                                        </div>
                                        





                    </Slider>
                </div>
                <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                    
                     
                    
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg`} className='w-100' onClick={()=>goto(0)}/>
                            </div>
                            <div className='item'>
                                     <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg`} className='w-100' onClick={()=>goto(1)}/>
                            </div>
                             <div className='item'>
                                     <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg`} className='w-100' onClick={()=>goto(2)}/>
                            </div>

                        
                        
                     
                    
                </Slider>
        </div>
    )
}
export default ProductZoom;