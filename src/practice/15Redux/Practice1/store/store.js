import { createStore, combineReducers, applyMiddleware } from 'redux';

/** import reducer */
import cart from './cart/cart.reducer';
import product from './product/product.reducer';
/** import middlewrare */
import cartMiddleware from './cart/cart.mid'

const store = createStore(combineReducers({
            cart,
            product
        }), applyMiddleware(
                cartMiddleware
            )
        );


export default store