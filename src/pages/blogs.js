import React from "react"
import Layout from "../Components/Layout/Layout"
import Blogs from "../Components/Blogs/Blogs"
const Blog = ({ data }) => {


    const { allStrapiBlogs: { nodes: Blog } } = data
    return (
        <Layout>
            <Blogs blog={Blog} />
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
