import React from "react"
import services from "../../constants/services"
import style from "./service.module.scss"
import Title from "../Title/Title"
const Services = () => {

    return (
        <div className={style.services}>
            <Title title="Services" />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        {services.map((n, idx) => {
                            return <div key={idx} className={style.card}>

                                <div className={style.icon}>
                                    {n.icon}
                                </div>
                                <div className={style.info}>
                                    <h1>{n.title}</h1>
                                    <p>{n.text}</p>
                                </div>


                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )


}


export default Services