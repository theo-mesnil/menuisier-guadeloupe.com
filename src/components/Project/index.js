import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  overflow: hidden;
  border-radius: 8px;
`

const Sizing = styled.div`
  position: absolute;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Project = ({ caption, pictures, name }) => (
  <Wrapper>
    <Sizing background={caption}>{name}</Sizing>
  </Wrapper>
)

export default Project
