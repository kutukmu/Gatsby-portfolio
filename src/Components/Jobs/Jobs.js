import React from "react";
import style from "./Jobs.module.scss"
import { useStaticQuery, graphql } from 'gatsby'
import { GoLocation } from "react-icons/go"
import { FaAngleDoubleRight } from "react-icons/fa"
import Title from "../Title/Title"


const query = graphql`
{
  allStrapiJobs {
    nodes {
      City
      Company
      Date
      Position
      id
      Description {
        id
        name
      }
    }
  }
}
`



const Jobs = () => {

    const { allStrapiJobs: { nodes: jobs } } = useStaticQuery(query)

    const { City, Company, Date, Position, Description } = jobs

    console.log(jobs)
    return (
        <div className={style.jobs}>
            <Title title="Experience" color="white" />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        <div className={style.buttons}>
                            <button>Uber</button>
                            <button>Uber</button>
                            <button>Uber</button>
                        </div>
                        <div className={style.info}>
                            <div classname={style.compName}>
                                <h1>Uber</h1>
                            </div>
                            <div className={style.detail}>
                                <h4>Position</h4>
                                <h4>Date</h4>
                                <div className={style.location}>
                                    <GoLocation />
                                    <h4>Location</h4>
                                </div>

                            </div>
                            <div className={style.description}>
                                <div className={style.textIcon}>
                                    <div className={style.icon}>
                                        <FaAngleDoubleRight />
                                    </div>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu</p>
                                </div>
                                <div className={style.textIcon}>
                                    <div className={style.icon}>
                                        <FaAngleDoubleRight />
                                    </div>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs