import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import style from "./Layout.module.scss"
import "../../main.scss"
import Sidebar from "../Sidebar/sidebar"
const Layout = ({ children }) => {
    return <div className={style.layout}>
        <Header />
        <Sidebar />
        {children}
        <Footer />
    </div>
}

export default Layout