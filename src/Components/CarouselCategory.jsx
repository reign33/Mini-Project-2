import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/navigation";

function CarouselCategory() {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[]}
        >
            <SwiperSlide onClick={() => searchCategory("Deals")} className="cursor-pointer">
                <img src={"/category_0.jpg"} alt="Deal category" />
            </SwiperSlide>

            <SwiperSlide onClick={() => searchCategory("Amazon")} className="cursor-pointer"> 
                <img src={"/category_1.jpg"} alt="Amazon category"/>
            </SwiperSlide>

            <SwiperSlide onClick={() => searchCategory("Fashion")} className="cursor-pointer">
            <img src={"/category_2.jpg"} alt="Fashion category" />
            </SwiperSlide>

            <SwiperSlide onClick={() => searchCategory("Computers")} className="cursor-pointer">
                <img src={"/category_3.jpg"} alt="Computers category" />
            </SwiperSlide>

            <SwiperSlide onClick={() => searchCategory("Home")} className="cursor-pointer">
                <img src={"/category_4.jpg"} alt="Home category" />
            </SwiperSlide>

            <SwiperSlide onClick={() => searchCategory("Mobiles")} className="cursor-pointer">
                <img src={"/category_5.jpg"} alt="Mobiles category" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory