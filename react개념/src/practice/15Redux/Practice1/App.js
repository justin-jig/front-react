

import Cart from './components/Cart';
import ProductList from './components/ProductList';



export default function App () {


    return (
        <div className="wrap">
            <h2>Redux 버전</h2>
            <Cart/>
            <ProductList/>
        </div>
    )
}