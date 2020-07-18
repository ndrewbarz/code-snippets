import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container flex">
        <div className="brand">
          <Link to="/">
            <span>Brand</span>
          </Link>
        </div>
        <ul className="flex">
          <li>
            <Link activeClassName="active" to="/snippets">
              Snippets
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
