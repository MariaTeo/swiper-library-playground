import Image from "next/image"
import { useState } from "react"
import { Label } from "../label/label"
import { successList } from "../label/successList"
import * as S from "./slider-netflix.style"

export const SliderNetflix = () => {
  const [slider, setSlider] = useState(0)
  // useEffect(() => {
  //   setSlider(slider + 1)
  // }, [slider])

  // const lenght = successList.lenght

  // const next = () => {
  //   setSlider(slider === length - 1 ? 0 : slider + 1)
  //   console.log("next")
  // }
  // const prev = () => {
  //   setSlider(slider === 0 ? lenght - 1 : slider - 1)
  //   console.log("prev")
  // }
  const money = ["£", "$", "€", "Lei"]
  return (
    <>
      {/* <S.MovieBox> */}
      {successList.map(
        (
          {
            image,
            name,
            content,
            wasEarning,
            currently,
            currentlyEarning,
            b,
            i,
          },
          key
        ) => {
          // const position =
          //   key > 0 ? "nextCard" : key === 0 ? "activeCard" : "prevCard"
          return (
            <S.MovieCard key={key}>
              <S.Main>
                <S.Caca wasEarning={wasEarning} />
                <S.Caca
                  b={b}
                  currently={currently}
                  currentlyEarning={currentlyEarning}
                />
                <S.Caca
                  i={i}
                  currently={currently}
                  wasEarning={wasEarning}
                  currentlyEarning={currentlyEarning}
                />
                <S.Caca
                  money={money}
                  currently={currently}
                  wasEarning={wasEarning}
                  currentlyEarning={currentlyEarning}
                />
                <S.Imag width="170" height="160" src={image} alt={name} />
              </S.Main>


              <S.Hero>
                <S.Name>{name}</S.Name>
                <S.StoryWrap>
                  <S.Bef>
                    <p>Before</p>
                    <S.Content>{content}</S.Content>
                  </S.Bef>
                  <S.Bef>
                    <p>After</p>
                    <S.Content>{content}</S.Content>
                  </S.Bef>
                </S.StoryWrap>
              </S.Hero>
            </S.MovieCard>
          )
        }
      )}
      {/* </S.MovieBox>
      <S.BtnLeft onClick={prev}>prev</S.BtnLeft>
      <S.BtnRight onClick={next}>next</S.BtnRight> */}
    </>
  )
}
