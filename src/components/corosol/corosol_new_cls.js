import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "./cat1.jpg"
import img2 from "./cat2.jpg"
import img3 from "./cat3.jpg"
import img4 from "./cat5.jpg"
import { Button } from 'bootstrap';


class DemoCarousel extends Component {
    constructor(){
        super()
        this.state=({
            imges:[img1,img2,img3]
        })
    }

    handleClick=()=>{
        const newObj=[...this.state.imges,img4]
        this.setState({
            imges:newObj
        })
    }


    render() {
        return (
            <Carousel>
                {
                /* <div>
                    <img src={img1} width={200} height={300} />
                    
                </div>
                <div>
                    <img src={img2} width={200} height={300}/>
                    
                </div>
                <div>
                    <img src={img3} width={200} height={300} />
                    
                </div>
                <div>
                    <img src={img4}width={200} height={300} />
                    
                </div> */
                this.state.imges.map((val)=>{
                    return (
                        <><button onClick={this.handleClick} style={{borderRadius:"10px",width:"150px",height:"40px",backgroundColor:"green"}}>Add img hear</button><br></br><br></br>
                        <div>
                        <img src={val} width={200} height={300}></img>
                        </div>           
                        </>
                    )
                })
                }
            </Carousel>
        );
    }
};
export default DemoCarousel                                     