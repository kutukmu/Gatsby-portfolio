import React from "react"
import style from "./Project.module.scss"
import Img from "gatsby-image"
import Link from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ obj }) => {


    const { Title, demo, description, github, Stack, Image } = obj;
    console.log(Image)


    return (
        <div className={style.box}>

            <div className={style.img}>
                <div className={style.imglayer}></div>
                <Img fluid={Image.childImageSharp.fluid} className={style.image} />
            </div>

            <div className={style.info}>
                <div className={style.title}>

                    <h3>{Title}</h3>
                </div>
                <div className={style.description}>
                    <div className={style.inner}>{description}</div>
                </div>
                <div className={style.stack}>
                    {Stack.map(n => {
                        return <div className={style.item}>{n.name}</div>
                    })}
                </div>
                <div className={style.links}>
                    <a href={demo}><FaShareSquare /></a>
                    <a href={github}> <FaGithubSquare /></a>

                </div>
            </div>


        </div>
    )
}

export default Project