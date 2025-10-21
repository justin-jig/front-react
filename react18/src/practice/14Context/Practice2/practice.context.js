import { createContext, useState } from "react";


export const practiceContext = createContext({

    cartList : [],
    addCartList : () => {},
    deleteCartList : () => {},
})


export function PracticeProvider (props) {

    const [cartList, setCartList] = useState([]);

    const addCartList = (data) => {

        const copyList = [...cartList];
        copyList.push(data);
        setCartList(copyList);

    }

    const deleteCartList = (data) => {

        const copyList = cartList.filter((x) => x.id != data.id );
        console.log('copyList', copyList)
        setCartList(copyList);
    }

    return (
        <practiceContext.Provider value={{
            cartList :cartList,
            addCartList: addCartList,
            deleteCartList: deleteCartList
        }}>

            {props.children}
        </practiceContext.Provider>
    )
}
