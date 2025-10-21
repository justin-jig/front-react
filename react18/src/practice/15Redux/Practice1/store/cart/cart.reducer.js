
import { CART_ACTION_TYPE } from './cart.action'


const initState = {
    cartList : [],
}

// 리듀서
const cartReducer = (state = initState, action) => {

    switch(action.type) {
        
        case CART_ACTION_TYPE.ADD :
            const { cartList } = action.payload;
            return {...state, cartList : [...cartList]};

        case CART_ACTION_TYPE.DELETE :
            const { cartList:deletea } = action.payload;
            return {...state, cartList : [...deletea]};

        default :
            return state;
    }
}

export default cartReducer