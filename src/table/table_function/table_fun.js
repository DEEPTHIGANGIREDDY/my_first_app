import TableData from "./table_data"
import TableHeader from "./table_head"


let TableComponent = ()=>{
    return (
        <div>
            <table border={1} cellPadding={10} cellSpacing={10}>
                <tbody>
                <tr>
                    <TableHeader/>
                </tr>
                <tr>
                    <TableData/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableComponent