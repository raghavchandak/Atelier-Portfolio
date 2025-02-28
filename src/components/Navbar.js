import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MenuIcon from "@mui/icons-material/Menu"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query Company {
      site {
        siteMetadata {
          owner
          title
        }
      }
      file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110)
        }
      }
    }
  `)

  const activeStyle = {
    textDecorationLine: "underline",
    // textDecorationThickness: "10px",
    textUnderlineOffset: "5px",
    fontWeight: "bold",
  }

  const [toggle, setToggle] = useState(false)

  const image = getImage(data.file.childImageSharp)

  const handleClick = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    setToggle(!toggle)
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <GatsbyImage
            image={image}
            alt="Logo"
            style={{
              margin: "0.5rem",
              alignSelf: "start",
            }}
          />
        </Link>
        <div className="navbar-links">
          <Link to="/projects" className="link" activeStyle={activeStyle}>
            <h4 className="options">Project Gallery</h4>
          </Link>
          <Link to="/studioWork" className="link" activeStyle={activeStyle}>
            <h4 className="options">Studio Work</h4>
          </Link>
          <Link to="/testimonials/" className="link" activeStyle={activeStyle}>
            <h4 className="options">Testimonials</h4>
          </Link>
          <Link to="/contactMe/" className="link" activeStyle={activeStyle}>
            <h4 className="options">About Us</h4>
          </Link>
        </div>
        <MenuIcon
          className="icon"
          fontSize="large"
          onClick={handleClick}
        />
      </div>
      {toggle && (
        <div className="vertical-nav">
          <Link to="/projects" className="link" activeStyle={activeStyle}>
            <h4 className="options">Project Gallery</h4>
          </Link>
          <Link to="/studioWork" className="link" activeStyle={activeStyle}>
            <h4 className="options">Studio Work</h4>
          </Link>
          <Link to="/testimonials/" className="link" activeStyle={activeStyle}>
            <h4 className="options">Testimonials</h4>
          </Link>
          <Link to="/contactMe/" className="link" activeStyle={activeStyle}>
            <h4 className="options">About Us</h4>
          </Link>
        </div>
      )}
    </div>
  )
}
