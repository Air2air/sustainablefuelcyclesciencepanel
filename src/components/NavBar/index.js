import {Link} from 'react-router-dom'
import logo from '../../assets/images/site/logo-header.svg'

import './index.scss'

const NavBar = () => (
  <>
    <div className="container-fluid outer">
      <div className="container inner">
        <img fluid className="header-logo" src={logo} />
        {/* <Link className="nav-link" to="/homepage" />
          <Link className="nav-link" to="/documents" />
          <Link className="nav-link" to="/contact" />
          <Link className="nav-link" to="/about" /> */}
      </div>
    </div>
  </>
)

export default NavBar
