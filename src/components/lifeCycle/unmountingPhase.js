import { Component } from "react";

class UnmontingPhaseComp extends Component{
    constructor(){
        super()
        this.state=({
            isVisable:false,
            time:0

        })
    }

    startTimer=()=>{
     this.timerId=setInterval(()=>{
        this.setState((prevState)=>(
            {
                time:prevState.time+1
            })
        )
     },1000)   
    }

    // stopTimer = () => {
    //     clearInterval(this.timerId);
    //     this.setState({
    //         time:0
    //     })
    //   };
      
    handleClick=()=>{
        this.setState({
            isVisable:!this.state.isVisable
        })
    }
    componentWillUnmount() {
        // this.stopTimer();
        this.setState({
            time:0
        })

      }
    render(){
        return(
            <>
            <h1>{this.state.time}</h1>
            {
                this.state.isVisable?<Child/>:null
            }
            {/* <button onClick={this.handleClick}>Click to see child</button> */}
            <button onClick={this.startTimer}>start</button>
            <button onClick={this.startTimer}>stop</button>
            </>
        )
    }
}
export default UnmontingPhaseComp

class Child extends Component{

    
    componentWillUnmount(){
        alert("child is removed")
        //we will stop the timer
    }
    render(){
        return(
            <>
            <h1>child</h1>
            </>
        )
    }
}