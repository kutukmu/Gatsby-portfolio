import React from "react";
import style from "./Title.module.scss";

const Title = ({ title, color }) => {
    console.log(color)
    return (
        <div className={style.title}>
            <div className={`${style.text}`} style={{ color: color }}>
                <h1>{title}</h1>
            </div>
            <div className={style.underline}> </div>
        </div>
    )
}

export default Title