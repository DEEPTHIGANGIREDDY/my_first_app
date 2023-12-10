import { Component, PureComponent } from "react";

class PureComponentReact extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset = () => {
        this.setState({
            count: 0
        })
    }


    handleClick = (type = "reser", val = 0) => {
        this.setState({
            count: type === "increment" ? this.state.count + val :
                type === "decrement" ? this.state.count - val :
                    val
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.handleClick("increment",1)}>increment</button>
        <button onClick={this.handleClick("decrement",1)}>decrement</button>
        <button onClick={this.handleClick("reset",0)}>reset</button> */}

                {/* <Button text="increment" val={1} onClick={this.handleClick}/>
       <Button text="decrement" val={1} onClick={this.handleClick}/>
       <Button text="reset"val={0} onClick={this.handleClick}/> */}

                {
                    [{ text: "increment", val: 1 }, { text: "decrement", val: 1 },
                    { text: "reset", val: 0 }].map((val) => 
                    <Button text={val.text} val={val.val} onClick={this.handleClick} key={val.text} />)
                }
                <Child1 />
                <Child2 />
            </>
        )
    }
}
export default PureComponentReact


class Button extends PureComponent {
    render() {
        return (
            <>
                <button onClick={() => { this.props.onClick(this.props.text, this.props.val) }}>{this.props.text}</button>
            </>
        )
    }
}

class Child1 extends PureComponent {
    render() {
        console.log("render child 1");
        return (
            <>
                <h1>c1</h1>
            </>
        )
    }
}

class Child2 extends PureComponent {
    render() {
        console.log("render child 2");
        return (
            <>
                <h1>c1</h1>
            </>
        )
    }
}