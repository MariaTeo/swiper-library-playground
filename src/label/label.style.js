import styled from "styled-components"

export const LabelWrapper = styled.div`
  margin: ${({ b }) => (b ? "auto" : "0.3rem 0")};
  transition: 150ms;
  display: flex;
  align-content: start;
  justify-content: start;
  transition: 250ms;
  background-color: rgb(249, 245, 255);
  position: absolute;
  z-index: 4;
  color: rgb(66, 48, 125);
  cursor: pointer;
  border-radius: 1rem;
  top: ${({ b, i, money }) => (b ? "200" : i || money ? "255" : "-1")}px;
  left: ${({ money, i, b }) =>
    money ? "220px" : i ? "13px" : b ? "40px" : "auto"};

  @media screen and (min-width: 376px) {
    top: ${({ b, i, money }) => (b ? "170" : i || money ? "205" : "-1")}px;
    left: ${({ money, i, b }) =>
      money ? "190px" : i ? "3px" : b ? "20px" : "auto"};
  }
`

export const LabelGroup = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 0.1rem;
  padding: 0.25rem;
  width: fit-content;
  margin: 0 auto;
`

export const Label = styled.div`
  display: flex;
  text-align: center;
  
  font-size: 0.9rem;
  color: ${({ orange, grey }) =>
    orange
      ? "rgb(122, 39, 26);"
      : grey
      ? "rgb(255, 255, 255)"
      : "rgb(66, 48, 125)"};
  background-color: ${({ wasEarning, noColor, orange, grey }) =>
    wasEarning >= 0
      ? `rgba(233, 215, 254)`
      : noColor
      ? "rgb(249, 245, 255)"
      : orange
      ? "rgb(254, 205, 202)"
      : grey
      ? "rgb(71, 84, 103)"
      : ` rgba(166, 244, 197)`};
  border-radius: 1rem;
  padding: 5px;
`
