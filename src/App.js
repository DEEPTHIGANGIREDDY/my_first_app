import ButtonComponent from "./button/button-class/btn_cls_comp";

import TableComponent from "./table/table_function/table_fun";

import OrderList from "./components/list/order_list";

import UnOrderList from "./components/list/un_order_list";
import TableComponentClass from "./table/table_class/table_cls";
import ImgComponent from "./Image/img_function/img_fun";
import ProfileComponent from "./components/profile/profile_comp";
import ImgClassComponent from "./Image/img_class/img_cls";
import TableProfile from "./table/table_profile/table_profile";
import NavBarComponent from "./components/header/header";
import HaederBarComponent from "./components/react_header/header_react";
import FormComponent from "./components/form/form";
import ButtonComponentFun from "./button/button-function/btn_fun_comp";
import TextComponent from "./components/text/text_comp";
import ShowDateComponnet from "./components/showDate/showDate_comp";
import ButtonCreation from "./button/button-function/btn_fun_comp";
import YoutubeBtnComp from "./components/youtube_btn/youtube_btn";
import CorosolComponent from "./components/corosol/corosol_cls_comp";
import ApiComponent from "./components/api/profile_api";
const { tab } = require("@testing-library/user-event/dist/tab");

function name() {
  let date = new Date()
  console.log(date.getMonth())

  function getDay(day) {
    switch (day) {
      case 0:
        return "sunday"
      case 1:
        return "monday"
      case 2:
        return "tuesday"
      case 3:
        return "wednsday"
      case 4:
        return "thursday"
      case 5:
        return "friday"
      case 6:
        return "saturday"

      default:
        return "error"
    }
  }

  function getGreeting(hour) {
    if (hour >= 0 && hour <= 11) {
      return "Good Morning"
    } else if (hour > 11 && hour < 16) {
      return "Good Afternoon"
    } else if (hour >= 16 && hour <= 20) {
      return "Good Evening"
    } else {
      return "Good night"
    }
  }
  function gettingMonth(month) {
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let c = month[new Date().getMonth()]
    let d = new Date().getFullYear()
    return `${c}-${d}`
  }

  function Season(season) {
    if (season >= 1 && season < 3) {
      return "Winter Season"
    } else if (season >= 3 && season <= 6) {
      return "Summer Saeason"
    } else if (season > 6 && season < 10) {
      return "Rainy Season"
    } else {
      return "Mon Season"
    }
  }

  const RandomColor = () => {
    let c = Math.floor(Math.random() * 16777215).toString(16);
    return `#${c}`
  }

  return (
    // <div>
    //   <table border="1px solid" cellPadding={"10px"} cellSpacing={"0px"}>
    //   <tr>
    //     <th>Id</th>
    //     <th>Name</th>
    //     <th>Branch</th>
    //   </tr>
    //   <tr>
    //       <td>1576018</td>
    //       <td>Deepthi Gangireddy</td>
    //       <td>Mechanical</td>
    //   </tr>
    //   <tr>
    //       <td>1576045</td>
    //       <td>Shesha nandi</td>
    //       <td>Mechanical</td>
    //   </tr>
    //   <tr>
    //       <td>1576021</td>
    //       <td>Priyanka</td>
    //       <td>Mechanical</td>
    //   </tr>
    // </table>
    // <ol>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    // </ol>
    // <ul>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    //   <li>deepthi</li>
    // </ul>
    // <div><h1>deepthi</h1></div>
    // </div>
    <div>
      {/* <CorosolComponent/>
      <YoutubeBtnComp/> */}
      {/* <ApiComponent/> */}
      {/* <ShowDateComponnet day={getDay(new Date().getDay())} greeting={getGreeting(new Date().getHours())}
        monthgetting={gettingMonth()} season={Season(new Date().getMonth())}
      />

      <ButtonCreation ButtonProperties={{
        width: 100, Bgcolor: RandomColor(), text: "100px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 200, Bgcolor: RandomColor(), text: "200px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 300, Bgcolor: RandomColor(), text: "300px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 400, Bgcolor: RandomColor(), text: "400px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 500, Bgcolor: RandomColor(), text: "500px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 600, Bgcolor: RandomColor(), text: "600px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 700, Bgcolor: RandomColor(), text: "700px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 800, Bgcolor: RandomColor(), text: "800px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 900, Bgcolor: RandomColor(), text: "900px"
      }} />
      <ButtonCreation ButtonProperties={{
        width: 1000, Bgcolor: RandomColor(), text: "1000px"
      }} /> */}
     {/* <HaederBarComponent/>  */}
      {/* <TextComponent>
        <p>hello</p>
        <p>hii</p>
      </TextComponent> */}
      {/* <ButtonComponentFun text="login" Bgcolor="red" color="blue" />
      <ButtonComponentFun text="logout" Bgcolor="green" color="white"/> */}
      {/* <ButtonComponentFun /> */}
      {/* <NavBarComponent/> */}
      
      <ButtonComponent/>
      <TableComponent/>
      <OrderList/>
      <UnOrderList/>
      <TableComponentClass/>
      <ImgComponent/>
      <ProfileComponent/>
      <ImgClassComponent/>
      {/* <TableProfile/> */}
    </div>

  )
}
export default name

