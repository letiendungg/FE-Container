import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Banner() {
  const banners = [
    {
      image: "./banner1.jpg",
      title: "Gemini Cooperation",
      first_btn_text: "Press Release",
      first_btn_to: "/",
      second_btn_text: "Learn More",
      second_btn_to: "/",
    },
    {
      image: "./banner2.jpg",
      title: "The easy way to avoid emissions",
      first_btn_text: "Learn More",
      first_btn_to: "/",
    },
    {
      image: "./banner3.jpg",
      title: "Our Express in 360°",
      first_btn_text: "Virtual Tour",
      first_btn_to: "/",
    },
    {
      image: "./banner4.jpg",
      title: "Quick Quotes Spot: Instant and Guaranteed.",
      first_btn_text: "Learn More",
      first_btn_to: "/",
    },
  ];

  return (
    banners.length > 0 && (
      <Swiper
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="flex-colo xl:h-96 bg-dry lg:h-64 h-48 w-[1140px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="flex-colo">
            <img
              src={banner.image}
              className="w-full h-full object-cover"
              alt={banner.title}
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl text-white truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {banner.title}
              </h1>
              <div className="flex gap-5 items-center">
                {banner.first_btn_text && (
                  <Link
                    to={banner.first_btn_to}
                    className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                  >
                    {banner.first_btn_text}
                  </Link>
                )}
                {banner.second_btn_text && (
                  <Link
                    to={banner.second_btn_to}
                    className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                  >
                    {banner.second_btn_text}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default Banner;
