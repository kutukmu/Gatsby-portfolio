import React from "react"
import { Link } from "gatsby"
const navItems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Projects",
        url: "/projects"
    },
    {
        name: "Blog",
        url: "/blogs"
    },
]

const items = navItems.map((n, idx) => {
    return <li><Link to={n.url}>{n.name}</Link></li>
})

const Navbar = ({ side }) => {
    return <ul className={`${side && ""}`}>
        {items}
    </ul>
}

export default Navbar;