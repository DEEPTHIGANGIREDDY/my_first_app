import { TableListOfProfile } from "./profile_details"
let TableDataProfile=()=>{
    return (
        <>
        <table>
            <tbody>
                <tr>
                <td>{TableListOfProfile[0].name}</td>
        <td><img src={TableListOfProfile[0].imgurl} width={TableListOfProfile[0].imgDimenstion.width} height={TableListOfProfile[0].imgDimenstion.heigth} ></img></td>
        <td>{TableListOfProfile[0].email}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default TableDataProfile