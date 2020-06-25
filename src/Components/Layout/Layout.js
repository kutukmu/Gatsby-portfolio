import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import style from "./Layout.module.scss"
const Layout = ({ children }) => {
    return <div className={style.layout}>
        <Header />
        {children}
        <Footer />
    </div>
}

export default Layout