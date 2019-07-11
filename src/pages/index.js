import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const Highlight = styled.span`
  color: #302a72;
  font-weight: bold;
`

const GreyBackground = styled.div`
  background-color: #f5f5f5;
`

const WhiteBackground = styled.div`
  background-color: #ffffff;
`

const DownloadButton = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  background-color: #302a72;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 15px 20px;
  margin: 0 0 auto;
  transition: background-color 100ms ease-in;

  &:hover {
    background-color: #46417f;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ContentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
  @media (max-width: 468px) {
    flex-direction: column;
    & > p {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`

const ContentFlexLeft = styled(ContentFlex)`
  & > p {
    margin-right: 3rem;
  }

  @media (max-width: 468px) {
    & > p {
      margin-right: 0px;
      margin-bottom: 1rem;
    }
`

const ContentFlexRight = styled(ContentFlex)`
  & > p {
    margin-left: 3rem;
  }

  @media (max-width: 468px) {
    & > p {
      margin-left: 0px;
      margin-top: 1rem;
    }
`

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "iso_new_england_control_room_large_jpg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4877, maxHeight: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      pvmg: file(relativePath: { eq: "pvManagerGraphene.png" }) {
        childImageSharp {
          fluid(maxWidth: 437) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boy: file(relativePath: { eq: "boy-controlroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 437) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      databrowser: file(relativePath: { eq: "dataBrowser.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 655) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ width: `100%` }}>
        <BackgroundImage
          fluid={images.banner.childImageSharp.fluid}
          style={{ height: 350, display: `flex`, justifyContent: `center` }}
        >
          <Container>
            <h1>
              <span
                style={{
                  backgroundColor: `#302a72`,
                  color: `#ffffff`,
                  padding: `0.5rem 0.5rem`,
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                }}
              >
                Bring Your Control System to the Next Level
              </span>
            </h1>
          </Container>
        </BackgroundImage>
      </div>
      <div>
        <Container>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h1>Control System Studio</h1>
            <DownloadButton href="http://controlsystemstudio.org/download.html">
              Download
            </DownloadButton>
          </div>
          <p>
            <Highlight>Control System Studio</Highlight> is an Eclipse-based
            collection of tools to monitor and operate large scale control
            systems, such as the ones in the accelerator community. It's a
            product of the collaboration between different laboratories and
            universities.
          </p>
        </Container>
        <GreyBackground style={{ padding: `2rem 0`, marginBottom: `2rem` }}>
          <Container>
            <h2>
              <span
                style={{
                  backgroundColor: `#302a72`,
                  color: `#ffffff`,
                  padding: `0.5rem 0.5rem`,
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                }}
              >
              EASILY INTEGRATES WITH YOUR CONTROL SYSTEM
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
                With PVManager at the center visualize any datasource service or
                event driven. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Img
                fluid={images.pvmg.childImageSharp.fluid}
                style={{ maxWidth: 437, width: `100%` }}
              />
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <WhiteBackground style={{ padding: `2rem 0`, marginBottom: `2rem` }}>
          <Container>
            <h2>
            <span
                style={{
                  backgroundColor: `#302a72`,
                  color: `#ffffff`,
                  padding: `0.5rem 0.5rem`,
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                }}
              >
              PRODUCTION QUALITY USER INTERFACES
              </span>
            </h2>
            <ContentFlexRight>
              <Img
                fluid={images.boy.childImageSharp.fluid}
                style={{ maxWidth: 437, width: `100%` }}
              />
              <p>
                With a focus on control room screens and viewing on the fly
                correlations. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </ContentFlexRight>
          </Container>
        </WhiteBackground>
        <GreyBackground style={{ padding: `2rem 0`, marginBottom: `2rem` }}>
          <Container>
            <h2>
            <span
                style={{
                  backgroundColor: `#302a72`,
                  color: `#ffffff`,
                  padding: `0.5rem 0.5rem`,
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                }}
              >
              THE POWERFUL DATABROWSER
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
                View archived data and live data together. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <Img
                fluid={images.databrowser.childImageSharp.fluid}
                style={{ maxWidth: 655, width: `100%` }}
              />
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <Container>
          <h2>Our Collaboration</h2>
          <Flex style={{ marginBottom: `2rem` }}>
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
            <a
              href="http://www.desy.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="http://www.iter.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
