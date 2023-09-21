import React, { Component } from 'react';


/**
 * setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
 * 리액트는 여러 setState 호출을 일괄 처리
 */

class ClassState extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
        }
        this.handleIncreament = this.handleIncreament.bind(this);
    }
    
    handleIncreament() {
     
        this.setState((prevState, prevProps) => {
            return { number: prevState.number +1}
          },
          () => console.log("callback", this.state.number))
        
        console.log("out of setState", this.state.number)
    }

    handleDecreament = () => {
     
        this.setState((prevState, prevProps) => {
            return { number: prevState.number - 1}
          },
          () => console.log("callback", this.state.number))
        
        console.log("out of setState", this.state.number)
    }


    render() {
        console.log('root', document.querySelectorAll('#root'));
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.handleIncreament()}>증가</button>
                <button onClick={() => this.handleDecreament()}>감소</button>
            </div>
        )
    }


}

export default ClassState