import React, { useEffect, useState } from 'react';
import { ProductItem } from './Product.style';
import {useSelector,useDispatch} from 'react-redux';
import { addToCart } from '../../actions';
import AddButton from '../AddButton/AddButton';

const Product=(props)=> {
  const myState = useSelector((state)=> state.root.reducer1.cart);
  const dispatch = useDispatch();
  // console.log(myState);

  const [addItem, setaddItem] = useState(false);

  const activeAddItem = () => {
    setaddItem(true);
    // setItemCount(1);
    dispatch(addToCart(props.props));
  };

  useEffect(() => {
    myState.length===0 && setaddItem(false);
  }, [myState]);

//   console.log(props);  
  return (
    <ProductItem>
        <img src={props.props.img} className="productImage" alt="dish"/>
        <div className='productInfo'>
            <div className='name'>{props.props.name}</div>
            <div className='description'>{props.props.desc}</div>
            <div className='flex'>
                <div className='priceRow'>
                    <span className='price'>&#8377;{props.props.price}</span>
                    <span className='prevPrice'><s>&#8377;{props.props.prevPrice}</s></span>
                </div>
                <div className='itemInput'>
                    {!addItem && <button className='addButton' onClick={activeAddItem}>Add</button>}
                    {addItem &&
                      <AddButton data={props.props}/>
                    }
                </div>
            </div>
        </div>
    </ProductItem>
  )
}

export default Product