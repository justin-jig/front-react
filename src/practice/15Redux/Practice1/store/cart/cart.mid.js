

import { CART_ACTION_TYPE_MID, cartAction } from './cart.action';

const cartMiddleware =  
    ({ dispatch, getState }) =>
    (nextRunner) =>
    async (action) =>{

    nextRunner(action);
    const { addCart_AC, deleteCart_AC } = cartAction();
    const { type } = action;

    if (type=== CART_ACTION_TYPE_MID.ADD_MID) {

        const {addCartData, cartList} = action.payload;

        // for (const cartItem of cartList) {
        //     if (cartItem.id === addCartData.id) {
        //         return dispatch({type:''});
        //     } 
        // }
        const copyList = [...cartList];
        copyList.push(addCartData);
        dispatch( addCart_AC({cartList:copyList}));
    }

    if (type === CART_ACTION_TYPE_MID.DELETE_MID) {

        const {id, cartList} = action.payload;
        const copyList = cartList.filter((x) => x.id !== id );
        dispatch(deleteCart_AC({cartList:copyList}));
    }

}

export default cartMiddleware