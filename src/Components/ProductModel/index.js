import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';

// import { Speed } from '@mui/icons-material';
// import { Fade } from '@mui/material';

import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import {useContext} from 'react'
import ProductZoom from '../ProductZoom';
import { MyContext } from '../../App';
//import Slider from 'react-slick';

//import InnerImageZoom from 'react-inner-image-zoom'; 
//import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductModel=(props)=>{
   const context =useContext(MyContext);
   
   
    return (
        <>
         <Dialog  open={true} className='productModel' onClose={()=>context.setisOpenProductModel(false)} >
        
        <Button className='close_' onClick={()=>context.setisOpenProductModel(false)}><MdClose/></Button>

          <h4 class="mb-1 font-weight-bold"><b>All Natural Italian-Style Chicken Meatballs</b></h4>
           <div className='d-flex align-items-center'>
            <div className='d-flex-align-items-center me-3'>
                <span>Brand :</span>
                <span className='ms-2'><b>Welch's</b></span>
                </div>
                <Rating name="read-only" value={5} size='small' precision={0.5} readOnly /> 
                  
          </div>    
          <hr/>
          <div className='row mt-2 productDetailsModel'>
             <div className='col-md-5'>
                      <ProductZoom/>
             </div>

        
             <div className='col-md-7'>
                  <div className='d-flex info align-items-center mb-3'>
                    <span className='oldPrice lg me-2'>$20.00</span>
                    <span className='netPrice text-danger lg'><b>$6.20</b></span>
                  </div>
                  <span className='badge bg-success'>IN STOCK</span>
                  <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                   <div className='d-flex align-items-center'>
                      <QuantityBox/>
                      <Button className='btn-blue btn-lg btn-round btn-big ms-4'>Add to Cart</Button>
                   </div>


                <div className='d-flex align-items-center mt-5 actions'>
            
                <Button className='btn-round btn-sml ms-2' variant="outlined"><IoIosHeartEmpty/> &nbsp;  ADD TO WISHLIST</Button>
                <Button className='btn-round btn-sml' variant="outlined">< MdCompareArrows  /> &nbsp;  COMPARE</Button>
                </div>

              </div>
          </div> 

    </Dialog>
        </>
    )
    
}
export default ProductModel;



         