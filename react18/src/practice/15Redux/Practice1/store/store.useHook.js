import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/** action */
import { cartAction, cartAction_Mid }  from './cart/cart.action';


export function CartUseHook () {

    /** dispatch */
    const dispatch = useDispatch();
    const { addCart_ACMid, deleteCart_ACMid } = cartAction_Mid();

    /** store state */
    const { cartList } = useSelector (state => state.cart);

    
    /** dispatch function difine */
    const CartDispatch = useCallback(() => {

        const addCart_DP = (data) => {
            dispatch(addCart_ACMid({...data, cartList: cartList}));
        }

        const deleteCart_DP = (data) => {
            dispatch(deleteCart_ACMid({id:data, cartList: cartList}));
        }

        return {
            addCart_DP,
            deleteCart_DP
        }

    }, []) 

    return {
        cartList,
        CartDispatch,
    }
}


export function ProductUseHook () {

    /** dispatch */
    const dispatch = useDispatch();


    /** store state */
    const { productList } = useSelector(state => state.product );
     
    return {
        productList

    }
}