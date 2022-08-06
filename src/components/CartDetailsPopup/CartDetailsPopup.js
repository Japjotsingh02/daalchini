import React from 'react';
import { useSelector } from 'react-redux';
import { getCartTotal } from '../../reducers/reducer1';
import AddButton from '../AddButton/AddButton';
import { Cart, Cell, Row, Table } from './CartDetailsPopup.style';

const CartDetailsPopup=()=> {
  const myState = useSelector((state)=> state.root.reducer1.cart);
  const ItemHeader = ["items","Qty","Amount"];
  const total = getCartTotal(myState);

  return (
    <Cart className='cart'>
        <div className='details border'>Cart Details</div>
        <Table>
                <Row>
                    <Cell className='big'>Items</Cell>
                    <Cell className='small'>Qty</Cell>
                    <Cell className='lastCell small'>Amount</Cell>
                </Row>
            {myState.map((props)=>
                <Row key={props.id} className="border">
                    <Cell className='big'>{props.name}</Cell>
                    <Cell className='small'>
                        <AddButton data={props}/>
                    </Cell>
                    <Cell className='lastCell small'>Rs. {props.price}</Cell>
                </Row>
            )}
            <Row>
                <Cell className='big'>Total</Cell>
                <Cell className='lastCell big'>{total}</Cell>
            </Row>
        </Table>
    </Cart>
  )
}

export default CartDetailsPopup