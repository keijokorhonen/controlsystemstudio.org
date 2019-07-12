import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"

import Logo from "./logo"
import Container from "./container"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 468px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const MenuToggle = styled.button`
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  transition: color 250ms ease-in;
  border: none;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 0.5rem;

  & > a {
    text-decoration: none;
    color: #000000;
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    transition: color 250ms ease-in;
  }

  & > a:hover {
    color: #302a72;
  }

  @media only screen and (max-width: 468px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > a {
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      display: ${props => props.visible ? '' : 'none'};
    }
  }
`

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  a {
    margin-left: 5px;
    color: #302a72;
    padding: 0.5rem 0;
  }
`

const Header = ({ siteTitle }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header
      style={{
        background: `#ffffff`,
      }}
    >
      <Container>
        <Flex>
          <div
            style={{
              minWidth: 100,
              margin: `0.5rem`,
            }}
          >
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Logo />
            </Link>
          </div>
          <Menu visible={menuVisible}>
            <MenuToggle onClick={() => setMenuVisible(!menuVisible)}>
            {menuVisible ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />} Menu
            </MenuToggle>
            <Link
              to="/about"
              activeStyle={{
                color: "#302a72",
                borderBottom: `1px solid #302a72`,
              }}
            >
              About
            </Link>
            <Link
              to="/features"
              activeStyle={{
                color: "#302a72",
                borderBottom: `1px solid #302a72`,
              }}
            >
              Features
            </Link>
            <Link
              to="/docs"
              activeStyle={{
                color: "#302a72",
                borderBottom: `1px solid #302a72`,
              }}
            >
              Docs
            </Link>
            <Link
              to="/contribute"
              activeStyle={{
                color: "#302a72",
                borderBottom: `1px solid #302a72`,
              }}
            >
              Contribute
            </Link>
            <a
              href="http://controlsystemstudio.org/download.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <SocialMediaLinks>
              <a
                href="https://github.com/ControlSystemStudio/cs-studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://plus.google.com/u/0/b/101349549663920375487/101349549663920375487/posts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGooglePlus} size="lg" />
              </a>
            </SocialMediaLinks>
          </Menu>
        </Flex>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
