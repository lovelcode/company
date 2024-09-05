import React from "react";
import TitleHeader from "../_components/panel/TitleHeader";
import Applications from "../_components/panel/Applications";
import RecentActivities from "../_components/panel/RecentActivities";
import { redirect } from "next/navigation";

const page = () => {
  const isAdmin = true
  if(!isAdmin){
    redirect('/admin/login')
  }
  return (
    <>
      <div className="p-5">
        <TitleHeader></TitleHeader>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="r md:basis-2/3">
          <Applications></Applications>
          </div>
          <div className="l md:basis-1/3">
            <RecentActivities></RecentActivities>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
