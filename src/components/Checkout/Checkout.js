import React from 'react';
import CartDetailsPopup from '../CartDetailsPopup/CartDetailsPopup.js';
import { Foooter } from '../Home/Home.style.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CheckoutTable } from './Checkout.style.js';
import { Link } from "react-router-dom";

const Checkout=()=> {
  return (
    <CheckoutTable>
        <div className='checkout-head'>Checkout</div>

        <div className='head border'>Pick up</div>
        <div className='test'>Test</div>
        <div className='location'>Daalchini Office Noida Uttar Pradesh</div>
        <div className='location'>Order expires within 30 mins</div>

        <CartDetailsPopup/>

        <Foooter>
            <div className='select continue'>Select Payment</div>
            <Link to="/confirmed" className='link'>
                <ArrowForwardIcon className="arrow-forward"/>
            </Link>
        </Foooter>

    </CheckoutTable>
  )
}

export default Checkout