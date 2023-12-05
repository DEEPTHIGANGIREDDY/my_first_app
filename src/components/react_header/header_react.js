import FooterComponent from "../footer/fotter"
import FormComponent from "../form/form"
import "../header/header_css.css"

const HaederBarComponent =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* <div className="parent_card">
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
    <div className="chaild_card">
    <img className="img1" src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="imgs" ></img>
    <h1>ES6 Concepts</h1>
    <p>ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.</p>
    </div>
</div> */}
{/* <FormComponent/> */}
{/* <FooterComponent/> */}   
</>
    )
}
export default HaederBarComponent