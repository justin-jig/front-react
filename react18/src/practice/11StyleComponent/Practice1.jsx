import { useState } from 'react';
import Styled from 'styled-components';

const _Button = Styled.button`
    width:150px;
    height:50px;
`

const _Div = Styled.div `
    width:150px;
    height:150px; 
    line-height :150px;
    text-align : center;
    background-color:  ${(props) => props.backgronudColr};
    color: ${(props) => props.color};

`

export default function Practice1 () {

    const colorList = [ 
        { color: 'white', backgronudColor : 'black'},
        { color: 'yellow', backgronudColor : 'skyblue'}
    ] 
    const [color, setColor] = useState('white');
    const [backgronudColor, setBackgronudColor] = useState('black');

    const changeColorEvnet = () => {
        setColor( (prev) => prev === colorList[0].color ? colorList[1].color : colorList[0].color );
        setBackgronudColor( (prev) => prev === colorList[0].backgronudColor ? 
                            colorList[1].backgronudColor : colorList[0].backgronudColor );
    }

    return (
        <div>
            <_Div backgronudColr={backgronudColor} color={color} >
                    hellow world
            </_Div>
            <_Button onClick={() => changeColorEvnet()}>색상변경!</_Button>
        </div>
    )
}