import { Component } from "react";

class CorosolComponent extends Component {
    
    state = {
        image: ["https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
    "https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlpGa2TlS6LoN7fv70J7H3lV_QTrqPXxQ5A&usqp=CAU",
"https://cdn-img1.imgworlds.com/assets/a8f48ba2-9603-4e2b-ac2d-60ce06efa566.jpg?key=home-gallery"],
        count:0,
        employee:[
            {name:"deephti",
        age:25,
    branch:"mech"},
    {name:"sandy",
        age:27,
    branch:"EEE"},
    {name:"priya",
        age:23,
    branch:"CSE"}
        ]
 }
     
 increment = () => {
    this.setState((prevState) => ({
      count: (prevState.count - 1 + prevState.image.length)%prevState.image.length
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
        count: (prevState.count + 1 )%prevState.image.length

    }));
  }

  render() {
    return (
      <div>
        {/* <h1>Counter: {this.state.count}</h1> */}
        <button onClick={this.increment}>Forward</button>
        <img src={this.state.image[this.state.count]} style={{width:"100px",height:"100px"}}></img>
        <button onClick={this.decrement}>Backword</button>
        <div>
        <h1>
            {this.state.employee.map((employee) => (
              <span key={employee.name}>
                {employee.name}</span>
            ))}
          </h1>
        </div>
      </div>
    );
  }
}
export default CorosolComponent