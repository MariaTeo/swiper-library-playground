import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export const SliderPerView = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, Navigation, Mousewheel, Keyboard]}
        navigation
        pagination={{
          clickable: true,
          renderBullet: function (index, numere) {
            return '<span class="' + numere + '">' + (index + 1) + "</span>"
          },
        }}
        loop={true}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 1,
            spaceBetween: 4,
          },

          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 6,
          },

          1024: {
            width: 1024,
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=2" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=4" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=5" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=6" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=7" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=8" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="image" src="https://picsum.photos/200/300?random=9" />
        </SwiperSlide>
      </Swiper>

      <div>
        <span id="bp-375">Mobile</span>
        <span id="bp-768">Tablet</span>
        <span id="bp-1024">Desktop</span>
      </div>
    </>
  )
}
