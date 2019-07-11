import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      beast: file(relativePath: { eq: "beast.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      databrowser: file(relativePath: { eq: "databrowserabout.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Features" />
      <Container>
        <h1>Features</h1>
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
        <div style={{ marginBottom: `2rem` }}></div>
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
        <div style={{ marginBottom: `2rem` }}></div>
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
        <div style={{ marginBottom: `2rem` }}></div>
        <h2>Logbook Support</h2>
        <p>
          The Data Browser, PACE and maybe other tools use org.csstudio.logbook
          for making electronic entries.
        </p>
        <p>
          There are pluggable implementations for the SNS "ELog" and maybe
          others.
        </p>
        <div style={{ marginBottom: `2rem` }}></div>
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
