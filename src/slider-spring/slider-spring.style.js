import styled from "styled-components"

export const Wrapper = styled.div`
  width: 80%;

  && {
    .use-spring-carousel-main-wrapper {
      overflow: hidden;
    }

    .use-spring-carousel-track-wrapper {
      width: 20% !important;
    }

    .use-spring-carousel-item {
      justify-content: center;
      /* flex: 1 0 calc(100% - 30%) !important ; */
    }
  }
`
