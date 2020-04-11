import React from "react"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <span>Created with love by {data.site.siteMetadata.author} @ {data.site.buildTime}</span>
  </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
      buildTime
    }
  }
`
