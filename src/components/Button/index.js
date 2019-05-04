import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled.div`
  display: inline-flex;
  color: ${colors.white};
  background: ${colors.red};
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
  transition: background 300ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &:hover {
    color: ${colors.white};
    background: ${colors.redLight};
  }
`

const Icon = styled.span`
  display: flex;
  margin-right: ${props => !props.hideTextOnMobile && "10px"};
  transition: margin-right 200ms cubic-bezier(0.39, 0.58, 0.57, 1);

  @media (min-width: 768px) {
    margin-right: 10px;

    ${Wrapper}:hover & {
      margin-right: 13px;
    }
  }

  svg {
    width: 25px;
    height: 25px;
  }

  path {
    fill: ${colors.white};
  }
`

const Text = styled.span`
  @media (max-width: 767px) {
    display: ${props => props.hideTextOnMobile && "none"};
  }
`

const Button = ({ children, hideTextOnMobile, icon, to, href, ...rest }) => (
  <Wrapper
    as={to ? Link : "a"}
    href={href}
    to={to}
    title={`${children}`}
    {...rest}
  >
    {icon && <Icon hideTextOnMobile={hideTextOnMobile}>{icon}</Icon>}
    <Text hideTextOnMobile={hideTextOnMobile}>{children}</Text>
  </Wrapper>
)

export default Button
