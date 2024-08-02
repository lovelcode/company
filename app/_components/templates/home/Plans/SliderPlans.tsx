"use client";
import Plan from "@/app/_components/modules/home/Plan";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { plans } from "@/data/plans";
export default function SliderPlans() {
  return (
    <div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: -200,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <Plan href={`/${plan.id}`} title={plan.title}></Plan>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
