import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`

// export const Background = styled.div`
//   position: absolute;
//   left: -140px;
//   top: -10px;
//   z-index: -1;

//   img {
//     width: 300px;
//   }

//   @media (min-width: 768px) {
//     left: -300px;

//     img {
//       width: 630px;
//     }
//   }
// `

export const List = styled.div`
  display: flex;
`

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 200px;
  margin-right: 10px;

  @media (min-width: 768px) {
    margin-right: 40px;
  }

  &:first-child {
    margin-top: 30px;
  }

  &:nth-child(2) {
    margin-top: -10px;
  }

  &:nth-child(3) {
    margin-top: 10px;
  }

  &:last-child {
    margin-right: 0px;
  }

  img {
    border-radius: 8px;
  }
`
