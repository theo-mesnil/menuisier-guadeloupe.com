import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

import img1 from "../../images/home/1.jpg"
import img2 from "../../images/home/2.jpg"
import img3 from "../../images/home/3.jpg"
import img4 from "../../images/home/4.jpg"

const Wrapper = styled.div`
  position: absolute;
  opacity: ${props => (props.isActive ? 1 : 0)};
  top: ${props => (props.isActive ? "10px" : "50px")};
  left: ${props => (props.isActive ? "10px" : "50px")};
  right: ${props => (props.isActive ? "10px" : "50px")};
  bottom: ${props => (props.isActive ? "10px" : "50px")};
  border-radius: 30px;
  overflow: hidden;
  z-index: -1;
  background-color: ${colors.white};
  transition: top 300ms cubic-bezier(0, 0.87, 0.32, 1.13),
    left 300ms cubic-bezier(0, 0.87, 0.32, 1.13),
    right 300ms cubic-bezier(0, 0.87, 0.32, 1.13),
    bottom 300ms cubic-bezier(0, 0.87, 0.32, 1.13);
`

const ImageBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  transition: background-image 300ms;
  opacity: 0.7;
`

const getImage = number => {
  switch (number) {
    case "1":
      return img1

    case "2":
      return img2

    case "3":
      return img3

    case "4":
      return img4

    default:
      return undefined
  }
}

const Spotlight = ({ number }) => (
  <Wrapper isActive={!!number}>
    <ImageBlock url={getImage(`${number}`)} />
  </Wrapper>
)

export default Spotlight
