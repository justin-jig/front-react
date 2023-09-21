import React from 'react';


const ShortCircuitEvaluation = () => {

    // 단축 평가

    // && 연산자
    const andResult = false && 'Hello';
    
    // || 연산자
    const defaultValue = 1000;
    const price = 1500;
    const orResult = price || defaultValue;


    return (
        <>
            <div>{andResult}</div>
            <div>{orResult}</div>
        </>
    )
}
export default ShortCircuitEvaluation