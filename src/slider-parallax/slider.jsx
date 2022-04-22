import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { successList } from "../label/successList"
import {
  Parallax,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper"
import Image from "next/image"

export const SwiperPara = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, numere) {
            return '<span class="' + numere + '">' + (index + 1) + "</span>"
          },
        }}
        navigation={true}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[
          Parallax,
          Pagination,
          Navigation,
          Keyboard,
          Mousewheel,
          Autoplay,
        ]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://wowdop.com/svg/logo-rocket-plume.svg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {successList.map(({ image, content, name, currently }, key) => {
          return (
            <>
              <SwiperSlide key={key}>
                <div className="title" data-swiper-parallax="-300">
                  {currently}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <Image
                    src={image}
                    alt="member"
                    width={340}
                    height={380}
                  ></Image>
                  {name}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>{content}</p>
                </div>
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
    </>
  )
}
