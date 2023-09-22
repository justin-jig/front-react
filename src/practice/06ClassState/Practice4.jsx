import React, {Component} from 'react';
import './practice.css';

class Practice4 extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectFilter : [{title:'전체', key:'all'}, {title:'제목',key:'title'}, {title:'작성자',key:'create'}],
            boardIndex : 1, // 전체 원본 board 등록 index번호
            board : [], // 전체 원본 board
            boardFilterSelectKey : 'all', // 검색 select 
            boardSearchText : '', // 검색어 
            searchBoard : [], // 전체 원본 board
        }
    }   
    createBoard = () => {  // 게시판 등록
        if (this.inputCreate.value === "") return alert('작성자를 입력해주세요.');
        if (this.inpuTitle.value === "") return alert('제목를 입력해주세요.');
        const boardList = [...this.state.board];
        boardList.push({
            bno : this.state.boardIndex,
            create : this.inputCreate.value,
            title : this.inpuTitle.value

        });

        this.setState((preState) => { 
            return {
                ...preState,
                board: boardList,
                boardIndex : preState.boardIndex + 1
            }
        }, () => {
            this.inputCreate.value = "";
            this.inpuTitle.value = "";
            this.boardSearchReset();
            alert('등록 완료');
           
        })
    }


    boardSearch = () => {  // 게시판 검색
        
        if (this.state.boardFilterSelectKey != 'all' && this.inputSearch.value === "" ) return alert('검색어를 입력해주세요.');
        if (this.state.board.length === 0 ) return;

        let filter = [];
        if (this.state.boardFilterSelectKey === 'all') {
            let allfilter = []
            this.state.selectFilter.forEach((index) => {
                if (index.title != '전체') {
                    const allSearch = this.state.board.filter((x) => {
                        return x[index.key].includes(this.inputSearch.value)  
                    });
                    allfilter = [...allfilter, ...allSearch]
                }  
            })

            filter = allfilter.filter((v, i) => allfilter.indexOf(v) === i);
          
        } else {
            filter = this.state.board.filter((x) => x[this.state.boardFilterSelectKey].includes(this.inputSearch.value));
        }

        this.setState((preState) => { 
            return {
                ...preState,
                boardSearchText: this.inputSearch.value,
                searchBoard : filter
            }
        })
    }

 
    boardFilterSelect = (e) => { // 게시판 filter 셀렉트

        if (this.state.boardFilterSelectKey != e.target.value) {
        
            this.setState((preState) => { 
                return {
                    ...preState,
                    boardFilterSelectKey: e.target.value,
                }
            }, () => {
                setTimeout(() => {
                    this.boardSearch();
                },[100])
            })
        } 
    }

    boardSearchReset = () => {  // 게시판 검색 reset
        this.setState((preState) => { 
            return {
                ...preState,
                boardSearchText:'',
                boardFilterSelectKey: 'all',
                searchBoard : []
            }
        }, () => {
            this.inputSearch.value = "";
            this.selectSearchFilter.value = "all";
        })

    }

    boardRender = () => {   // 게시판 render

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

        if (this.state.boardSearchText === '' &&  this.state.board.length != 0) {
            return this.state.board.map((obj,key) => renderTd(obj,key));
        } else if (this.state.boardSearchText != '' &&  this.state.searchBoard.length != 0) {
            return this.state.searchBoard.map((obj,key) => renderTd(obj,key));
        } else {
            return noneData();
        }

    } 


    render() {
       return ( 
            <div className='practice3_0920_box_3'>
                <fieldset>
                    <label htmlFor='create'>작성자 : </label>
                    <input ref={(ref) => this.inputCreate = ref} type="text" name="create" id="create" placeholder='작성자' />
                    <label htmlFor='title'>제목 : </label>
                    <input ref={(ref) => this.inpuTitle = ref} type="text" name="create" id="title" placeholder='제목' />
                    <button onClick={() => {this.createBoard()}}>작성</button>
                </fieldset>
                <div className='search-box'>
                    <select ref={(ref) => this.selectSearchFilter = ref} onChange={(e) => this.boardFilterSelect(e)}>
                        {this.state.selectFilter.map((index,key) => {
                            return <option key={key} value={index.key}> {index.title}</option>
                        })}
                    </select>
                    <input  type="text" 
                            onKeyPress={(e)=> e.key === 'Enter' ? this.boardSearch() :''}
                            onChange={(e) => e.target.value === "" ? this.boardSearch() :''}
                            ref={(ref) => this.inputSearch = ref} 
                            placeholder='검색어' 
                    />
                    <button onClick={() => this.boardSearch()}>검색</button>
                    <button onClick={() => this.boardSearchReset()}>리셋</button>
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
                        {this.boardRender()}
                    </tbody>
                </table>
            </div> 
    )}

}

export default Practice4