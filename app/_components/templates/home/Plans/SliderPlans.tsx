"use client";
import Plan from "@/app/_components/modules/home/Plan";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { PlanProps } from "@/app/_types/types";
// import { plans } from "@/data/plans";
export default async function SliderPlans() {
  const res = await fetch("http://91.107.138.134:8008/api/plan/list/", {cache: "no-store"});
    const plans = await res.json();
    console.log(plans);
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
          {plans.map((plan:PlanProps) => (
            <SwiperSlide key={plan.id}>
              <Plan backup={plan.backup}  custom_color customization={plan.customization} delivery_time={plan.delivery_time} learning_program name={plan.name} seo speed={plan.speed} price={plan.price} href={`/${plan.id}`} ></Plan>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
