
import React, {useState} from "react"

const Counter = () => {
    
    const [number, setNumber] = useState();
    const handleIncreament = () => {
        setNumber(number + 1);
    }

    const handleDecreament = () => {
        setNumber(number - 1);
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => handleIncreament()}> 증가</button>
            <button onClick={() => handleDecreament()}> 증가</button>
        </div>
    )

}

export default Counter