import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/testimonials.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const colors = ["rgb(135,206,235)", "rgba(244,194,194,0.8)", "blue"]

export default function testimonial({ data }) {
  return (
    <Layout>
      {data.allContentfulTestimonial.nodes.map((testimonial, index) => {
        const image = getImage(testimonial.image)
        return (
          <div
            className={styles.testimonial}
            style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
          >
            <GatsbyImage
              image={image}
              alt="Client"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
            <div
              className={styles.card}
              style={{ backgroundColor: colors[index % 3] }}
            >
              <h2 className={styles.client}>{testimonial.name}</h2>
              <h3>{testimonial.testimonial.testimonial}</h3>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query Testimonials {
    allContentfulTestimonial(sort: { order: ASC, fields: contentful_id }) {
      nodes {
        name
        testimonial {
          testimonial
        }
        image {
          gatsbyImageData(width: 200, height: 200, quality: 100)
        }
      }
    }
  }
`
