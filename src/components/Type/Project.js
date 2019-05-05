import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: 20px;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
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
