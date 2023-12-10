import React, { Component } from "react";
import "./styling.css";

class TableListComp extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          studentName: "deepthi",
          Branch:"Mech",
          designation: "react",
        },
        {
          id: 2,
          studentName: "priya",
          Branch:"cse",
          designation: "js",
        },
        {
          id: 3,
          studentName: "ram",
          Branch:"EEE",
          designation: "fullstack",
        },
        {
            id: 4,
            studentName: "harsha",
            Branch:"mech",
            designation: "fullstack",
          },
          {
            id: 5,
            studentName: "akhil",
            Branch:"cse",
            designation: "fullstack",
          },
          {
            id: 6,
            studentName: "ayisha",
            Branch:"ahikil",
            designation: "fullstack",
          },
          {
            id: 7,
            studentName: "harsha",
            Branch:"ahikil",
            designation: "react",
          },
          {
            id: 8,
            studentName: "karthi",
            Branch:"ahikil",
            designation: "fullstack",
          },
          {
            id: 9,
            studentName: "lavan",
            Branch:"ahikil",
            designation: "js",
          },
      ],
      filteredList: [],
    };
  }

  handleClick = (designation) => {
    if (designation === "all") {
        this.setState({
          filteredList: [],
        });
      } else {
        const filteredList = this.state.list.filter((val) => val.designation === designation);
        this.setState({
          filteredList,
        });
      }
  };

  render() {
    const dataToShow = this.state.filteredList.length > 0 ? this.state.filteredList : this.state.list;

    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Student name</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            {dataToShow.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.studentName}</td>
                <td>{val.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => this.handleClick("react")}>React</button>
        <button onClick={() => this.handleClick("js")}>Js</button>
        <button onClick={() => this.handleClick("fullstack")}>Fullstack</button>
        <button onClick={() => this.handleClick("all")}>All</button>
      </>
    );
  }
}

export default TableListComp;
