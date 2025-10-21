

import { useState } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';

import App from './App';

export default function ReduxTookitIndex () {


    return (
        <>
        <Provider store={store}>
            <App/>
        </Provider>
        </>
    )
}