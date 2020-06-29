import React from "react"
import { Link } from "gatsby"
import style from "./Projects.module.scss"
import Title from "../Title/Title"
import Project from "../Project/Project"

const Projects = ({ list, isBtn }) => {


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
                    {isBtn && <Link className={style.seemore} to="/projects" >See More Projects</Link>}
                </div>
            </div>
        </div>
    )
}

export default Projects