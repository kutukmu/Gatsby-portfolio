import React from "react"
import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaDribbbleSquare } from "react-icons/fa"

const data = [
    {
        id: 1,
        name: "twitter",
        url: "https://twitter.com/Gatsbyup1",
        icon: <FaTwitterSquare className="social-icons" ></FaTwitterSquare>
    },
    {
        id: 2,
        name: "instagram",
        url: "https://www.instagram.com/gatsbyup/",
        icon: <FaInstagramSquare className="social-icons"></FaInstagramSquare>
    },
    {
        id: 3,
        name: "github",
        url: "https://github.com/kutukmu",
        icon: <FaGithubSquare className="social-icons"></FaGithubSquare>
    },
    {
        id: 4,
        name: "dribble",
        url: "https://dribbble.com/gatsbyup",
        icon: <FaDribbbleSquare className="social-icons"></FaDribbbleSquare>
    }
]

const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})


export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass && ""}`}>{links}</ul>
    )
}
