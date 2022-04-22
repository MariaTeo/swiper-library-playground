import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube, Pagination, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export const SliderCube = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="mySwiperCube"
      >
        <SwiperSlide>
          <p>#join-wow-dop</p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
