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
                                <h1>Hey, I'm Kerim </h1>
                                <p> I'm a self-taught software engineer and I have a passion about combining clean code with attractive design. </p>
                                <div className="about-text-underline"></div>
                                <p>I'm a master student at Chicago State University studying computer science. I have experience developing and creating websites, from singe page websites to multipages. One of my aim when I create software is coding clean and effective to prevent confusion between colleagues. And I also like to provide functional and pixel-perfect user experiences.</p>
                                <p>One of my passion in this life is coding. Since I love coding I also like to learn modern technologies to keep myself up to date. And I believe that it helps me to create seamless user experiences with pure, effective, and flexible code. I'm always looking for chances to work with people who like to share their skills as much as I want to learn.At th end, my main aim is to create something creative with people that help me to discover my skills.</p>
                                <p>When I'm not coding, I'm usually running, traveling, watching movies, or listening music.</p>
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