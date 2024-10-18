import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'
import { useState } from 'react';
import happyhour from '../../assets/images/happyhour.jpg'
import { Link } from 'react-router-dom';   


const Sidebar=()=>{
    const [value,setValue]=useState([100,6000]);
    const [value2,setValue2]=useState(0);
    return(
       <>
           <div className='sidebar'>
              
                <div className='filterBox '>
                    <h6>PRODUCT CATEGORIES</h6>

                     <div className='scroll'>
                          <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Men" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Women" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Beauty" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Watches" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Gifts" />

                            </li>
                          </ul>
                     </div>
                </div>

                <div className='filterBox '>

                    <h6>FILTER BY PRICE</h6>

                     <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>

                     <div className='d-flex pt-2 pb-2 priceRange'>
                        <span> min: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                        <span className='ms-auto'> max: <strong className='text-dark'>Rs: {value[1]}</strong></span>
                     </div>


                    
                </div>
                <div className='filterBox '>
                    <h6>PRODUCT STATUS</h6>

                     <div className='scroll'>
                          <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="In-Stock" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="On Sale" />

                            </li>
                            
                          </ul>
                     </div>
                </div>

                <div className='filterBox '>
                    <h6>BRANDS</h6>

                     <div className='scroll'>
                          <ul>
                          <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="STARBUCKS" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="US-POLO" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="AMUL" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="BUDWISER" />

                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="COCO-COLA" />

                            </li>
                            
                          </ul>
                     </div>
                </div>
                
                <Link to="#"><img src={happyhour} className='w-100'/></Link>
             </div>
       </>
    )
}
export default Sidebar;
