import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100vh;
  margin: auto;
`

export const CardContainer = styled.div`
  position: relative;
  width: 36rem;
  height: 22rem;
  display: flex;
  gap: 0.5rem;
`

export const Card = styled.div`
  /* position: absolute; */
  height: 21rem;
  width: 10rem;
  padding-bottom: 30px;
  /* background-color: gray; */
  border-radius: 1rem;
  text-align: center;
  text-transform: capitalize;
  box-sizing: border-box;
  user-select: none;
  
   left: ${({ cardSyle }) =>
     cardSyle === "prevCard" ? "0" : cardSyle === "activeCard" ? "50%" : "100%"}
   transform: ${({ cardSyle }) =>
     cardSyle === "activeCard"
       ? "translateX(-50%)"
       : cardSyle === "nextCard"
       ? "translateX(-100%)"
       : 0};
  opacity: ${({ cardSyle }) => (cardSyle === "prevCard" ? "0.6" : 0)}
  z-index: ${({ cardSyle }) => (cardSyle === "activeCard" ? 0 : -1)}
  background-color: ${({ cardSyle }) => (cardSyle === "activeCard" ? blue : -1)}

  &:hover {
    cursor: pointer;
  }

`

export const Imag = styled(Image)`
  position: absolute;
  height: 21rem;
  width: 10rem;
  padding-bottom: 30px;
  background-color: gray;
  border-radius: 1rem;
  text-align: center;
  text-transform: capitalize;
  box-sizing: border-box;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`
