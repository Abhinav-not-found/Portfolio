import Card from './Card.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";
import NPMCard from './NPMCard.jsx'

const Projects = () => {
  return (
    <>
      <h1 className="mt-10 text-xl font-rammetto">Projects</h1>
        <div className="mt-5 flex gap-10 items-center">
          {/* <Swiper
            modules={[FreeMode]}
            slidesPerView={1}
            spaceBetween={100}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide> */}
              {/* <Card heading={'NPM'} subHead={'package'} bgColor={'#CB0001'} /> */}
              <NPMCard/>
            {/* </SwiperSlide>
          </Swiper> */}
        </div>
    </>
  )
}

export default Projects
