import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <div className={styles.gallery}>
        {data.allFile.nodes.map(homeimg => {
          if (homeimg.childImageSharp != null) {
            let newimg = getImage(homeimg)
            const imgWidth = homeimg.childImageSharp.gatsbyImageData.width
            const imgHeight = homeimg.childImageSharp.gatsbyImageData.height

            return (
              <GatsbyImage
                image={newimg}
                key={homeimg.childImageSharp.id}
                alt=""
                objectFit="cover"
                className={
                  imgWidth > 4000
                    ? styles.big
                    : imgWidth > 260
                    ? imgHeight == 4032
                      ? styles.separate
                      : styles.small
                    : styles.extra
                }
                objectPosition={imgWidth > 4000 ? "50% 50%" : "50% 0%"}
              />
            )
          }
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomeGrid {
    allFile(
      sort: { order: ASC, fields: name }
      filter: { absolutePath: { regex: "/images/home/" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            quality: 100
          )
          id
        }
        id
      }
    }
  }
`
