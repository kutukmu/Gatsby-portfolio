import React from "react"
import { Link } from "gatsby"
import style from "./Hero.module.scss"
const Hero = () => {

    return (
        <div className={style.hero}>
            <div className={style.container}>
                <div className={style.wrapper}>

                    <div className={style.inner}>
                        <div className={style.line}>
                            <h5>Hi, my name is </h5>
                        </div>
                        <div className={style.line}>
                            <h1>Kerim Kutuk</h1>
                        </div>

                        <div className={style.line}>
                            <h3>Web design is my passion </h3>
                        </div>
                        <p>I'm a software engineer who has a passion about combining clean code with attractive design and master degree in Computer Science</p>
                        <div className={style.touch}>
                            <Link to="/contact">Get in touch</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Hero