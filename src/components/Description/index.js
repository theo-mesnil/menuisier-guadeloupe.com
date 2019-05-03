import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  font-size: 18px;
  text-align: justify;
`

const Description = ({ children }) => <Wrapper>{children}</Wrapper>

export default Description
