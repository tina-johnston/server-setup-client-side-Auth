import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyle.css'
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signout">Sign out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    )
  }
}

export default Header
