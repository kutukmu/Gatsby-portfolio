import React, { useState } from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/Seo"
const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")



    return (





        <Layout>
            <SEO title="Contact" />

            <div className="contact">
                <div className="container">
                    <div className="wrapper">
                        <div className="contact-inner">
                            <div className="contact-form">
                                <h1>Get In Touch </h1>
                                <form action="https://formspree.io/mknqvezz" method="POST">
                                    <input placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                                    <input placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    <textarea rows="6" placeholder="Message" name="message" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                    <button type="submit"> Submit Here</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact