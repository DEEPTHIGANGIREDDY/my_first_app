import { Component } from "react";
import TableHeaderClass from "./table_head";
import TableDataClass from "./table_data";

class TableComponentClass extends Component {
    render(){
        return (
            <div>
            <table border={1} cellPadding={10} cellSpacing={10}>
                <tbody>
                <tr>
                  <TableHeaderClass/>  
                </tr>
                <tr>
                    <TableDataClass/>
                </tr>
                </tbody>
            </table>
        </div>
        )
    }
}
export default TableComponentClass