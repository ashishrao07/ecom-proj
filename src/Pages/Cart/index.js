import banner1 from '../../assets/images/product1.jpg'
import Rating from '@mui/material/Rating';
import {Link} from 'react-router-dom';
import QuantityBox from '../../Components/QuantityBox';
import {IoIosClose} from 'react-icons/io'

const Cart=()=>{
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8'>
                        <h3 className="hd mb-0">Your Cart</h3>
                    <p>There are <b>3</b> products in cart</p>

                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th width="35%">Product</th>
                                <th width="15%">Unit Price</th>
                                <th width="25%">Quantity</th>
                                <th width="15%">Subtotal</th>
                                <th width="10%">Remove</th>
                            </tr>
                            </thead>

                        
                        <tbody>
                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className='d-flex align-items-center cartItemimgWrapper'>
                                            <div className='imgWrapper'>
                                            <img src={banner1} className='w-100'/>
                                            </div>

                                            <div className='info px-3'>
                                                <h6>All Natural Italian-Style Chicken Meatballs</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="10%">$6.99</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="15%">$6.99</td>

                                    <td width="10%"> <span className='remove'><IoIosClose/></span></td>
                                    
                                </tr>
                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className='d-flex align-items-center cartItemimgWrapper'>
                                            <div className='imgWrapper'>
                                            <img src={banner1} className='w-100'/>
                                            </div>

                                            <div className='info px-3'>
                                                <h6>All Natural Italian-Style Chicken Meatballs</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="10%">$6.99</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="15%">$6.99</td>

                                    <td width="10%"> <span className='remove'><IoIosClose/></span></td>
                                    
                                </tr>
                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className='d-flex align-items-center cartItemimgWrapper'>
                                            <div className='imgWrapper'>
                                            <img src={banner1} className='w-100'/>
                                            </div>

                                            <div className='info px-3'>
                                                <h6>All Natural Italian-Style Chicken Meatballs</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="10%">$6.99</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="15%">$6.99</td>

                                    <td width="10%"> <span className='remove'><IoIosClose/></span></td>
                                    
                                </tr>
                            </tbody>
                            </table>
                    </div>
                        </div>
                        <div className='col-md-4'>
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Cart;