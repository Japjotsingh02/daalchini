import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions';
import { Form } from './AddButton.style';

const AddButton=(data)=> {
    // console.log(data);
    const myState = useSelector((state)=> state.root.reducer1.cart);
    const dispatch = useDispatch();

    const index = myState.findIndex(state => {
      return state.id === data.data.id;
    });

    const decreaseValue=()=>{
        dispatch(removeFromCart(data.data));
    }
    
    const increaseValue=()=>{
      dispatch(addToCart(data.data));
    }

  return (
    <Form className='form'>
        <div className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
        <input type="number" id="number" value={myState.length>0 ? myState[index].count : 0} readOnly/>
        <div className="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
    </Form>
  )
}

export default AddButton