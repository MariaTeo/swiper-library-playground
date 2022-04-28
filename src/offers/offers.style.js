import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`
export const OfferWrap = styled.div`
  border: 1px solid purple;
  border-radius: 1rem;
  padding: 1rem;
`
export const Button = styled.button`
  border: ${({ last }) => (last ? "2px solid red" : "2px solid green")};
  border-radius: 1rem;
  padding: 1rem;
  width: ${({ last }) => (last ? 55 : 45)}px;
  height: ${({ last }) => (last ? 50 : 40)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
