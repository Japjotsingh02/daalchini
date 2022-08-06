import React, { useState } from 'react';
import { product } from '../../demoData.js';
import Product from '../Product/Product.js';
import {useSelector} from 'react-redux';
import { Foooter, PopUpBackground } from './Home.style.js';
import { countTotal, getCartTotal } from '../../reducers/reducer1.js';
// import ArrowForward from "../../images/arrow-forward.svg";
// import ExpandLess from "../../images/expand-less.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CartDetailsPopup from '../CartDetailsPopup/CartDetailsPopup.js';
import LoginPopup from '../LoginPopup/LoginPopup.js';

const Home=()=> {
  const myState = useSelector((state)=> state.root.reducer1.cart);
  const totalCount = countTotal(myState);
  const total =getCartTotal(myState);
  const [openCartPopup, setOpenCartPopup] = useState(false);
  const [openLoginPopup, setopenLoginPopup] = useState(false)

  return (
    <>
      {product.map((data)=>
        <Product key={data.id} props={data}></Product>
      )}
      {
        myState.length>0 && !openLoginPopup && 
        <>
        {openCartPopup &&
        <>
          <PopUpBackground/>
          <CartDetailsPopup/>
        </>
        }
        <Foooter>
          <div className='totalColumn'>
            <div className='total'>
            <div>{totalCount} item(s)</div>
              <div>Total Rs. {total}</div>
            </div>
            {/* <button className='bexpandButton'}> */}
              <ExpandLessIcon className='expand-less' onClick={() => setOpenCartPopup(!openCartPopup)}/>
            {/* </button> */}
            {/* <img src={ExpandLess} alt="expand-less"></img> */}
          </div>
          <span className='continue'>Continue</span>
          <ArrowForwardIcon className="arrow-forward" onClick={() => setopenLoginPopup(!openLoginPopup)}/>
          {/* <img src={ArrowForward} alt="arrow-forward"></img> */}
        </Foooter>
        </>
      }
      {
        openLoginPopup &&
        <>
          <PopUpBackground/>
          <LoginPopup/>
        </>
      }
    </>
  )
}

export default Home;