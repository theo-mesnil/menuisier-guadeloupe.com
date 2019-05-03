import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled(Link)`
  display: flex;
  color: ${colors.white};
  background: ${colors.green};
  padding: 12px 20px;
  border-radius: 8px;
  align-items: center;
`

const Icon = styled.span`
  display: flex;
  transition: margin-left 200ms cubic-bezier(0.39, 0.58, 0.57, 1);

  path {
    fill: ${colors.white};
  }

  ${Wrapper}:hover & {
    margin-left: 5px;
  }
`

const Button = ({ children, icon, ...rest }) => (
  <Wrapper {...rest}>
    {children} <Icon>{icon}</Icon>
  </Wrapper>
)

export default Button
