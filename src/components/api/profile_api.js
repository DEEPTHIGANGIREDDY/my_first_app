import axios from "axios";
import { Component } from "react";
import "./profile.css"
import HaederBarComponent from "../react_header/header_react";
import FooterComponent from "../footer/fotter";

class ApiComponent extends Component {
    // constructor(props){

    //     state={
    //         product:[]
    //     }

    // }
    state = {
        product: [],
        count:0,
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
    // totalsum (){
    //     axios.get()
    //     this.setState({
    //         count:
    //     })
    // }
    handleClick = () => {

        // fetch("https://fakestoreapi.com/products")
        // .then((response)=>{return response.json()})
        // .then((response)=>{

        // return this.setState({ product: response });
        // })
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
                } else {
                    alert("sonthing went wrong")
                }
            }).catch(() => { alert("somthing went worng") })
    }
    render() {
        return (
            <>
                <HaederBarComponent />
                <h1>${this.state.count.toFixed(2)}</h1>
                <a href="#" className="btn btn-primary" onClick={() => { this.removeAll() }
                }>remove All</a>
                <button onClick={this.handleClick}>data</button><br></br><br></br>
                <div className="parent">
                    <div className="chaild">
                {
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
                    })
                }
                    </div>
                </div>
                <FooterComponent />
            </>
        )

    }
}
export default ApiComponent