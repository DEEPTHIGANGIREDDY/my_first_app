import ProfileDetails from "./data";
import { ListOfProfile } from "./data";
let ProfileComponent = ()=>{
    

    let {name,imgurl,phonenum,email,imgDimenstion}=ProfileDetails
    console.log();

    return(
        // <div>
        //     <img src={imgurl} alt={"img not found"} height={imgDimenstion.heigth} width={imgDimenstion.width}/>
        //     <h1>{name}</h1>
        //     <h5>{phonenum}</h5>
        //     <h5>{email}</h5>
        // </div>
        <div>
            <img src={ListOfProfile[0].imgurl} alt={"img not found"} height={ListOfProfile[0].imgDimenstion.heigth} width={ListOfProfile[0].imgDimenstion.width}/>
            <h1>{ListOfProfile[0].name}</h1>
            <h5>{ListOfProfile[0].phonenum}</h5>
            <h5>{ListOfProfile[0].email}</h5>

            <img src={ListOfProfile[1].imgurl} alt={"img not found"} height={ListOfProfile[1].imgDimenstion.heigth} width={ListOfProfile[0].imgDimenstion.width}/>
            <h1>{ListOfProfile[1].name}</h1>
            <h5>{ListOfProfile[1].phonenum}</h5>
            <h5>{ListOfProfile[1].email}</h5>
        </div>
    )
}
export default ProfileComponent