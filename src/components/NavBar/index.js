import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo-header.svg'
import './index.scss'

const NavBar = () => (
  <>
    <div className="container-fluid outer">
      <div className="container inner">
        <img className="header-logo" src={logo} alt="logo" />
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </>
)

export default NavBar
