/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Kerim Kutuk || Front End Developer",
    description: "Kerim Kutuk is a software engineer based in Chicago, IL who specializes in building (and occasionally designing) exceptional websites, applications. ",
    author: "Kerim Kutuk",
    twitterUsername: "@Gatsbyup1",
    image: "/twitter_img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-172135531-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
    },
  },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `image`,
      path: path.join(`${__dirname}/src/assets`),
    },
  },

  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://kerim-newdb.herokuapp.com`,

      contentTypes: [`jobs`, `projects`, `blogs`]


    },
  }],
}
