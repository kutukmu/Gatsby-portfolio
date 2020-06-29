import React from "react"
import Projects from "../Components/Projects/Projects"
import Layout from "../Components/Layout/Layout"


const Project = ({ data }) => {

    const { allStrapiProjects: { nodes: Project } } = data


    return (
        <Layout>
            <Projects list={Project} isBtn={false} />
        </Layout>
    )
}

export default Project


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
}`   