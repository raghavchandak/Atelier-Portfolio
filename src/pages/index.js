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

            console.log("w", imgWidth, "h", imgHeight)

            return (
              <GatsbyImage
                image={newimg}
                key={homeimg.childImageSharp.id}
                alt=""
                className={
                  imgHeight == 675 || imgHeight == 661
                    ? styles.big
                    : imgHeight > 15000
                    ? styles.extra
                    : imgHeight == 2133
                    ? styles.separate
                    : styles.small
                }
                loading="eager"
                objectFit="fill"
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
          gatsbyImageData(quality: 90, width: 1200)
          id
        }
        id
      }
    }
  }
`
