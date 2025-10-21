import {useState} from 'react';

const JsxStudy = () => {

    const [test, setTest] = useState(3);

    const textFlag = false;
    let txt = '';
    if (textFlag) txt = 'true입니다.'
    else txt = 'false 입니다.'
    const styleObj = {
        backgroundColor : '#000',
        fontSize : '1em',
        color : '#fff',
        marginBottom : '30px'
    }


    return (
        <>
            <h1>React</h1>
            <div style={styleObj}> test ss das리엑트 시작</div>
            <div><span>{txt}</span></div>
        </>
    )
}
export default JsxStudy;