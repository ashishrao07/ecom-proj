import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModel from '../ProductModel';
import { useState,useContext } from 'react';
import { MyContext } from '../../App';

const ProductItem=(props)=>{
   const context=useContext(MyContext);
    const viewProductDetails=(id)=>{
        context.setisOpenProductModel(true);
    }

    const closeProductModel=()=>{
        context.setisOpenProductModel(false);
    }

    return(
      <>  
        <div className={`productItem ${props.itemView}`}>
        <div className="imageWrapper">
        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100"/>
        <span class="badge bg-primary">69%</span>
        <div className="actions">
           <Button onClick={()=>viewProductDetails(1)}><SlSizeFullscreen/></Button>
           <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
        </div>

       </div>
      <div className="info">
      <h4>All Natural Italian-Style Chicken Meatballs</h4>
       <span className="text-success d-block">In Stock</span>
       <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly precision={0.5} size="small"/>
       <div className="d-flex">
           <span className="oldPrice ">$20.00</span>
           <span className="newPrice text-danger ms-2"> $6.20</span>

       </div>
      </div>
   
 </div>
     
 </>
    )
}
export default ProductItem;