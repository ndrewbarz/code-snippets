import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <p>Header Here</p>
      <nav>
        <ul>
          <li>
            <Link to="/">HOme</Link>
          </li>
          <li>
            <Link to="/snippets">Snippets</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
