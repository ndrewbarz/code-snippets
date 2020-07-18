import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <section className="preview">
        <div className="preview-left">
          <h1 className="title">
            <span>code</span> snippets
          </h1>
          <p>Resource where you can find some code snippets are ready to use</p>
          <div className="preview-links flex">
            <Link className="btn" to="/snippets">
              OPEN SNIPPETS
            </Link>
            <Link to="/about">ABOUT PROJECT</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
