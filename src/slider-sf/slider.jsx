import React, { useEffect, useState } from "react"
import { successList } from "../label/successList"
import { useSwipeable } from "react-swipeable"
import * as S from "./slider.style"

export const Carousel = (props) => {
  const { children, show } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(successList.length)

  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    setLength(successList.length)
  }, [successList])

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 3) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // if (!paused) {
      //   setCurrentIndex(
      //     currentIndex + 1 || console.log(currentIndex, "caca")
      //   )
      // }
    }, 700)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  console.log(touchPosition, "isnde")

  const handles = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(currentIndex + 1),
    onSwipedRight: () => setCurrentIndex(currentIndex - 1),
  })

  return (
    <>
      <S.CarouselWrapper
        {...handles}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {currentIndex > 0 && (
          <S.LeftArrow onClick={prev} className="left-arrow">
            &lt;
          </S.LeftArrow>
        )}
        <S.CarouselContentWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <S.CarouselContent show={show} currentIndex={currentIndex}>
            {children}
          </S.CarouselContent>
        </S.CarouselContentWrapper>
        {currentIndex < length - show && (
          <S.RightArrow onClick={next} className="right-arrow">
            &gt;
          </S.RightArrow>
        )}
      </S.CarouselWrapper>
    </>
  )
}
