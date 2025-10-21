import { useState } from 'react';


const Practice1 = () =>{

    const [color, setColor] = useState('black');
    const [text, setText] = useState('검정색 글씨');

    const handleColorChange = (kind) => {

        let text = '';
        let color = '';

        switch (kind) {
            case 'red':
                text = '빨강색 글씨';
                color = 'red';
            break;

            case 'blue':
                text = '파란색 글씨';
                color = 'blue';
            break;
            case 'black':
                text = '검정색 글씨';
                color = 'black';
            break;

            default : 
            text = '검정색 글씨';
            color = 'black';
        }
        setText(text);
        setColor(color);
    }

    return (
        <div>
            <h2 style={{color:color}}>{text}</h2>    
            <button onClick={() => handleColorChange('red')}>빨간색</button>
            <button onClick={() => handleColorChange('blue')}>파란색</button>
            <button onClick={() => handleColorChange('black')}>검정색</button>
        </div> 
    )
}

export default Practice1