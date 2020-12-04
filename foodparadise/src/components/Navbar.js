import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    {/* <a className="navbar-brand" href="/">FoodParadise</a> */}
    <Link className="navbar-brand" to="/">FoodParadise</Link>
  </nav>
)

export default Navbar