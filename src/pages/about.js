import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collaboration from "../components/collaboration"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_2_darker.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Banner imageFluid={images.banner.childImageSharp.fluid} text="About" />
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Collaboration />
      </Container>
    </Layout>
  )
}

export default About
