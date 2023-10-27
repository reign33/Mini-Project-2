import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/navigation";

function CarouselProduct() {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Best Sellers</div>
        <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[]}
        
        >
        {Array.from({ length: 9 }, (_, i) => (
            <SwiperSlide key={i}>
                <img src={`/product_${i}_small.jpg`}
                    alt="Carousel product"/>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default CarouselProduct