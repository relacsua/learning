import React from "react"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <h1>Hi! I love <span role="img">😺</span></h1>
    <p>
      What do I like to do? Build websites to share my love for <span role="img">😺</span>
    </p>
    <marquee>
      <img src={`https://placekitten.com/g/${data.site.siteMetadata.cat.width}/${data.site.siteMetadata.cat.height}`} />
    </marquee>
    <small>Created with <span role="img">💖</span> by {data.site.siteMetadata.author} @ {data.site.buildTime}</small>
  </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        cat {
          height
          width
        }
      }
      buildTime
    }
  }
`
