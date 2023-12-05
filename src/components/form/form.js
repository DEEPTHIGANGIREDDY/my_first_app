import "./form.css"
const FormComponent =()=>{
    return (
        <form action="/action_page.php">
  <input type="text" id="html" name="fav_language" placeholder="username"></input>
  <label for="html"></label><br></br>
  <input type="text" id="css" name="fav_language" placeholder="password" ></input>
  <label for="css"></label><br></br>
  <input type="text" id="javascript" name="fav_language" placeholder="confirm-password" ></input>
  <label for="javascript"></label><br></br><br></br>
  <input type="submit" value="Submit"></input>
</form>
    )
}
export default FormComponent