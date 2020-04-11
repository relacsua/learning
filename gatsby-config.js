/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: `Muhammad Muneer`,
    cat: {
      height: randomInt(400) + 100,
      width: randomInt(400) + 100
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ]
}
