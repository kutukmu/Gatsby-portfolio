import React from "react"
import Layout from "../Components/Layout/Layout"
import Hero from "../Components/Hero/Hero"
import Services from "../Components/Services/Service"
import { graphql } from "gatsby"
import Projects from "../Components/Projects/Projects"
import SEO from "../Components/Seo"
import "../main.scss"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: Project },
  } = data

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Services />
        <Projects list={Project} link="projects" />
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        Title
        demo
        description
        github
        stack {
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
  }
`
