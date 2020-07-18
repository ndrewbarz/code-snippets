import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
