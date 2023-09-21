import React, { useState, useRef } from 'react';
import './practice.css';

const Practice3 = () => {

    const [board, setBoard] = useState([]); // board list

    const selectFilter = ['전체', '작성자']; // select option 
    const inputCreate = useRef(); // 작성자 dom 저장
    const inpuTitle = useRef(); // 제목 dom 저장

    const createBoard = () => {

        if (inputCreate.current.value === "") return alert('작성자를 입력해주세요.');
        if (inpuTitle.current.value === "") return alert('제못를 입력해주세요.');
        
        const boardList = [...board];
        boardList.push({
            bno : boardList.length + 1,
            create : inputCreate.current.value,
            title : inpuTitle.current.value
        });
        
        setBoard(boardList);
        inputCreate.current.value = "";
        inpuTitle.current.value = "";
        alert('등록 완료');
  
    }

    return (
        <div className='practice3_0920_box_3'>
                <fieldset>
                    <label htmlFor='create'>작성자 : </label>
                    <input ref={inputCreate} type="text" name="create" id="create" placeholder='작성자' />
                    <label htmlFor='title'>제목 : </label>
                    <input ref={inpuTitle} type="text" name="create" id="title" placeholder='제목' />
                    <button onClick={() => createBoard()}>작성</button>
                </fieldset>
                <div className='search-box'>
                    <select>
                        {selectFilter.map((index,key) => {
                            return <option key={key}> {index}</option>
                        })}
                    </select>
                    <input type="text" name="" id="" placeholder='검색어' />
                    <button onClick={() => {}}>버튼</button>
                </div>
                <table >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {board.map((obj,key) => {
                            return (
                                <tr key={key}>
                                    <td>{obj.bno}</td>
                                    <td>{obj.title}</td>
                                    <td>{obj.create}</td>
                                </tr>
                            ) 
                        })}
                    </tbody>
                </table>
            </div> 
    )

}


export default Practice3