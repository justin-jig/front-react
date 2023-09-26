import { useState, useCallback } from 'react';
import Styled, { styled } from 'styled-components';



const _Practice2 = Styled.div `
    width: 100%;
    box-sizing:border-box;
    padding :30px;
`

const _AddListBox = Styled.div `
    display:flex;
    align-items:center;
    height:25px; 

` 
const _input = Styled.input`
    width:150px; 
    height:100%;
    margin-right:10px;
`
const _Button = Styled.button`
    width:50px;
    height:95%;
    color:black;
    border:0;
    font-weight:bold;
    background-color:skyblue;
`

const _ul = styled.ul`
    width: 200px;
    height: 200px;
    overflow: auto;
`
const _li = styled.li`
    list-style: none;
    padding: 0;
` 

export default function Practice2 () {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const createTodoList = () => {
        if ( inputValue === "" ) return alert('입력 해주세요.');
        setTodoList((prev) =>{
            const list = [...prev];
            list.push(inputValue);   
            return list 
        });
        setInputValue("")
    }   
    const inputChange = useCallback((value) => {
        setInputValue(value);

    },[])


    return (
        <_Practice2>
            <_AddListBox>
                <_input value={inputValue}
                        onChange={(e) => inputChange(e.target.value)} 
                        onKeyDown={(e)=> e.key === 'Enter' ? createTodoList() :''}/>
                <_Button onClick={() => createTodoList()}>ADD</_Button>
            </_AddListBox>

            <_ul>
                {todoList.map((value, key) => {
                    return <_li key={key}>{value}</_li>
                })}
           
            </_ul>
        </_Practice2>
    )
}