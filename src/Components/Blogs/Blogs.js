import React from "react"
import style from "./Blogs.module.scss"
import Title from "../Title/Title"
import Blog from "../Blog/Blog"
const Blogs = ({ blog }) => {




    return (
        <div className={style.blogs}>
            <Title title="Blog Posts" color="black" />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        {blog.map((n, idx) => {
                            return <div className={style.box}><Blog key={idx} {...n} /></div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Blogs