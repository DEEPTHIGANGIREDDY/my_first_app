import { Component } from "react";

class YoutubeBtnComp extends Component{
    state={
        isSubscribe:false,
        text1:"Please Subscribe",
        text2:"Thanks For Subscribe"
    }

    handleClick=()=>{
        this.setState({
            isSubscribe:!this.state.isSubscribe
        },()=>{})
    }
    render(){
       return(
        <>
        <button onClick={this.handleClick} style={{backgroundColor:this.state.isSubscribe?"green":"red"}}> 
            {this.state.isSubscribe?this.state.text2:this.state.text1}
        </button>
        {
            this.state.isSubscribe?<h2>Welcome User</h2>:<h2>Please Subscribe</h2>
        }
        </>
       )
    }
}
export default YoutubeBtnComp