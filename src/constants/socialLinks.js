import React from "react"
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaLinkedin,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    name: "twitter",
    url: "https://twitter.com/Gatsbyup1",
    icon: <FaTwitterSquare className="social-icons"></FaTwitterSquare>,
  },
  {
    id: 2,
    name: "instagram",
    url: "https://www.instagram.com/gatsbyup/",
    icon: <FaInstagramSquare className="social-icons"></FaInstagramSquare>,
  },
  {
    id: 3,
    name: "github",
    url: "https://github.com/kutukmu",
    icon: <FaGithubSquare className="social-icons"></FaGithubSquare>,
  },
  {
    id: 4,
    name: "dribble",
    url: "https://dribbble.com/gatsbyup",
    icon: <FaDribbbleSquare className="social-icons"></FaDribbbleSquare>,
  },
  {
    id: 4,
    name: "linkedin",
    url: "https://www.linkedin.com/in/kerim-kutuk-8258291b3/",
    icon: <FaLinkedin className="social-icons"></FaLinkedin>,
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul className={`social-links ${styleClass && ""}`}>{links}</ul>
}
