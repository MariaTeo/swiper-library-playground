import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  EffectCoverflow,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { list } from "./list"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"

const SLiderulCucului = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar]}
        navigation={true}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiperDefault"
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 1,
            spaceBetween: 4,
            coverflowEffect: {
              rotate: 20,
              stretch: 2,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            },
          },

          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 6,
            coverflowEffect: {
              rotate: 60,
              stretch: 1,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
          },

          1024: {
            width: 1024,
            slidesPerView: 5,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 50,
              stretch: 1,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
      >
        {list.map(({ amount, title }, key) => (
          <SwiperSlide key={key}>
            <h3>£{amount}</h3>
            <h5>{title}</h5>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <span id="bp-375">Mobile</span>
        <span id="bp-768">Tablet</span>
        <span id="bp-1024">Desktop</span>
      </div>
    </>
  )
}
export default SLiderulCucului
