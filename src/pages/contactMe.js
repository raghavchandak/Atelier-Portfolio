import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import * as styles from "../styles/contactMe.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Email, LinkedIn, Phone, WhatsApp } from "@mui/icons-material"

export default function contactMe({ data }) {
  const img = getImage(data.file.childImageSharp)

  return (
    <Layout>
      <div className={styles.info}>
        <div className={styles.desc}>
          <GatsbyImage image={img} alt="Profile picture" />
          <h1 className={styles.name}>Pooja Chandak Khaitan</h1>
          <h3 className={styles.name} style={{ color: "black" }}>
            Founder & Principle Interior Designer
          </h3>
        </div>
        <div className={styles.about}>
          <p className={styles.text}>
            Make it Simple, but Significant. In today’s world, the place you
            like to live and work at, says a lot about you. We help you build
            your dreams into reality, keeping in mind the practicality and
            behavioural pattern of the space and requirements of its end users.
            We ensure that equal amount of importance is given to every corner
            of the space, with utmost detailing and space utilisation. Pure
            designing is our forte. Playing with colour combinations, to
            lighting effects, we try to handover the most contemporary spaces,
            experimenting with new and different materials. Basic Vaastu
            compliance or 3D views, you can ask for it all.
          </p>
          <p className={styles.text} style={{ marginTop: "1rem" }}>
            {" "}
            Over time, we have worked with many renowned brands and different
            sectors, ranging from Residential, Commercial, Retail and
            Hospitality.
          </p>
          <h2
            style={{
              marginTop: "2rem",
              fontWeight: "1200",
              fontFamily: "Poiret One",
            }}
          >
            Contact Us At:
          </h2>
          <div className={styles.contact}>
            <div className={styles.contactDetails}>
              <Phone
                className={styles.icon}
                // style={{ backgroundColor: "blue" }}
              />
              <p className={styles.contactText}>+65 81093531</p>
            </div>
            <div className={styles.contactDetails}>
              <WhatsApp
                className={styles.icon}
                style={{ color: "white", backgroundColor: "#29AC00" }}
              />
              <p className={styles.contactText}>+91 9748747057</p>
            </div>
            <div className={styles.contactDetails}>
              <Email
                className={styles.icon}
                style={{ fontSize: "1.75rem", color: "#509CF7" }}
              />
              <a
                href="mailto:poojachandak.05@gmail.com"
                className={styles.contactText}
                style={{ textDecoration: "underline" }}
              >
                poojachandak.05@gmail.com
              </a>
            </div>
            <div className={styles.contactDetails}>
              <LinkedIn
                className={styles.icon}
                style={{ color: "#0A63BC", fontSize: "1.75rem" }}
              />
              <a
                href="https://www.linkedin.com/in/pooja-chandak-khaitan-8b3089140"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.contactText}>Pooja Chandak Khaitan</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContactUs {
    site {
      siteMetadata {
        owner
        title
      }
    }
    file(relativePath: { eq: "Contact_us.JPG" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          height: 500
          quality: 100
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
