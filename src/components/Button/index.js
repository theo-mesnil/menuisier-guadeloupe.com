import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled.div`
  display: inline-flex;
  color: ${colors.white};
  background: ${colors.green};
  padding: 15px 20px;
  border-radius: 10px;
  align-items: center;
  transition: background 300ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &:hover {
    color: ${colors.white};
    background: ${colors.greenDark};
  }
`

const Icon = styled.span`
  display: flex;
  margin-left: 10px;
  transition: margin-left 200ms cubic-bezier(0.39, 0.58, 0.57, 1);

  svg {
    width: 20px;
    height: 20px;
  }

  path {
    fill: ${colors.white};
  }

  ${Wrapper}:hover & {
    margin-left: 15px;
  }
`

const Button = ({ children, icon, to, href }) => (
  <Wrapper as={to ? Link : "a"} href={href} to={to}>
    {children}
    {icon && <Icon>{icon}</Icon>}
  </Wrapper>
)

export default Button
