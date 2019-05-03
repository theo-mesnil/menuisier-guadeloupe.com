import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const Item = styled.div`
  flex: 0 0 calc(50% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-right: 0px;
  }

  @media (min-width: 560px) {
    flex: 0 0 calc(33% - 20px);
    margin-right: 20px;
  }
`

export const Background = styled.div`
  position: absolute;
  left: -40px;
  top: -30px;
  z-index: -1;

  img {
    width: 200px;
  }

  @media (min-width: 560px) {
    left: -70px;

    img {
      width: 290px;
    }
  }
`
