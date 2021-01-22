import React from "react"
import { graphql } from 'gatsby'
import Layout from "../Components/Layout/Layout"
import Img from "gatsby-image"
import SEO from "../Components/Seo"
const About = ({ data }) => {


    const { file: { childImageSharp: { fluid } } } = data
    return (
        <Layout>
            <SEO title="About" />
            <div className="about">
                <div className="container">
                    <div className="wrapper">
                        <div className="about-inner">
                            <div className="about-inner-left">
                                <h1>Hey, I'm Kerim</h1>
                                <p> I am a Computer Science grad student, with previous experience as a Software Engineer, and have a passion for coding and a relentless drive for continuous improvement in all of my endeavors.</p>
                                <div className="about-text-underline"></div>
                                <p>I am a Computer Science grad student, with previous experience as a Software Engineer, and have a passion for coding and a relentless drive for continuous improvement in all of my endeavors.</p>
                                <p>Currently, I am a full-stack Developer, soaking up as much knowledge and practice as I can in an attempt to perfect my craft. I have experience using Python, TensorFlow, ReactJS, Machine Learning, C++, Javascript, SQL, Node.js and I've just started diving into deep learning and self-driving car technologies.</p>
                                <p>In addition to software development, I have broad interests including science education, management, science marketing, and product management, science policy, education policy, editing, and writing for both scientific and general audiences.</p>
                            </div>
                            <div className="about-inner-rigth">
                                <div className="about-img-container">
                                    <Img fluid={fluid} className="about-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About

export const query = graphql`
  {
    file(relativePath: {eq: "portfolio.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`