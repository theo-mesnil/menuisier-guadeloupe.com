import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const List = styled.div`
  display: flex;
`

export const Item = styled.div`
  align-items: flex-start;
  max-width: 130px;
  margin-right: 10px;

  @media (min-width: 768px) {
    margin-right: 30px;
    max-width: 180px;
  }

  &:first-child {
    margin-top: 5px;
  }

  &:nth-child(2) {
    margin-top: -15px;
  }

  &:nth-child(3) {
    margin-top: 15px;
  }

  &:last-child {
    margin-right: 0px;
  }

  img {
    border-radius: 12px;
  }
`
