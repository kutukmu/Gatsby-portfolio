import React from "react"
import style from "./Project.module.scss"
import Img from "gatsby-image"

import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ obj }) => {
  const { Title, demo, description, github, stack, Image } = obj
  console.log(demo)
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
          {stack.map((n, idx) => {
            return (
              <div key={idx} className={style.item}>
                {n.name}
              </div>
            )
          })}
        </div>
        <div className={style.links}>
          <a href={demo} target="_blank">
            <FaShareSquare role="button" />
          </a>
          <a href={github} rel="noopener noreferrer" target="_blank">
            {" "}
            <FaGithubSquare role="button" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
