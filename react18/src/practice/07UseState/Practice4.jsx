import { useState, useRef } from 'react';
import './practice.css';


const Practice4 = () => {
    
    const [board, setBoard] = useState([]); // 전체 원본 board
    const [searchBoard, setSearchBoard] = useState([]);// fillter board

    const selectFilter = [{title:'전체', key:'all'}, {title:'제목',key:'title'}, {title:'작성자',key:'create'}]; // select option 
    const inputCreateRef = useRef(); // 작성자 dom 저장
    const inpuTitleRef = useRef(); // 제목 dom 저장
    const selectSearchFilterRef = useRef(); // select dom 저장
    const inputSearchRef = useRef(); // search input dom 저장


    const createBoard = () => {// Board 등록

        if (inputCreateRef.current.value === "") return alert('작성자를 입력해주세요.');
        if (inpuTitleRef.current.value === "") return alert('제목을 입력해주세요.');
        
        const boardList = [...board];
        boardList.push({
            bno : boardList.length + 1,
            create : inputCreateRef.current.value,
            title : inpuTitleRef.current.value
        });
        
        setBoard(boardList);
        inputCreateRef.current.value = "";
        inpuTitleRef.current.value = "";
        alert('등록 완료');
  
    }

    
    const boardSearch = () => {  // 게시판 검색
        
        if (selectSearchFilterRef.current.value != 'all' && 
            inputSearchRef.current.value === "" ) return alert('검색어를 입력해주세요.');
        if (board.length === 0 ) return;

        let filter = [];
        const searchValue = inputSearchRef.current.value; // 검색어 값
        const selectFilterValue = selectSearchFilterRef.current.value; // select 필터 값


        if (selectFilterValue === 'all') {
            let allfilter = []
            selectFilter.forEach((index) => {
                if (index.title != '전체') {
                    const allSearch = board.filter((x) => {
                        return x[index.key].includes(searchValue)  
                    });
                    allfilter = [...allfilter, ...allSearch]
                }  
            })

            filter = allfilter.filter((v, i) => allfilter.indexOf(v) === i);
          
        } else {
            filter = board.filter((x) => x[selectFilterValue].includes(searchValue));
        }

        setSearchBoard(filter);

    }

 
    const boardFilterSelect = (e) => { // 게시판 filter 셀렉트

        if (selectSearchFilterRef.current.value != e.target.value) {
            
            setTimeout(() => {
                boardSearch();
            },[100])
        } 
    }

    const boardSearchReset = () => {  // 게시판 검색 reset
        setSearchBoard([]);
        inputSearchRef.current.value = "";
        selectSearchFilterRef.current.value = "all";

    }

    const boardRender = () => {   // 게시판 render
        
        const renderTd = (obj,key) => {
            return (
                <tr key={key}>
                    <td>{obj.bno}</td>
                    <td>{obj.title}</td>
                    <td>{obj.create}</td>
                </tr>
            )
        }
        const noneData = () => {
            return (<tr><td colSpan="3">게시물 없음</td></tr> )
        }

        const searchValue = inputSearchRef && inputSearchRef.current && inputSearchRef.current.value; // 검색어 input 값
        if (searchValue === undefined || searchValue === null) return board.map((obj,key) => renderTd(obj,key));

        if (searchValue === '' &&  board.length != 0) {
            return board.map((obj,key) => renderTd(obj,key));
        } else if (searchValue != '' &&  searchBoard.length != 0) {
            return searchBoard.map((obj,key) => renderTd(obj,key));
        } else {
            return noneData();
        }

    } 


    return (
        <div className='practice3_0920_box_3'>
        <fieldset>
            <label htmlFor='create'>작성자 : </label>
            <input ref={inputCreateRef} type="text" name="create" id="create" placeholder='작성자' />
            <label htmlFor='title'>제목 : </label>
            <input ref={inpuTitleRef} type="text" name="create" id="title" placeholder='제목' />
            <button onClick={() => createBoard()}>작성</button>
        </fieldset>
        <div className='search-box'>
            <select ref={selectSearchFilterRef} onChange={(e) => boardFilterSelect(e)}>
                {selectFilter.map((index,key) => {
                    return <option key={key} value={index.key}> {index.title}</option>
                })}
            </select>
            <input  type="text" 
                    onKeyPress={(e)=> e.key === 'Enter' ? boardSearch() :''}
                    onChange={(e) => e.target.value === "" ? boardSearch() :''}
                    ref={inputSearchRef} 
                    placeholder='검색어' 
            />
            <button onClick={() => boardSearch()}>검색</button>
            <button onClick={() => boardSearchReset()}>리셋</button>
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
                {boardRender()}
            </tbody>
        </table>
    </div> 

    )

}

export default Practice4