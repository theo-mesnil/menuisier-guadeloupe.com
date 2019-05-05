import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 15px 10px 10px;
  color: ${props => (props.variant === "outlined" ? colors.red : colors.white)};
  background: ${props => props.variant !== "outlined" && colors.red};
  border: 2px solid ${colors.red};
  border-radius: 5px;
  transition: background 300ms cubic-bezier(0.39, 0.58, 0.57, 1), border 300ms,
    color 300ms;

  &:hover {
    color: ${props =>
      props.variant === "outlined" ? colors.redLight : colors.white};
    background: ${props => props.variant !== "outlined" && colors.redLight};
    border-color: ${colors.redLight};
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

    path,
    circle {
      fill: ${props =>
        props.variant === "outlined" ? colors.red : colors.white};
      transition: fill 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
    }
  }

  ${Wrapper}:hover & {
    svg {
      path,
      circle {
        fill: ${props => props.variant === "outlined" && colors.redLight};
      }
    }
  }
`

const Text = styled.span`
  @media (max-width: 767px) {
    display: ${props => props.hideTextOnMobile && "none"};
  }
`

const Button = ({
  children,
  hideTextOnMobile,
  href,
  icon,
  to,
  variant,
  ...rest
}) => (
  <Wrapper
    as={to ? Link : "a"}
    href={href}
    variant={variant}
    title={`${children}`}
    to={to}
    {...rest}
  >
    {icon && (
      <Icon variant={variant} hideTextOnMobile={hideTextOnMobile}>
        {icon}
      </Icon>
    )}
    <Text hideTextOnMobile={hideTextOnMobile}>{children}</Text>
  </Wrapper>
)

export default Button
