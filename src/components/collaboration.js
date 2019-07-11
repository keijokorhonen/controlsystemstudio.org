import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Collaboration = () => {
  const images = useStaticQuery(graphql`
    query {
      ess: file(relativePath: { eq: "ESS_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brok: file(relativePath: { eq: "Brok_Logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desy: file(relativePath: { eq: "desy_Logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frib: file(relativePath: { eq: "FRIB_logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iter: file(relativePath: { eq: "iter_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sns: file(
        relativePath: { eq: "Spallation_Neutron_Source_logo_v01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Flex>
      <a
        href="https://europeanspallationsource.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={images.ess.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
      <a
        href="http://www.bnl.gov/world/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={images.brok.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
      <a href="http://www.desy.de/" target="_blank" rel="noopener noreferrer">
        <Img
          fluid={images.desy.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
      <a
        href="http://www.frib.msu.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={images.frib.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
      <a href="http://www.iter.org/" target="_blank" rel="noopener noreferrer">
        <Img
          fluid={images.iter.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
      <a
        href="http://controlsystemstudio.org/cs-studio/img/collaboration/SNS.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={images.sns.childImageSharp.fluid}
          style={{ minWidth: 99 }}
        />
      </a>
    </Flex>
  )
}

export default Collaboration
