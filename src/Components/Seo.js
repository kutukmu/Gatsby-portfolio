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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>


}



export default SEO