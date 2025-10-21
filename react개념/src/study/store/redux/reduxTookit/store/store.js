import { configureStore } from '@reduxjs/toolkit';

/** reducer import */
import couterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer :  { 
        count : couterReducer,
        auth : authReducer
    }
})

export default store