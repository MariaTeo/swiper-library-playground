import { useSpringCarousel, ReactSpringCarousel } from "react-spring-carousel"
import { useEffect, useCallback, useState } from "react"

import Button from "../component/button"
import Flex from "../component/flex"
import * as S from "./slider-spring.style"

import { investment } from "../offers/mock"

export const Spring = ({ formatCurrency }) => {
  const [active, setActive] = useState(0)
  const keyDown = useCallback(
    (e) => {
      const { key, keyCode } = e
      if (key === "ArrowLeft") {
        return setActive(active - 1)
      } else if (key === "ArrowRight") {
        return setActive(active + 1)
      } else {
        return console.log(key)
      }
    },
    [active]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyDown)

    return () => {
      document.removeEventListener("keydown", keyDown)
    }
  }, [keyDown])

  console.log(active, "active")

  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      withLoop: true,
      items: investment.map(({ value, last }, key) => {
        const dif = key - (active > investment.length ? active * 0 : active)
        const order = dif + (dif < -2 ? investment.length : 0)
        console.log(dif, "key minus ative")
        return {
          id: key,
          renderItem: (
            <Button
              order={order}
              active={active}
              last={last}
              width={70}
              height={40}
              key={key}
            >
              {formatCurrency(value)}
            </Button>
          ),
        }
      }),
    })
  const next = () => {
    slideToNextItem
    if (active > investment.length - 1) {
      return setActive(0)
    }
    setActive(active + 1)
  }
  const prev = () => {
    slideToPrevItem
    if (active < -15) {
      return setActive(0)
    }
    setActive(active - 1)
  }

  return (
    <Flex dir="column">
      <S.Wrapper>{carouselFragment}</S.Wrapper>{" "}
      <Flex gap="400px">
        <Button nav onClick={prev}>
          &lt;
        </Button>
        <Button nav onClick={next}>
          &gt;
        </Button>
      </Flex>
    </Flex>
  )
}

// export const SpringOffers = ({ formatCurrency }) => {
//  const {offers} = list

//   const { carouselFragment, slideToNextItem, slideToPrevItem } =
//     useSpringCarousel({
//       withLoop: true,
//       // slideAmount: 200,
//       items: {offers.map(
//         (
//           {
//             price,
//             upTo,
//             type,
//             name,
//             effortType,
//             effortHours,
//             canPairProgram,
//             hoursPpDay,
//             daysOfAttendance,
//             basicRecommendation,
//             sealDealRecommendation,
//           },
//           key
//         ) =>  {}
//     })

//   return (
//     <Flex dir="column">
//       <S.Wrapper>{carouselFragment}</S.Wrapper>{" "}
//       <Flex gap="400px">
//         <Button nav onClick={slideToPrevItem}>
//           &lt;
//         </Button>
//         <Button nav onClick={slideToNextItem}>
//           &gt;
//         </Button>
//       </Flex>
//     </Flex>
//   )
// }
