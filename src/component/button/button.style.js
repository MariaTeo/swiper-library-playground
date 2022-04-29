import styled from "styled-components"

export const Button = styled.button`
  position: relative;
  border: ${({ last, review, nav }) =>
    last || review
      ? "2px solid red"
      : nav
      ? "3px dashed #7B68EE"
      : "2px solid green"};
  border-radius: 1rem;
  left: ${({ order = 0 }) => `${order === 0 ? 0 : order * 1 + 30}rem`};
  padding: ${({ review }) => (review ? 0 : 1)}rem;
  width: ${({ review, width, nav, last }) =>
    review ? 50 : nav || last ? 280 : width}px;
  height: ${({ review, height, nav, last }) =>
    review ? 40 : nav || last ? 140 : height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: ${({ order = 0 }) => `rotateY(${(2 - order) * 15}deg)`}; */
`
