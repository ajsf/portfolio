import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu" ref={props.domRef}>
    <div className="inner">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic">About Me</Link>
        </li>
        <li>
          <Link to="/generic">Projects</Link>
        </li>
        <li>
          <Link to="/generic">Resume</Link>
        </li>
      </ul>
    </div>
    <div className="close" onClick={props.onToggleMenu}>
      Close
    </div>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
