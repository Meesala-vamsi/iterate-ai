import "./Header.css"
import logo from "../../Assets/mandhir-logo.svg"
const Header=()=>{
  return(
    <header className="header-container">
      <div>
      <img src={logo} alt="logo" />
      </div>
      <ul className="header-list-container">
        <li>Home</li>
        <li>Puja</li>
        <li>Panchang</li>
        <li>Temples</li>
        <li>Library</li>
      </ul>
      <div className="header-right-container">
        <button>English</button>
        <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1711704711/unnamed_wfzswu.jpg" alt="profile" className="profile" />
      </div>
    </header>
  )
}


export default Header