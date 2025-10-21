
import { practiceContext, PracticeProvider } from './practice.context'
import { useContext } from 'react';

import Cart from './components/Cart';
import ProductList from './components/ProductList';


import './Practice2.scss'
export default function Practice2 () {

    return (
        <PracticeProvider>
            <div>
                <Cart/>
                <ProductList/>
            </div>
        </PracticeProvider>
    )
}