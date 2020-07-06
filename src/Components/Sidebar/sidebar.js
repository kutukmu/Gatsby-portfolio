import React from "react";
import style from "./sidebar.module.scss"
import Navbar from "../../constants/navItems"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"
const Sidebar = () => {


    return (
        <div className={style.sidebar}>
            <div className={style.top}>
                <div className={style.logo}><Link to="/">KerimK.</Link></div>
                <div className={style.btn}><button><IoMdClose></IoMdClose></button></div>
            </div>
            <Navbar />
            <div className={style.contact}><Link to="/contact">Contact</Link></div>
        </div>
    )
}

export default Sidebar;