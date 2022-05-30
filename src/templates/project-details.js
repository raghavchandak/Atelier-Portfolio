import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import Carousel from "react-material-ui-carousel"
import Modal from "react-modal"
import CloseIcon from "@mui/icons-material/Close"

function ProjectDetails({ data }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState(null)

  let fetchedImages = data.contentfulProject.images

  const setCarouselArray = index => {
    let carouselImages = []
    for (let j = index; j < fetchedImages.length; j++)
      carouselImages.push(fetchedImages[j])
    for (let j = 0; j < index; j++) carouselImages.push(fetchedImages[j])
    setImages(carouselImages)
  }

  const handleOpen = (i, index) => {
    setSelectedImage(i)
    setCarouselArray(index)
    setOpen(true)
  }

  const handleClose = () => {
    setImages([])
    setOpen(false)
  }

  const customStyles = {
    overlay: {
      height: "100vh",
      zIndex: 50,
    },
    content: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
  }

  return (
    <Layout>
      <div
        className={styles.details}
        style={{ overflow: open ? "hidden" : "none" }}
      >
        <h1 className={styles.title}>{data.contentfulProject.title}</h1>
      </div>
      <div className={styles.imageGrid}>
        {data.contentfulProject.images.map((i, key) => {
          const img = getImage(i)
          return (
            <div className={styles.projectImage}>
              <GatsbyImage
                image={img}
                alt="Project image"
                onClick={() => handleOpen(i, key)}
                objectFit="contain"
              />
            </div>
          )
        })}
        {open && selectedImage !== null && (
          <Modal isOpen={open} style={customStyles}>
            <CloseIcon
              style={{ position: "absolute", top: 20, right: 20, zIndex: 5 }}
              onClick={() => handleClose()}
            />
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              swipe={false}
            >
              {images.map(i => {
                let img = getImage(i)
                return (
                  <div className={styles.img}>
                    <GatsbyImage image={img} alt="" objectFit="contain" />
                  </div>
                )
              })}
            </Carousel>
          </Modal>
        )}
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      images {
        gatsbyImageData(
          aspectRatio: 1.78
          height: 650
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
