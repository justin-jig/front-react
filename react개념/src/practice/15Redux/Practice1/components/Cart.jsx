
import './PracticeComponent.scss';
import { useState, useEffect } from 'react';
import { CartUseHook } from '../store/store.useHook';

export default function Cart () {

    const [cartOnOFF, setCartOnOFF] = useState(false);
    const [cartPrice, setCartPrice] = useState(0);

    const {cartList,  CartDispatch } = CartUseHook();
    const { deleteCart_DP } = CartDispatch()


    useEffect(() => {

        function priceAll() {
            let price = 0;
            cartList && cartList.forEach((value) => {
                price +=  value.price;
            })
            setCartPrice(price);
        }
        priceAll();

    },[cartList])

    const deleteCartList = (data) => {

        deleteCart_DP({id : data.id})
    }


    return (
        <div className='cart-wrap'>

            {   cartOnOFF ?
                <h5 onClick={() => setCartOnOFF((prev) => !prev )}>🛒 카트 리스트 🔼 </h5>
                :
                <h5 onClick={() => setCartOnOFF((prev) => !prev )}>🛒 카트 리스트 🔽</h5>
            }
        
            <div className={ cartOnOFF ? 'cart-list displayblock' :'cart-list displaynone'}>

                <p className='pice'>총액 : {cartPrice.toLocaleString()} </p>
                {cartList && cartList.length === 0 ? 
                    <div className='datanone'>장바구니 내역 없음</div>
                    :

                    cartList && cartList.map((data) => {
                        return (
                            <CartItem key={data.id} data={data} deleteCartList={deleteCartList}/>
                        )
                    })
                }
                
            </div>

        </div>
    )
}

function CartItem ({data, deleteCartList}) {

    return (
        <div className='cart-item' key={data.id}>
            <img src={data.imageUrl}/>
            <span>{data.name}</span><br/>
            <span>수량 : {data.count ?  data.count : 0}</span><br/>
            <span>{data.price.toLocaleString()}</span>
            <div>
                    <button onClick={() =>  deleteCartList(data)}>삭제하기</button>
            </div>
        </div>
    )
}