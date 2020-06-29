import React from "react"
import style from "./Blog.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ Content, Date, Description, Title, slug, Image }) => {

    console.log(Image)

    return (
        <div className={style.blog}>
            <div className={style.img}>
                <Img fluid={Image.childImageSharp.fluid} />
            </div>
            <div className={style.desc}>
                <h3>{Title}</h3>
                <p>{Description.substr(0, 150)}...</p>
            </div>
            <div className={style.link}>
                <Link to={`/blogs/${slug}`}>Read More</Link>
            </div>
        </div>
    )
}


export default Blog;