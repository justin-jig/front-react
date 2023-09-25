import { Component, createRef } from 'react';


class ClassRef extends Component  {

    // createRef를 사용해서 만들떄는 컴포넌트 내부 변수에 React.createRef()를 활당해주어야함
    myInput = createRef();
    constructor(props) {
        super(props);
    }

    handleFoucs = () => {
        //ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current를 해줘야함.
        this.myInput.current.focus();
        //   this.myInput.focus();
    }

    render() {
       
        return (
            <div>
                <p>버튼 클릭시 input에 focus 처리</p>
                {/* <input ref={(ref) => this.myInput = ref} /> */}
                <input ref={this.myInput} />
                <button onClick={this.handleFoucs}> Foucus </button>
            </div>
        )
    }


}

export default ClassRef