import React from 'react';
/** css import */
import styles from "./App.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
/** module import */
import { BrowserRouter } from 'react-router-dom';

/** Containers Router import */
import Router from './pages/Router'



function App() {
   
    return (        
            <div id="wrap">
                    <BrowserRouter> 
                        <Router />
                    </BrowserRouter>
            </div>
    );
    
}

export default App;