
import './PracticeComponent.scss';
import refrigerator from './image/냉장고.png';
import cleaner from './image/청소기.png';
import washing  from './image/세탁기.png';
import { useState, useContext, useEffect } from 'react';
import { practiceContext } from '../practice.context'

export default function Cart () {

    const [cartOnOFF, setCartOnOFF] = useState(false);
    const {cartList, deleteCartList} = useContext(practiceContext);
    const [cartPrice, setCartPrice] = useState(0);

    useEffect(() => {

        function priceAll() {
            let price = 0;
            cartList.forEach((value) => {
                price +=  value.price;
            })
            setCartPrice(price);
        }
        priceAll();

    },[cartList])

    return (
        <div className='cart-wrap'>

            {   cartOnOFF ?
                <h5 onClick={() => setCartOnOFF((prev) => !prev )}>🛒 카트 리스트 🔼 </h5>
                :
                <h5 onClick={() => setCartOnOFF((prev) => !prev )}>🛒 카트 리스트 🔽</h5>
            }
        
            <div className={ cartOnOFF ? 'cart-list displayblock' :'cart-list displaynone'}>

                <p className='pice'>총액 : {cartPrice.toLocaleString()} </p>
                {cartList.length === 0 ? 
                    <div className='datanone'>장바구니 내역 없음</div>
                    :

                    cartList.map((data) => {
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
            <span>{data.price.toLocaleString()}</span>
            <div>
                    <button onClick={() =>  deleteCartList(data)}>삭제하기</button>
            </div>
        </div>
    )
}