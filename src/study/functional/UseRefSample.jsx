import {useRef, useEffect} from 'react';

// 로컬변수 - 렌더링되어도 값을 그대로 유지 (리렌더링에 영향을 주지 않음)
// 1.useref로 생성한 객체는 .current 프로퍼티를 가지고 있어 이를 통해 변수에 접근 가능
// 2.useref로 생성된 변수는 컴포넌트가 리렌더링되어도 그값이 유지
// 3.useref의 값이 변경되어도 컴포넌트는 리렌더링되지 않음.

export const UseRefSample = () => {

    //1. ref 객체 만들기
    const myInput = useRef();   
    const idRef = useRef(1);

    useEffect(() => {

    },[])

    const handleFocus = () => {
        //3. userRef() 객체에 current 접근
        myInput.current.focus();
    }

    const plusIdRef = () => {

        idRef.current +=1;

    }

    return (
        <>      
            <>
                <h1>예제 1. </h1>
                <p>함수형 컴포넌트 버튼 클릭시 Input</p>
                <input ref={myInput}/>
                <button onClick={() => handleFocus()}>Focus</button>
            </>
          
            <>
                <h1>예제 2.</h1>
                <h2>{idRef.current}</h2>
                <button onClick={plusIdRef}>Plus Ref</button>
            </>
        </>
    )
}

// 사용자가 웹사이트에서 회원가입시 버튼을 실수로 두번클릭하는 것을 방지
export const UseRefSample2 = () => {

    const lastTime = useRef(null);

    const handleSubmit = () => {
        const now = Date.now();
        //마지막 클릭 후 1초 이내 다시 클릭되면 무시
        if (lastTime.current && now - lastTime.current < 1000) {
            console.log('클릭 시간이 짧습니다.');
            return false;
        }
        lastTime.current = now;
        console.log('제출이 완료되었습니다.');
    }


    return (
        
        <>
            <button onClick={() => handleSubmit()}>제출</button> 
        </>
    )

}