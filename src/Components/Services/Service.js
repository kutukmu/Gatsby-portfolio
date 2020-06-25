import React from "react"
import services from "../../constants/services"
import style from "./service.module.scss"
const Services = () => {

    return (
        <div>
            {services.map(n => {
                return <div>

                    <div>
                        {n.icon}
                    </div>
                    <div>
                        <h1>{n.title}</h1>
                        <p>{n.text}</p>
                    </div>


                </div>
            })}
        </div>
    )


}


export default Services