import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%`, maxHeight: `100%` }}>
      <Image />
    </div>
    <Container>
      <h1>Control System Studio</h1>

      <p>
        Control System Studio is an Eclipse-based collection of tools to monitor
        and operate large scale control systems, such as the ones in the
        accelerator community. It's a product of the collaboration between
        different laboratories and universities.
      </p>

      <h2>Our Collaboration</h2>
      <Logos />
    </Container>
  </Layout>
)

const Logos = () => {
  const images = useStaticQuery(graphql`
    query logos {
      ess: file(relativePath: { eq: "ESS_logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  `)

  return (
    <div>
      {images.map(image => (
        <Img
          key={image.id}
          fluid={image.childImageSharp.fluid}
          style={{ maxWidth: 99, maxHeight: 99 }}
        />
      )
      )}
    </div>
  )
}

export default IndexPage
