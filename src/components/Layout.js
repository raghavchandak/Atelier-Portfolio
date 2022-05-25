import React from "react"
import Navbar from "./Navbar"
import "@fontsource/poiret-one"; 
import * as styles from "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div style={{ paddingTop: "7rem" }}>
      <Navbar />
      {children}
    </div>
  )
}
