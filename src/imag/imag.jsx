import { successList } from "../label/successList"
import * as S from "./style"

export const Imag = () => {
  const im = [
    { path: "/public/image/alexandru-ivanov.jpg" },
    { path: "/public/image/alexandru-ivanov.jpg" },
    { path: "/public/image/alexandru-ivanov.jpg" },
  ]

  const { path } = im

  return (
    <>
      {/* {successList.map(({ image, name }, key) => {
        return (
          <>
            <S.Wrap key={key}>
              <S.Im
                key={key}
                src={image}
                alt={name}
                width="170"
                height="160"
              ></S.Im>
            </S.Wrap>
          </>
        )
      })} */}

      <S.Wrap>
        <S.Im path={path} />
      </S.Wrap>
    </>
  )
}
