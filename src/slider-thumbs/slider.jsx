import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Autoplay,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Thumbs,
} from "swiper"
import Image from "next/image"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { successList } from "../label/successList"

export const SliderThumbsApp = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        mousewheel={true}
        modules={[FreeMode, Navigation, Thumbs, Keyboard, Autoplay, Mousewheel]}
        className="mySwiper2"
      >
        {successList.map(({ image, content }) => (
          <>
            <SwiperSlide>
              <div className="wrapper">
                <p>{content}</p>
                <Image
                  width="400px"
                  alt="marian-zburlea"
                  height="500px"
                  src={image}
                />
                <p>{content}</p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
        className="mySwiper"
      >
        {successList.map(({ image }) => (
          <>
            <SwiperSlide>
              <Image
                alt="marian-zburlea"
                width="400px"
                height="500px"
                src={image}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  )
}
