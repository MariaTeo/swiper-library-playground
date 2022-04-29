import * as S from "./button.style"

const Button = ({
  children,
  last,
  onClick,
  height,
  width,
  review,
  nav,
  active,
  order = 0,
}) => {
  return (
    <S.Button
      order={order}
      active={active}
      onClick={onClick}
      width={width}
      height={height}
      nav={nav}
      review={review}
      last={last}
    >
      {children}
    </S.Button>
  )
}

export default Button
