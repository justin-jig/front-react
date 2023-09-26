import { memo, useState, useCallback, useEffect } from 'react';

/**
 * • Redering 최적화에 사용되는 Hook API 
 * • 다시 redering 될 때 함수를 다시 불러오는 것을 막는다.
 */
const UseCallbackSample = () => {
    
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    
    // useCallback 미 사용
    const plusCount = () => {
        console.log('test', count);
        setCount(() => count +1)

    }
    // useCallback 사용
    const plusConutCallback = useCallback(()=> {
        console.log('test', count);
        setCount(() => count +1)
    },[])

    const inputValueOnCange = useCallback((value)=> {
        setInputValue(value)
    },[])


    return (
        <>   
            <input value={inputValue} onChange={(e) => inputValueOnCange(e.target.value)}/>   
            <ChildComponet count={count} onClick={plusCount} callbackFuc={plusConutCallback}/>
            <p>{count}</p>
        </>
    )
}

export default UseCallbackSample


const ChildComponet = memo(({onClick, callbackFuc}) => {
    console.log('자식 컴포넌트 호출')
    return<>
        <button onClick={() => onClick() }>PLUS</button>
        <button onClick={() => callbackFuc() }>useCallback PLUS</button>
    </>
})



// const ChildComponet = ({callbackFuc}) => {
//     console.log('자식 컴포넌트 호출')
//     return<>
//         {/* <button onClick={() => { onClick()}}>PLUS</button> */}
//         <button onClick={() => callbackFuc()}>useCallback PLUS</button>
//     </>
// }
