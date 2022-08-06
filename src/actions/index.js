export const addToCart = (data) =>{
    return {
        type:"ADD_TO_CART",
        item:{
            id:data.id,
            name:data.name,
            desc:data.desc,
            price:data.price,
            prevPrice:data.prevPrice,
            count:1,
        },
    }
};

export const removeFromCart = (data) =>{
    return {
        type:"REMOVE_FROM_CART",
        id:data.id,
    }
}