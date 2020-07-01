import React from "react"
import { Link } from "gatsby"
import style from "./Header.module.scss"
import Navbar from "../../constants/navItems"

const Header = () => {
    return <header>
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.inner}>
                    <div className={style.logo}><Link to="/">KerimK.</Link></div>
                    <nav className={style.nav}>
                        <Navbar />
                    </nav>
                    <div className={style.cv}>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>


}


export default Header