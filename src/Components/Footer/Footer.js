import React from "react";
import fstyle from "./footer.module.scss"
import Social from "../../constants/socialLinks"
const Footer = () => {

    return (
        <section className={fstyle.footer}>
            <div className={fstyle.container}>
                <div className={fstyle.wrapper}>
                    <div className={fstyle.inner}>
                        <div className={fstyle.social}>
                            <Social />
                        </div>

                        <p>Kerim Kutuk {new Date().getFullYear()} &copy;</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;