
import './PracticeComponent.scss';
import { useContext, useEffect, useState } from 'react';
import { practiceContext } from '../practice.context'
import { product } from './fakeData'


export default function ProductList () {


    const {cartList, addCartList } = useContext(practiceContext);
    const [productList, setProductList] = useState(product);


    return (
        <div className='product-wrap'>
            <h2>📃 구매 리스트</h2>
            <div className='product-list'>
                {productList.map((data, idx) => {
                 
                        return (
                            data && data.check === false ? 
                            <div className='product-item' key={data.id}>
                                <img src={data.imageUrl} />
                                <span>{data.name}</span>
                                <span>{data.price.toLocaleString()} 원</span>
                                <button onClick={() => addCartList(data) }>구매하기</button>
                            </div>
                            :
                            <></>
                        )
                   
                })}
            </div>
        </div>
    )
}