import React, { useState, useRef, useEffect } from "react"
import services from "../../constants/services"
import style from "./service.module.scss"
import Title from "../Title/Title"
import gsap from "gsap"


const Services = () => {

    let box = useRef(null)

    const [state, setState] = useState(0);
    const [click, setClick] = useState(0)
    const object = services[state]

    useEffect(() => {

        if (click) {
            animation()
        }

    }, [click])

    function animation() {
        let tl = gsap.timeline();
        tl.to(box, {
            duration: 1,
            x: -950,
            ease: "power3.inOut"
        }).to(box, {
            duration: 1,
            x: 0
        })
    }





    return (
        <div className={style.services}>
            <Title title="Services" />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        <div className={style.main}>
                            <div className={style.box} ref={el => box = el}>
                                <div className={style.bluebox}>
                                    <h1>{object.title}</h1>

                                </div>

                                <p>{object.text}</p>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <div className={style.btnwrapper}>
                                {services.map((n, idx) => {
                                    return <div key={idx} onClick={() => {
                                        setClick(prev => {
                                            return {
                                                click: prev.click + 1
                                            }
                                        })

                                        setTimeout(() => {
                                            setState(idx)
                                        }, 1000)






                                    }} className={style.button}>
                                        {n.title}
                                    </div>
                                })}



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}


export default Services