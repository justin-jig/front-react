import { useState } from 'react';

const Practice2 = () => {

    const [text, setText] = useState('사라져라');
    const [display, setDisplay] = useState('block');

    const handleDisplay = () => {
        
        setText(text === '사라져라' ? '보여라' : '사라져라');
        setDisplay(display === 'block' ? 'none' : 'block');
    }

    return (
        <div>
            <button onClick={() => handleDisplay()}>{text}</button>
            <h2 style={{display:display}}>안녕하세요</h2>  
        </div> 
    )
}


export default Practice2