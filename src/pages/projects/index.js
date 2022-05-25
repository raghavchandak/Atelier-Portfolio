import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../styles/projects.module.css"
import Layout from "../../components/Layout"

export default function index({ data }) {
  return (
    <Layout>
      <div className={styles.projects}>
        {data.allContentfulProject.nodes.map(project => {
          let thumbImage = getImage(project.thumbnail)
          return (
            <Link to={"/projects/" + project.slug} className={styles.card}>
              <GatsbyImage
                image={thumbImage}
                alt="Project Image"
                objectFit="contain"
                className={styles.img}
              />
              <h1 className={styles.text}>
                {project.title}
              </h1>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allContentfulProject(sort: { order: ASC, fields: order }) {
      nodes {
        title
        thumbnail {
          gatsbyImageData(layout: CONSTRAINED)
        }
        slug
        images {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
