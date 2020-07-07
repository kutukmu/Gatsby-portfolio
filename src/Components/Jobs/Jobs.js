// import React, { useState } from "react";
// import style from "./Jobs.module.scss"
// import { useStaticQuery, graphql } from 'gatsby'
// import { GoLocation } from "react-icons/go"
// import { FaAngleDoubleRight } from "react-icons/fa"
// import Title from "../Title/Title"


// const query = graphql`
// {
//   allStrapiJobs {
//     nodes {
//       City
//       Company
//       Date
//       Position
//       id
//       Description {
//         id
//         name
//       }
//     }
//   }
// }
// `



// const Jobs = () => {

//     const [state, setState] = useState(0)

//     const { allStrapiJobs: { nodes: jobs } } = useStaticQuery(query)

//     const { City, Company, Date, Position, Description } = jobs[state]

//     console.log(City, Company, Date, Position, Description)
//     return (
//         <div className={style.jobs}>
//             <Title title="Experience" color="black" />
//             <div className={style.container}>
//                 <div className={style.wrapper}>
//                     <div className={style.inner}>
//                         <div className={style.buttons}>
//                             {jobs.map((n, idx) => {
//                                 return <button onClick={() => setState(idx)} className={(idx === state) ? style.active : ""}>{n.Company}</button>
//                             })}


//                         </div>
//                         <div className={style.info}>
//                             <div classname={style.compName}>
//                                 <h1>{Company}</h1>
//                             </div>
//                             <div className={style.detail}>
//                                 <h4>{Position}</h4>
//                                 <h4>{Date}</h4>
//                                 <div className={style.location}>
//                                     <GoLocation />
//                                     <h4>{City}</h4>
//                                 </div>

//                             </div>
//                             <div className={style.description}>

//                                 {
//                                     Description.map(n => {
//                                         return <div className={style.textIcon}>
//                                             <div className={style.icon}>
//                                                 <FaAngleDoubleRight />
//                                             </div>

//                                             <p>{n.name}</p>
//                                         </div>
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Jobs