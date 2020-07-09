import React from "react"
import { graphql, Link } from "gatsby"
import style from "./template.module.scss"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/Seo"
export const query = graphql`
query MyQuery($slug: String!) {
  strapiBlogs(slug: {eq: $slug}) {
    Content
    Image{
        childImageSharp {
            fluid {
              src
            }
          }
    }
    Title
    Description
    
  }
}
`


const Template = ({ data }) => {

    const { Title, Content, Description } = data.strapiBlogs

    return (
        <Layout>
            <SEO title={Title} desc={Description} />
            <div className={style.template}>
                <div className={style.container}>
                    <div className={style.wrapper}>
                        <div className={style.inner}>
                            <div className={style.img}>
                                <Img className={style.blogimage} fluid={data.strapiBlogs.Image.childImageSharp.fluid} />
                            </div>
                            <div className={style.content}>
                                <ReactMarkdown source={Content} />

                                <Link to="/blogs" className={style.btn}>Go Back</Link>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Template