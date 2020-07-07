import React, { useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import style from "./Layout.module.scss"
import "../../main.scss"
import Sidebar from "../Sidebar/sidebar"
const Layout = ({ children }) => {

    const [close, setClose] = useState(true)

    function closebtn() {
        setClose(true)
    }
    function open() {
        setClose(false)
    }



    return <div className={style.layout}>
        <Header handleOpen={open} />
        <Sidebar isClose={close} handleClose={closebtn} />
        {children}
        <Footer />
    </div>
}

export default Layout