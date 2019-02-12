import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png'

const Header = props => (
  <header id="header">
    <div className="inner">
      <Link to="/" className="logo">
        <span className="symbol">
          <img src={logo} alt="" />
        </span>
        <span className="title">AJSF</span>
      </Link>
      <nav>
        <ul>
          <li>
            <div
              className="menu-link"
              onClick={props.onToggleMenu}
            >
              Menu
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
