import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';

export default function HookReduxIndex () {


    return (
            <>
                <Provider store={store}>
                    <App/>
                </Provider>
            </>
    )
}