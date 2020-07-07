import React from "react";
import style from "./sidebar.module.scss"
import Navbar from "../../constants/navItems"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"
const Sidebar = ({ isClose, handleClose }) => {


    return (
        <div className={`${style.sidebar} ${(isClose) ? "" : style.open}`}>
            <div className={style.top}>
                <div className={style.logo}><Link to="/">KerimK.</Link></div>
                <div className={style.btn}><button type="button" aria-label="Save" onClick={() => handleClose()}><IoMdClose role="icon"></IoMdClose></button></div>
            </div>
            <Navbar />
            <div className={style.contactbtn}><Link to="/contact">Contact</Link></div>
        </div>
    )
}

export default Sidebar;