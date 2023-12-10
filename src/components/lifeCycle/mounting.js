import { Component } from "react";
import axios from "axios";
import "../api/profile.css"
import HaederBarComponent from "../react_header/header_react";
import FooterComponent from "../footer/fotter";
import { Audio } from 'react-loader-spinner';

class LifecycleComp extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            product:[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        product: res.data,
                        count:res.data.reduce((total,val)=>{
                                return total+val.price
                        },0)
                    })
                    // alert("fetched data success")
                } 
            }).catch(() => { alert("somthing went worng") })
    }
    
    handle = (id) => {
        let remove = this.state.product.filter((item) =>
            item.id !== id
        )
        this.setState({
            product: remove
        })

    }
    removeAll=(id)=>{
        let removeAll=this.state.product.filter((item)=>{
            item.id =[]
        })
        this.setState({
            product:removeAll
        })
    }

    render(){
        return(
            <>
                <HaederBarComponent/>
                <Chaild color="red"/>
                <h1 style={{display:"inline"}}>${this.state.count.toFixed(2)}</h1>
                <a href="#" className="btn btn-primary" onClick={() => { this.removeAll() }
                }>remove All</a><br></br><br></br>
                <div className="parent">
                    <div className="chaild">
                {
                    this.state.product.length>0?
                    this.state.product.map((val) => {
                        return (
                            <div className="card" key={val.id}>
                                {/* //     <img src={val.image} ></img>
                                //         <p>{val.title}</p> */}
                                {/* <div className="card" style="width: 18rem;"> */}
                                <img src={val.image} className="card-img-top" alt="img"></img>
                                <div class="card-body">
                                    <h6 class="card-title" style={{ overflow: "scroll", height: "70px", overflowX: "hidden", overflowY: "hidden" }}>{val.title}</h6>
                                    <p class="card-text">${val.price}</p>
                                    <a href="#" className="btn btn-primary">see more</a>
                                    <a href="#" id="rmall" className="btn btn-primary" onClick={() => { this.handle(val.id) }
                                    }>remove</a>
                                </div>
                            </div>
                            //  </div>
                        )
                    }):
                    <Loadercomp/>
                }
                    </div>
                </div>
                <FooterComponent/>
                
            </>
        )
    }
}
export default LifecycleComp

class Chaild extends Component{

    constructor(){
        super()
        this.state={
            color:"green"
        }
    }

    // static getDerivedStateFromProps(prevProps,prevState){
    //     // console.log(prevProps,prevState);
    //     return {color:prevProps.color}
    // }
    render(){
        return(
            <>
            <h1 style={{color:this.state.color}}>hiii</h1>
            </>
        )
    }
}

class Loadercomp extends Component{
    render(){
        return(
            <>
            <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
            </>
        )
    }
}