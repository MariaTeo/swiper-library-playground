import { successList } from "../label/successList"
import { Card } from "./card"
import * as S from "./slider-scratch.style"

export const SliderScratch = () => {
  return (
    <>
      <S.Container>
        <S.CardContainer>
          {successList.map((props, key) => {
            const position =
              key > 0 ? "nextCard" : key === 0 ? "activeCard" : "prevCard"
            return <Card {...props} key={key} cardStyle={position} />
          })}
        </S.CardContainer>
      </S.Container>
    </>
  )
}
