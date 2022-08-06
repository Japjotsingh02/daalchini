export const InitialState = {
    cart:[],
}

export const getCartTotal=(cart) =>cart.reduce((amount,item)=> {
    return (item.price)*item.count + amount
} ,0);

export const countTotal = (cart) =>cart.reduce((count,item)=>{
    return count + item.count;
},0);

const reducer1 = (state=InitialState,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            let newCartForCount= [...state.cart];
            const FindIndex = ()=>{
                const index = state.cart.findIndex(item => {
                    return item.id === action.item.id;
                });
                return index;
            };
            const itemIndex=FindIndex();

            if(itemIndex!==-1){
                const updatedItem = { ...newCartForCount[itemIndex] };
                updatedItem.count++;
                newCartForCount[itemIndex] = updatedItem;
                return{
                    ...state,
                    cart:newCartForCount,
                }
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart ,action.item],
                };
            }


        case "REMOVE_FROM_CART":
            let newCart= [...state.cart];
            const index = state.cart.findIndex(item => {
                return item.id === action.id;
            });
            // console.log(index);
            
            const updatedItem = { ...newCart[index] };
            if(updatedItem.count>1){
                updatedItem.count--;
                newCart[index] = updatedItem;
            }
            else{
                index>=0 ? newCart.splice(index,1) : console.warn("NA PATA");
            }
            return{
                ...state,
                cart:newCart,
            }
        default:
            return state;
    }
}

export default reducer1;