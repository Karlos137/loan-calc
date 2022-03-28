import styled from "styled-components"

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  padding: 1em;
  border-bottom: 1px solid #fff;

  &:last-of-type {
    border-bottom: none;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export default Slider
