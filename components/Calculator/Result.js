import styled from "styled-components"

const Result = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 0.5px solid rgb(115, 115, 115);

  &:last-of-type {
    border-bottom: none;
  }
`

export default Result
