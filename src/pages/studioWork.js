import { graphql } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/studioWork.module.css"
import Carousel from "react-material-ui-carousel"
import Modal from "react-modal"
import CloseIcon from "@mui/icons-material/Close"

let imageGallery = []
let selectedIndex = null

function StudioWork({ data }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [open, setOpen] = useState(false)
  const [showIndex, setShowIndex] = useState(0)

  const handleOpen = index => {
    setSelectedImage(getImage(imageGallery[index][0]))
    selectedIndex = index
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const customStyles = {
    overlay: {
      height: "90vh",
      zIndex: 50,
    },
    content: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "100vh",
    },
  }

  return (
    <Layout>
      <div
        className={styles.projects}
        style={{ display: open ? "none" : "grid" }}
      >
        {data.allContentfulStudioWork.nodes.map((work, index) => {
          imageGallery.push(work.images)
          let thumbImage = getImage(work.thumbnail)
          return (
            <div className={styles.card}>
              <GatsbyImage
                image={thumbImage}
                alt="Project Image"
                objectFit="contain"
                className={styles.img}
                onClick={() => handleOpen(index)}
              />
              <h1 className={styles.text}>{work.name}</h1>
            </div>
          )
        })}
        {open && selectedImage !== null && (
          <Modal isOpen={open} style={customStyles}>
            <CloseIcon
              style={{ position: "absolute", top: 20, right: 20, zIndex: 5 }}
              onClick={() => handleClose()}
            />
            <div className={styles.gallery}>
              <div className={styles.carousel}>
                <Carousel
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                  index={showIndex}
                >
                  {imageGallery[selectedIndex].map(i => {
                    let img = getImage(i)
                    return (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <GatsbyImage
                          image={img}
                          alt=""
                          objectFit="contain"
                          className={styles.carouselImg}
                        />
                      </div>
                    )
                  })}
                </Carousel>
              </div>
              <div className={styles.sideImages}>
                {imageGallery[selectedIndex].map((img, index) => {
                  let galleryImage = getImage(img)
                  return (
                    <div style={{ marginBottom: "1vh" }}>
                      <GatsbyImage
                        image={galleryImage}
                        alt="Gallery Image"
                        objectFit="contain"
                        onClick={() => setShowIndex(index)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  )
}

export default StudioWork

export const query = graphql`
  query StudioWorks {
    allContentfulStudioWork {
      nodes {
        images {
          id
          gatsbyImageData(
            quality: 100
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        thumbnail {
          gatsbyImageData(
            quality: 100
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        name
      }
    }
  }
`
