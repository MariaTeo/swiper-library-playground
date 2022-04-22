import { Swiper, SwiperSlide } from "swiper/react"
import { successList } from "../label/successList"
import { EffectCards, Keyboard, Mousewheel } from "swiper"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-cards"

import { Label } from "../label/label"

export const SwiperCard = () => {
  const money = ["£", "$", "€", "Lei"]
  return (
    <>
      <Swiper
        effect={"cards"}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        modules={[Keyboard, EffectCards, Mousewheel]}
        loop={true}
      >
        {successList.map(
          ({ image, currently, wasEarning, currentlyEarning, b, i }, key) => (
            <SwiperSlide key={key}>
              <Label wasEarning={wasEarning} />
              <Label
                b={b}
                currently={currently}
                currentlyEarning={currentlyEarning}
              />
              <Image
                alt="imagine"
                width="100%"
                height="100%"
                src={image}
              ></Image>
              <Label
                i={i}
                currently={currently}
                wasEarning={wasEarning}
                currentlyEarning={currentlyEarning}
              />
              <Label
                money={money}
                currently={currently}
                wasEarning={wasEarning}
                currentlyEarning={currentlyEarning}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  )
}
