import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import style from "./Hero.module.scss"
import gsap from "gsap"
const Hero = () => {

    let layer = useRef(null)
    let inner = useRef(null)
    let layer2 = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let p = useRef(null)
    let btn = useRef(null)

    useEffect(() => {



        gsap.from([layer, layer2], {
            duration: 1.2,
            width: 0,
            skewX: 5,
            ease: "power3.inOut",
            stagger: {
                amount: .5
            }
        })

        gsap.to(inner, {
            delay: 1,
            duration: 0,
            opacity: 1
        })

        gsap.from([line1.children, line2.children, line3.children], {
            delay: 1,
            duration: 1.1,
            y: 120,
            ease: "power3.inOut",
            skewY: 5,
            stagger: {
                amount: .2
            }
        })

        gsap.from(p, {
            delay: 1.8,
            duration: 1.5,
            y: 80,
            opacity: 0,
            ease: "power3.inOut",

        })

        gsap.to(btn, {
            duration: 1,
            delay: 3,
            height: 0,
            ease: "power3.inOut"
        })


    })

    return (
        <div className={style.hero} >

            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.layer} ref={el => layer = el}></div>
                    <div className={style.layer2} ref={el => layer2 = el}></div>
                    <div className={style.inner} ref={el => inner = el} >
                        <div className={style.line} ref={el => line1 = el}>
                            <h5>Hi, my name is </h5>
                        </div>
                        <div className={style.line} ref={el => line2 = el}>
                            <h1>Kerim Kutuk</h1>
                        </div>

                        <div className={style.line} ref={el => line3 = el}>
                            <h3>Web design is my passion </h3>
                        </div>
                        <p ref={el => p = el}>I'm a software engineer who has a passion for combining clean code with attractive design. I am also Master student at Chicago State University and studying Computer Science </p>
                        <div className={style.touch} >
                            <div className={style.btnlayer} ref={el => btn = el}></div>
                            <Link to="/contact">Get in touch</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Hero