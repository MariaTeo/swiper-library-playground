import styled from "styled-components"

export const CarouselWrapper = styled.div`
  display: flex;
  width: 400%;
  position: absolute;
  @media screen and (min-width: 376px) {
    width: 100%;
  }
  margin-right: 1rem;
`

export const CarouselContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 10%;
  @media screen and (min-width: 376px) {
    width: 200%;
  }
`

export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in webkit browser */
  gap: 16px;
  /* width: 2000%; */
  transform: translateX(
    -${({ currentIndex, show }) => currentIndex * (100 / show / 3.2)}%
  );

  @media screen and (min-width: 768px) {
    transform: translateX(
      -${({ currentIndex, show }) => currentIndex * (100 / show / 3.5)}%
    );
  }
`

export const LeftArrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  left: 24px;
  align-items: center;
  justify-content: center;
  display: none;
  @media screen and (min-width: 376px) {
    display: flex;
  }
`

export const RightArrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  right: 24px;
  align-items: center;
  justify-content: center;
  display: none;
  @media screen and (min-width: 376px) {
    display: flex;
  }
`
