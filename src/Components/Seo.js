import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        twitterUsername
        siteTitle: title
      }
    }
  }
`




const SEO = ({ title, desc }) => {

    const { site: { siteMetadata: { author, siteDesc, image, siteUrl, twitterUsername, siteTitle } } } = useStaticQuery(query)

    return <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
        <meta name="description" content={(desc) ? desc : siteDesc} />
        <meta name="image" content={image} />
    </Helmet>


}



export default SEO