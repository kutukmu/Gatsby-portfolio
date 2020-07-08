import React from "react"
import Layout from "../Components/Layout/Layout"
import Hero from "../Components/Hero/Hero"
import Services from "../Components/Services/Service"
import { graphql } from 'gatsby'
import Projects from "../Components/Projects/Projects"
import Blogs from "../Components/Blogs/Blogs"
import "../main.scss"

export default function Home({ data }) {


  const { allStrapiProjects: { nodes: Project }, allStrapiBlogs: { nodes: Blog } } = data;




  return <div>
    <Layout>
      <Hero />
      <Services />
      <Projects list={Project} link="projects" />
      <Blogs blog={Blog} link="blogs" />

    </Layout>


  </div>
}


export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        Title
        demo
        description
        github
        Stack {
          id
          name
        }
        Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }


    allStrapiBlogs(sort: {fields: Date, order: DESC}, limit: 3) {
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