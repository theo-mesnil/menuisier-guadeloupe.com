import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`

export const List = styled.div`
  position: relative;
  width: 270px;
  height: 210px;
  margin: 0 auto;
`

export const Item = styled.div`
  align-items: flex-start;
  position: absolute;

  @media (min-width: 768px) {
  }

  &:first-child {
    width: 200px;
    right: 0;
    top: 0;
  }

  &:last-child {
    width: 150px;
    bottom: 0;
    left: 0;

    img {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
    }
  }

  img {
    border-radius: 5px;
  }
`
