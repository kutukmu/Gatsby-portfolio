import React from "react"
import Layout from "../Components/Layout/Layout"
import Blogs from "../Components/Blogs/Blogs"
import { graphql } from 'gatsby'
import SEO from "../Components/Seo"
const Blog = ({ data }) => {


  const { allStrapiBlogs: { nodes: Blog } } = data
  return (
    <Layout>
      <SEO title="Blogs" />
      <Blogs blog={Blog} link="home" />
    </Layout>
  )
}

export default Blog

export const query = graphql`{

    allStrapiBlogs {
        nodes {
          Content
          Date(formatString: "MMMM Do. YYYY")
          Description
          Title
          slug
          Image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
}




`
