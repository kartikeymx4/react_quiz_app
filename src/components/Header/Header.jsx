import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/teacher'>Teacher</Link>
      <br></br>
      <Link to='/'>Home</Link>
    </header>
  )
}

export default Header
