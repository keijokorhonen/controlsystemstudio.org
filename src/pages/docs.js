import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faLightbulb, faThumbsUp, faSyncAlt } from '@fortawesome/free-solid-svg-icons'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const Grid = styled.div`
display: grid;
grid-template-columns: 100%;

@media only screen and (min-width: 468px) {
    grid-template-columns: 50% 50%;
}

@media only screen and (min-width: 992px) {
    grid-template-columns: 50% 50%;
}

@media only screen and (min-width: 1200px) {
    grid-template-columns: 33.3% 33.3% 33.3%;
}
`

const Showcase = styled.a`
text-align: center;
padding: 1rem;
margin: 1rem;
background-color: #f5f5f5;
text-decoration: none;
color: #000000;
transition: box-shadow 100ms ease-in;


&:hover {
    color: #302a72;
    box-shadow: 0 0 3px 1px #0c0c0c;
}
`

const About = () => {
  return (
    <Layout>
      <SEO title="Docs" />
      <Container>
        <h1>Docs</h1>
        <Grid>
          <Showcase
            href="https://drive.google.com/drive/folders/0B_ikNAN_jxjPR05WbFFuRmliMnc?tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBell} size="2x" />
            <h3>Management Review Meetings</h3>
            <p>
              Management holds a yearly meeting to reevaluate the collaboration
              and policy and objectives.
            </p>
          </Showcase>
          <Showcase
            href="https://drive.google.com/folderview?id=0B_ikNAN_jxjPWmF6b3plYV8zbWM&usp=sharing_eid&tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBullhorn} size="2x" />
            <h3>Meeting Minutes</h3>
            <p>
              There is a monthly meeting at the first Wednesday of the month.
            </p>
          </Showcase>
          <Showcase
            href="https://github.com/ControlSystemStudio/cs-studio/labels/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLightbulb} size="2x" />
            <h3>Product Realization</h3>
            <p>Specifications and interfaces, design and development</p>
          </Showcase>
          <Showcase
            href="https://docs.google.com/forms/d/1XFHA-tD1oWtcQiHW3IuMpnc6n5pM-b7wxZUp7Xq8Mps/viewanalytics#start=publishanalytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
            <h3>Customer requirements and customer satisfaction</h3>
            <p>User stories and customer feedback</p>
          </Showcase>
          <Showcase
            href="https://github.com/ControlSystemStudio/cs-studio/pulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
            <h3>Measurement, analysis and improvement</h3>
            <p>Releases are monthly "sprints". Corrective/preventative action. Control of nonconforming product. Internal audits.</p>
          </Showcase>
          <Showcase
            href="http://sourceforge.net/p/cs-studio/mailman/cs-studio-core"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h3>Notices</h3>
            <p>Notices are emailed to the core email list.</p>
          </Showcase>
        </Grid>
        <h2>Policy</h2>
        <p>
          Through a strategy of continuous improvement and teamwork, the Control
          System Studio Collaboration is dedicated to supplying control system
          tools for machine and experiment operator interfaces, automation and
          service integration to enable our users to achieve their scientific
          objectives.
        </p>
        <p>The foundation for achieving our commitment is based on:</p>
        <ul>
          <li>understanding and meeting the requirements of our users,</li>
          <li>
            continuously improving all processes related to the Control System
            Studio product,
          </li>
          <li>
            effectively utilizing the creative talents in the collaboration,
          </li>
          <li>and meeting statutory, regulatory, and other requirements.</li>
        </ul>
        <h2>Objectives</h2>
        <ul>
          <li>
            90% User satisfaction from registered sites with a site
            representative
          </li>
          <li>
            90% Developer satisfaction from registered sites with a site
            representative
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default About
