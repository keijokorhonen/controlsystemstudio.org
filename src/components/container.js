import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const StyledContainer = styled.div`
width: 100%;
margin: auto;
padding: 1.45rem 1.0875rem;

@media only screen and (min-width: 468px) {
    width: 570px;
}

@media only screen and (min-width: 992px) {
    width: 770px;
}

@media only screen and (min-width: 1200px) {
    width: 970px;
}
`

const Container = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container