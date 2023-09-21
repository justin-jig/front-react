import React, { Component } from "react";


class MyComponent extends Component {

    componentDidMount() {
        console.log('component 생성');
    }
    componentDidUpdate() {
        console.log('component 업데이트');
    }
    componentWillUnmount() {
        console.log('component 제거');
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>My Component {this.props.number}</span>
        )
    }
}

class LifeCycleClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            visible: true
        };
    }

    changeNumberState = () => {
        this.setState({ number: this.state.number + 1});
    }

    changeVisibleState = () => {
        this.setState({ visible: !this.state.visible});
    }


    render() {
        return (
            <>
                <button onClick={() =>this.changeNumberState}> PLUS </button>
                <button onClick={() =>this.changeVisibleState}> ON/OFF </button>
                {this.state.visible && <MyComponent number={this.state.number}/>}

            </>
        )
    }
}
export default LifeCycleClass