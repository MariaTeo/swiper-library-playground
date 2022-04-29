import * as S from "./flex.style"

const Flex = ({ children, width, height, dir, align, justify, gap, color }) => {
  return (
    <S.Flex
      width={width}
      height={height}
      dir={dir}
      align={align}
      justify={justify}
      gap={gap}
    >
      {children}
    </S.Flex>
  )
}

export default Flex
