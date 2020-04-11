import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default ({ data: { site: { buildTime, siteMetadata: { cat, author } } } }) => (
  <Layout>
    <h1>Hi! Love <span role="img" aria-label="cats">😺</span> ?</h1>
    <p>
      Sign up here for daily cat pictures <span role="img" aria-label="cat">😺</span>
    </p>
    <marquee>
      <img alt="cat" src={`https://placekitten.com/g/${cat.width}/${cat.height}`} />
    </marquee>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSektWkMjiXrwU_-qv5qTHVVIfobPX6fsnL7dM7tEo0k-yruNw/viewform?embedded=true"
      width="640"
      height="1050"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="form">
        Loading…
      </iframe>
    <small>Created with <span role="img" aria-label="cat">💖</span> by {author} @ {buildTime}</small>
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
