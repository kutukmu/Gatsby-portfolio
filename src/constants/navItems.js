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
        name: "Projects",
        url: "/projects"
    },
    {
        name: "Blog",
        url: "/blogs"
    },
]

const items = navItems.map((n, idx) => {
    return <li key={idx}><Link to={n.url}>{n.name}</Link></li>
})

const Navbar = () => {
    return <ul >
        {items}
    </ul>
}

export default Navbar;