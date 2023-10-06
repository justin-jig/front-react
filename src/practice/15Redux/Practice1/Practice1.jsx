

import { useState } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';

import App from './App';
import './Practice1.scss'

export default function hookRedux () {


    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}