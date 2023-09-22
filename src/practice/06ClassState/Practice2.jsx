import React, {Component} from 'react';


class Practice2 extends Component {

    constructor (props) {
        super(props);
        this.state = {
            text : '사라져라',
            display : 'block'
        }
    }

    handleDisplay = (kind) => {
     
        this.setState((prevState) => {
            return { 
                text: prevState.text === '사라져라' ? '보여라' : '사라져라' ,
                display: prevState.display === 'block' ? 'none' : 'block' 
            }
        })
    }

    render() {

       return ( 
       
        <div>
             
            <button onClick={() => this.handleDisplay()}>{this.state.text}</button>
            <h2 style={{display:this.state.display}}>안녕하세요</h2>  
        </div> 
       
    )}

}

export default Practice2