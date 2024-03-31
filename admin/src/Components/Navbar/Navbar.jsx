import "./Navbar.css"
import logo from '../../assets/logo_transparent.png';
import person from '../../assets/person.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="nav-logo" src={logo} alt=""/>
        <img className="nav-profile" src={person} alt=""/>
    </div>
  )
}

export default Navbar