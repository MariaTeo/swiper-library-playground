import SLiderulCucului from "../slider-coverflow/slider"
import { SwiperCard } from "../slider-cards/slider"
import { SliderCube } from "../slider-cube/slider"
import { SliderPerView } from "../slider-view/slider"
import { SliderThumbsApp } from "../slider-thumbs/slider"
import { SwiperPara } from "../slider-parallax/slider"
import { SliderNested } from "../slider-nest/slider"
import { SliderScratch } from "../slider-scratch/slider"
import { SliderNetflix } from "../slider-netflix/slider"
import { Carousel, SliderSF } from "../slider-sf/slider"

export default function Home() {

  return (
    <>
      {/* <SLiderulCucului /> */}
      {/* <SliderPerView /> */}
      {/* <SliderThumbsApp /> */}
      {/* <SliderNested /> */}
      {/* <SliderScratch /> */}

      {/* <SwiperCard /> */}
      <Carousel show={4}>
        <SliderNetflix />
      </Carousel>
      {/* <SliderCube /> */}
      {/* <SwiperPara /> */}
    </>
  )
}
