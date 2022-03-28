import styled from "styled-components"

const Button = styled.button`
  display: block;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  background: ${props => props.theme.colors.background};
  color: #fff;
  border: none;
  outline: none;
  padding: 1em;
  margin: 10px auto;
  font-size: 1.2em;
  font-weight: 300;
  border-radius: 10px;

  &:hover {
    filter: brightness(95%);
  }
`

export default Button
