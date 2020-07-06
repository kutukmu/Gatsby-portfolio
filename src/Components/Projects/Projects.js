import React from "react"
import { Link } from "gatsby"
import style from "./Projects.module.scss"
import Title from "../Title/Title"
import Project from "../Project/Project"

const Projects = ({ list, link }) => {


    return (
        <div className={style.projects}>
            <Title title="Featured Projects" color="black" />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        <div className={style.project}>

                            {list.map(n => {
                                return <Project obj={n} />
                            })}
                        </div>
                    </div>
                    <Link className={style.seemore} to={`/${(link === "projects") ? "projects" : ""}`} >{(link === "projects") ? "See More" : "Go Back"}</Link>
                </div>
            </div>
        </div>
    )
}

export default Projects