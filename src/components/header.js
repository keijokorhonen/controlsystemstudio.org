import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from './logo'
import Container from './container'

const Flex = styled.div`
display: flex;
justify-content: flex-start;

@media only screen and (max-width: 468px) {
  justify-content: space-around;
}
`

const Header = ({ siteTitle }) => (
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
      }}
    >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            minWidth: 100,
          }}
        >
          <Logo />
        </Link>
    </div>
    </Flex>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
