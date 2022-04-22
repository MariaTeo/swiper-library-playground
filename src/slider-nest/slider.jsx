import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Autoplay,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper"
import Image from "next/image"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { successList } from "../label/successList"

export const SliderNested = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("")

  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        thumbs={{ swiper: thumbsSwiper }}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Thumbs, Navigation, Keyboard]}
        className="mySwiper2"
      >
        {successList.map(({ image, content, name }, key) => (
          <>
            <SwiperSlide key={key}>
              <Swiper
                nested={true}
                centeredSlides={true}
                modules={[Navigation, Pagination, Keyboard]}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    const but = ["Before", "", "After"]
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      but[index] +
                      "</span>"
                    )
                  },
                }}
                breakpoints={{
                  1440: {
                    width: 1440,
                    slidesPerView: 3,
                    spaceBetween: 10,
                    initialSlide: 1,
                  },

                  1025: {
                    width: 1025,
                    slidesPerView: 1,
                    spaceBetween: 6,
                    initialSlide: 1,
                  },

                
                  768: {
                    width: 768,
                    slidesPerView: 1,
                    spaceBetween: 6,
                    initialSlide: 1,
                  },


                  480: {
                    width: 480,
                    slidesPerView: 1,
                    spaceBetween: 4,
                    initialSlide: 1,
                  },
                }}
                keyboard={{
                  enabled: true,
                }}
              >
                <SwiperSlide>
                  <div className="text-wrapper">
                    <p>
                      PRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXT
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wrapper">
                    <Image
                      width="400px"
                      alt={name}
                      height="500px"
                      src={image}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-wrapper">
                    <p>
                      AL DOILEA TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL TEXTPRIMUL
                      TEXT
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // preloadImages={true}
        initialSlide={1}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // watchSlidesProgress={true}
        slidesPerView="auto"
        breakpoints={{
          1440: {
            width: 1440,
            slidesPerView: 10,
            spaceBetween: 10,
          },

          768: {
            width: 768,
            spaceBetween: 10,
          },
          375: {
            width: 375,
            spaceBetween: 4,
          },
        }}
        modules={[Thumbs, Pagination]}
        className="mySwiper"
      >
        {successList.map(
          ({ image, name }, key) =>
            console.log(name, "gdhcaiojsfhdjksl") || (
              <>
                <SwiperSlide key={key}>
                  <Image alt={name} src={image} width="400px" height="500px" />
                </SwiperSlide>
              </>
            )
        )}
      </Swiper>
    </>
  )
}
