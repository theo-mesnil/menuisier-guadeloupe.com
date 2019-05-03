import Lightbox from "react-image-lightbox"
import React, { Component } from "react"
import styled from "styled-components"
import "react-image-lightbox/style.css"

import colors from "../../config/colors"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80%;
  overflow: hidden;
  border-radius: 12px;
  transition: margin-top 200ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &:hover {
    cursor: pointer;
  }
`

const Sizing = styled.div`
  display: flex;
  position: absolute;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Title = styled.div`
  align-self: flex-end;
  padding: 10px;
  color: ${colors.white};
  line-height: 20px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  transition: padding 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 15px;
  }

  ${Wrapper}:hover & {
    padding: 10px 10px 20px 10px;

    @media (min-width: 768px) {
      padding: 15px 15px 20px 15px;
    }
  }
`

class Project extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  openGallery = () => {
    this.setState({ isOpen: true })
  }

  closeGallery = () => {
    this.setState({ isOpen: false })
  }

  handlePrev = () => {
    const { pictures } = this.props
    const { photoIndex } = this.state

    this.setState({
      photoIndex: (photoIndex + pictures.length - 1) % pictures.length,
    })
  }

  handleNext = () => {
    const { pictures } = this.props
    const { photoIndex } = this.state

    this.setState({
      photoIndex: (photoIndex + 1) % pictures.length,
    })
  }

  render() {
    const { caption, pictures, name } = this.props
    const { isOpen, photoIndex } = this.state

    const startSource = pictures[photoIndex]
    const nextSource = pictures[(photoIndex + 1) % pictures.length]
    const prevSource =
      pictures[(photoIndex + pictures.length - 1) % pictures.length]

    return (
      <React.Fragment>
        <Wrapper onClick={this.openGallery} title={name}>
          <Sizing background={caption}>
            <Title>{name}</Title>
          </Sizing>
        </Wrapper>
        {isOpen && (
          <Lightbox
            mainSrc={startSource}
            nextSrc={nextSource}
            prevSrc={prevSource}
            onCloseRequest={this.closeGallery}
            onMovePrevRequest={this.handlePrev}
            onMoveNextRequest={this.handleNext}
          />
        )}
      </React.Fragment>
    )
  }
}

export default Project
