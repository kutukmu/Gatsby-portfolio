import React from "react";
import fstyle from "./footer.module.scss"
const Footer = () => {

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className={fstyle.inner}>
                        <div className={fstyle.social}></div>
                        <p>Kerim Kutuk {new Date().getFullYear()} &copy;</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;