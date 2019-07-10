import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons"

import Container from "./container"

const StyledFooter = styled.div`
  background-color: #302a72;
  color: #b7b7b7;

  a {
    text-decoration: none;
    color: #b7b7b7;
  }

  a:hover {
    color: #ffffff;
  }
`

const Flex = styled.footer`
  display: flex;
  justify-content: space-between;
`

const SocialMediaLinks = styled.div`
  a {
    margin-left: 5px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <SocialMediaLinks>
            <a href="https://github.com/ControlSystemStudio/cs-studio" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://plus.google.com/u/0/b/101349549663920375487/101349549663920375487/posts" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGooglePlus} size="lg" />
            </a>
          </SocialMediaLinks>
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
