import React from "react";
import style from "./Title.module.scss";

const Title = ({ title }) => {
    return (
        <div className={style.title}>
            <div className={style.text}>
                <h1>{title}</h1>
            </div>
            <div className={style.underline}> </div>
        </div>
    )
}

export default Title