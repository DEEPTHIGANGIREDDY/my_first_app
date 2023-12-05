const ShowDateComponnet =(prop)=>{
    return (
        <>
        <h1 
        style={{backgroundColor:prop.greeting==="Good Morning"?"aqaa":
        prop.greeting==="Good Afternoon"?"yellow":"silver"}}>{prop.greeting} user ,today was {prop.day} ,{prop.monthgetting} ,{prop.season}</h1>
        </>
    )
}
export default ShowDateComponnet