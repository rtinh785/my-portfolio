import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Data from "./Data";

const Testimonials = () => {
  return (
    <section className=" container section" id="testimonials">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className=" grid max-w-[700px] m-auto min-w-full"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className=" text-center pt-0 pb-5 px-5" key={id}>
              <div className=" size-[5.6rem] mx-auto">
                <img src={image} alt="image" />
              </div>
              <h3 className=" mt-[0.75rem]">{title}</h3>
              <span
                style={{ color: "#8b88b1" }}
                className=" text-[--font-size-small]"
              >
                {subtitle}
              </span>
              <div className=" mb-[1.3rem] relative bg-[var(--color-container)] p-[1.875rem] mt-[1.5rem] shadow-[var(--shadow-main)] rounded-[var(--radius-main)]">
                {comment}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
