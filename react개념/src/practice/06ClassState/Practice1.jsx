import  {Component} from 'react';


class Practice1 extends Component {

    constructor (props) {
        super(props);
        this.state = {
            text : '검정색 글씨',
            color : '#000'
        }
    }

    handleColorChange = (kind) => {
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
       
        this.setState(() => {
            return { 
                text: text,
                color: color
            }
        })
    }

    render() {

       return ( 
       
        <div>
            <h2 style={{color:this.state.color}}>{this.state.text}</h2>    
            <button onClick={() => this.handleColorChange('red')}>빨간색</button>
            <button onClick={() => this.handleColorChange('blue')}>파란색</button>
            <button onClick={() => this.handleColorChange('black')}>검정색</button>
        </div> 
       
    )}

}

export default Practice1