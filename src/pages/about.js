import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>This is about Page</h1>
      <p>
        need developer? <Link to="/contact">Call me!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
