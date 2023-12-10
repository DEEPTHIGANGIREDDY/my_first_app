import { Component } from "react";

class UpdatingPhaseComp extends Component{
    render(){
        return(
            <>
            <h1>shd</h1>
           <HeaderComp favcol={"green"}/>
            </>
        )
    }
}
export default UpdatingPhaseComp

class HeaderComp extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red",
    count:0};
    }
    static getDerivedStateFromProps(props, state) {
        // console.log("getDerivedStateFromProps");
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    handleClick=()=>{
this.setState({
    count:this.state.count+1
})
    }
    shouldComponentUpdate(){
        return true
    }

    componentDidMount(){
        document.title=`Count ${this.state.count}`
    }
    componentDidUpdate(){
        document.title=`Count ${this.state.count}`
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("prevprop",prevProps);
        console.log("prevstate",prevState);
    }
    render() {
        console.log("rendr");
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor} {this.state.count}</h1>
        <button onClick={this.handleClick}>update the count</button>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  