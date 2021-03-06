import * as S from "./slider-scratch.style"

export const Card = ({ image, name, cardStyle }) => {
  return (
    <S.Card cardStyle>
      <S.Imag alt={name} width="100%" height="100%" src={image}></S.Imag>
      <h4>{name}</h4>
    </S.Card>
  )
}
