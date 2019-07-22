import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_4_darker.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      opi: file(
        relativePath: { eq: "CS-Studio-OPIs_and_Keyvisual_v03_big.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3840, maxHeight: 2160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      beast: file(relativePath: { eq: "beast.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      databrowser: file(relativePath: { eq: "databrowserabout.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Features" />
      <Banner
        imageFluid={images.banner.childImageSharp.fluid}
        text="Features"
      />
      <Container style={{ marginTop: `2rem` }} >
        <h2>Display Builder</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </li>
          <li>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </li>
        </ul>
        <Img fluid={images.opi.childImageSharp.fluid} 
          style={{ maxWidth: `80%`, margin: `3rem 0 4rem` }}/>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>BEAST - The Best Ever Alarm System Toolkit</h2>
        <p>
          This is the distributed alarm system developed at the SNS, consisting
          of
        </p>
        <ul>
          <li>
            Alarm Server that uses channel access to monitor alarm triggers in
            the control system
          </li>
          <li>
            CSS user interface for viewing current alarms as a table or
            hierarchical tree
          </li>
          <li>Relational Database for configuration and logging</li>
          <li>
            Web reports to analyze the number and frequency of alarms, search
            the alarm configuration etc.
          </li>
        </ul>
        <p>The user interface allows operators to</p>
        <ul>
          <li>Access guidance on how to handle a specific alarm</li>
          <li>
            Invoke links to related operator interfaces or other CSS tools for
            the alarm trigger PVs
          </li>
          <li>Acknowledge alarms Edit the configuration</li>
        </ul>
        <Img
          fluid={images.beast.childImageSharp.fluid}
          style={{ maxWidth: 437 }}
        />
        <p>
          See also: ICALEPCS 2009 presentation{" "}
          <a href="http://icalepcs2009.spring8.or.jp/abstract/pdf/TUA001_TALK.PDF">
            http://icalepcs2009.spring8.or.jp/abstract/pdf/TUA001_TALK.PDF
          </a>
        </p>
        <a href="https://github.com/ControlSystemStudio/cs-studio/wiki/BEAST">
          Read more
        </a>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>BOY - Best OPI, Yet</h2>
        <p>
          CSS BOY is an Operator Interface (OPI) development and runtime
          environment. An OPI is a general GUI but with extra facilities to
          connect to your live data directly.
        </p>
        <p>
          CSS BOY allows building your GUI with drag and drop and connecting to
          your data instantly. It also allows using JavaScript or Jython to
          manipulate the GUI in a very similar way as using JavaScript in HTML.
        </p>
        <p>
          In BOY, the OPI Editor is a WYSIWYG (What You See Is What You Get)
          editor which allows you to create your GUI in a similar way of
          creating PPT. The OPI Runtime works in a similar way as modern web
          browsers. One can display the OPIs either in tabs, windows or views
          and navigate OPIs forward or backward. An OPI is a regular XML file
          that can be edited in OPI editor or text editor and run in OPI
          Runtime. No compilation is needed.
        </p>
        <p>
          The data communication layer is a separate layer which allows BOY
          connecting to various data sources seamlessly. Users can provide their
          own data source by extending an Eclipse extension point. Currently, it
          supports EPICS, local, simulated and system data sources. Potentially,
          it could support OPC, DDS, Tango or your own data source.
        </p>
        <p>
          BOY is a set of Eclipse plugins written in Java, which means it can be
          integrated in any Eclipse RCP application. It has been tested that BOY
          runs well on Windows, Unix and X OS platforms.
        </p>
        <a href="https://github.com/ControlSystemStudio/cs-studio/wiki/BOY">
          Read more
        </a>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>DataBrowser</h2>
        <p>
          The Data Browser is a CSS tool for displaying live as well as
          ArchiveSupport historic LiveDataSupport control system data in a
          Strip-Chart type plot.
        </p>
        <Img
          fluid={images.databrowser.childImageSharp.fluid}
          style={{ maxWidth: 437 }}
        />
        <p>
          The current plot can be emailed or sent to a log book or as email.
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook Support</h2>
        <p>
          The Data Browser, PACE and maybe other tools use org.csstudio.logbook
          for making electronic entries.
        </p>
        <p>
          There are pluggable implementations for the SNS "ELog" and maybe
          others.
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Client</h2>
        <p>
          The scan system can automate experiments. For example, it can move a
          motor from some start position to an end position in certain steps,
          waiting at each step until experiment data has been taken. A scan can
          consist of several nested loops. For example, at each step of moving
          the "horizontal" position of a sample, an inner loop can vary the
          "vertical" position of the sample to perform a 2-dimensional scan of
          the sample surface. As another example, an outer loop may vary the
          sample temperature while inner loops vary the sample position.
        </p>
        <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html">
          Read more
        </a>
      </Container>
    </Layout>
  )
}

export default About
