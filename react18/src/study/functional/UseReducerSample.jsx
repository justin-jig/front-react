
import { useReducer, useState } from "react"


// 초기 값
const initialState = {count : 0};

// reducer 함수 (상태, 액션)을 받아 새로운 상태를 반환하는 함수
// reducer(state, action) 액션에는 type이 존재
function reducer (state, action) {
    switch (action.type) {
        case "INCREMENT" :
            return {count : state.count +1 }
        case "DECREMENT" :
            return {count : state.count -1 }  
        default : 
            throw new Error('error');  
    }
}


/** 
 * useReducer : 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
 */

const UseReducerSample = () => {

    // reducer : state를 업뎅이트하는 함수
    // initialState  : 초기 값
    // state : 현재 상태
    // dispatch : action을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button>
        </div>
    ) 
}

export default UseReducerSample