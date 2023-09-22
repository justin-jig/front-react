import {useState, useEffect} from "react";


const  MyComponent = (props) => {

    const {number} = props;
    const [text, setText] = useState('11');

    // 컴포넌트가 렌더링 될 때 한번은 실행함.
    useEffect(() =>{
        console.log('항상 실행됩니다.')
    })

    useEffect(() => {
        console.log('컴포넌틀가 생성될 때 실행됩니다.');
        
        return () => {
            console.log('제거 될 때 실행합니다.');
        }
    },[])

    useEffect(() => {
        // text를 바라봐도 컴포넌트가 렌더링 될 때 한번은 실행함.
        console.log('text가 변경될 때 실행됩니다.', text);
        
    }, [text])


    return <> 
        <span>My Component Func {number}</span> 
        <input type="text" value={text}  onChange={(e) => setText(e.target.value) }/>
   
    </>
}


const LifeCycleFunc = () => {

    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {

    }, [])

    const changeNumberState = () => {

        setNumber(() => number + 1);
    }

    const changeVisibleState = () => {

        setVisible( () => !visible);
    }

    return ( 
        <>
            <button onClick={() => changeNumberState()}>PLUS</button>
            <button onClick={() => changeVisibleState()}>ON/OFF</button>    
            {visible && <MyComponent number={number}/>}
        </> 
    )

}
export default LifeCycleFunc;