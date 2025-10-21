import { useState, useMemo, memo } from "react";

const SiblingComponet = memo((calc) => {
    console.log('test');
    return<></>
})

// const SiblingComponet = () => {
//     console.log('test');
//     return<></>
// }

const UseMemoSample = () => {

    /** 
     * • 함수형 컴포넌트 내부에서 발생하는 연산을 최적화시켜주는 Hook
     * • Redering 과정에서 특정 값이 바뀌었을 때만 연산을 실행한다.
    */

    const [Count, setCount] = useState(0);
    const [Test, setTest] = useState(0);
    const [inputValue, setInputValue] = useState('');
    /** Conut가 변경될 때마다 실행, inputValue가 변경되어도 컴포넌트는 리렌더링되지만
        calc는 다시 계산되지 않는다. **/
    // 제공된 함수의 반환값을 기억하며, 의존성 배열의 값이(여기선 conut) 변경될때만 해당 함수를 재실행

    const calc = useMemo(() => {
        console.log('calc....')
        for (let i = 0; i<10000; i++) {
        }
        return Count *2;
    }, [Count,Test])

    return (
        <>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={() => setCount( () => Count + 1)}>PLUS</button>
            <button onClick={() => setTest( () => Test + 1)}>PLUS Test</button>
            <p> count : {Count} </p> 
            <p> calc : {calc} </p>  
            <p> Test : {Test} </p>    
            <SiblingComponet calc={calc}/>   
        </>
    )
}

export default UseMemoSample