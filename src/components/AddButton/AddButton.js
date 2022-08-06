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

    console.log(myState[index].count);

    const decreaseValue=()=>{
        // count===0 && setaddItem(false);
        dispatch(removeFromCart(data.data));
      }
    
      const increaseValue=()=>{
        dispatch(addToCart(data.data));
    }

  return (
    <Form className='form'>
        <div className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
        <input type="number" id="number" value={myState[index].count} readOnly/>
        <div className="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
    </Form>
  )
}

export default AddButton