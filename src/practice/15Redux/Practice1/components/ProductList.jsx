

import { useState } from 'react';
import { CartUseHook, ProductUseHook } from '../store/store.useHook';

import './PracticeComponent.scss';

export default function ProductList () {
   
    const { productList } = ProductUseHook();
    const { CartDispatch } = CartUseHook();
    const { addCart_DP } = CartDispatch()

    const addCartList = (data) => {
        addCart_DP({addCartData: data})
    }


    return (
        <div className='product-wrap'>
            <h2>📃 구매 리스트</h2>
            <div className='product-list'>
                {productList && productList.map((data, idx) => {
                 
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