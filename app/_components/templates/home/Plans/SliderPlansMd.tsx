import Plan from "@/app/_components/modules/home/Plan";
import { PlanProps } from "@/app/_types/types";
// import { plans } from "@/data/plans";
import React from "react";
export default async function SliderPlansMd() {
  const res = await fetch("http://91.107.138.134:8008/api/plan/list/", {cache: "no-store"});
    const plans = await res.json();
    console.log(plans);
  return (
    <div className="flex justify-center">
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-5">
        {
          plans.map((plan:PlanProps)=>(
            <div key={plan.id}>
              <Plan backup={plan.backup}  custom_color customization={plan.customization} delivery_time={plan.delivery_time} learning_program name={plan.name} seo speed={plan.speed} price={plan.price} href={`/${plan.id}`} ></Plan>
            </div>
          ))
        }
      </div>
    </div>
  );
}
