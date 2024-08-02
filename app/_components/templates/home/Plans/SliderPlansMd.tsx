import Plan from "@/app/_components/modules/home/Plan";
import { plans } from "@/data/plans";
import React from "react";
export default function SliderPlansMd() {
  return (
    <div className="flex justify-center">
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-5">
        {
          plans.map((plan)=>(
            <div key={plan.id}>
              <Plan href={`/tariffs/${plan.id}`} title={plan.title}></Plan>
            </div>
          ))
        }
      </div>
    </div>
  );
}
