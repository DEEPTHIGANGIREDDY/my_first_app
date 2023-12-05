function ButtonComponentFun({ bgColor="red", color="white" ,text="signup"}) {
    // const { bgColor, color ,text} = props
    // debugger
    return (
        <div>
            <button onClick={() => { alert("cliked")}} 
            style={{ backgroundColor: bgColor, color}}>
                {text}</button>
        </div>
    )
}
export default ButtonComponentFun

// export const  ColorButtonComponent=(prop)=>{
//     return (
//         <div>
//             <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"100px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"130px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"160px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"190px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"210px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"240px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"270px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"300px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"330px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button><br></br>
//                 <button id="btn" 
//             style={{backgroundColor:prop.randam,width:"370px",color:"white",padding:"10px",borderRadius:"10px"}} >
//                 {prop.text}</button>
//         </div>
//     )
// }
// function
//     ButtonCreation({ ButtonProperties }) {

//     const { Bgcolor, text } = ButtonProperties
//     console.log(ButtonProperties);

//     return (
//         <div>
//             <button style={{
//                 width: "100px",
//                 backgroundColor: Bgcolor,
//                 color: "white", padding: "10px", borderRadius: "10px"
//             }}>{text}


//             </button>
//         </div>)
// }
// export default ButtonCreation

