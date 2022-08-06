import React from 'react';
import { Confirmed, Success } from './OrderConfirmed.style';
import { Link } from "react-router-dom";

function OrderConfirmed() {
  return (
    <Success>
        <Link to="/" className='link'>
            <Confirmed>
                <div className='confirmationMessage'>Order  Confirmed</div>
            </Confirmed>
        </Link>
    </Success>
  )
}

export default OrderConfirmed