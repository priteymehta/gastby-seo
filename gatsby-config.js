/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `basic-demo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-vanilla-extract", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "DHYRERERRE"
    }
  }, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};