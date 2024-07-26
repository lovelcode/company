import React from "react";
import Player from "./Player";
import Btn from "../../modules/Btn/Btn";

export default function AddOrder() {
  return (
    <div className="px-5 mt-11">
      <div className="flex justify-center text-center">
        <div className="title">
          <div className="md:flex font-cinema text-[30px] md:text-[40px] ">
            <h1 className="">{("professionaldigitalagencymarketing")}</h1>
            <h2 className="gradient-orange text-transparent bg-clip-text">
              {("lovelcode")}
            </h2>
          </div>
          <h2 className="font-light text-xs text-gray_text md:text-base">
            {("weareatthesideofsettingupyourvirtualbusiness")}
          </h2>
        </div>
      </div>
      <div className="mid">
        <Player></Player>
      </div>
      <div className="w-full down flex justify-center mt-5">
        <div className="md:hidden text-xs">
          <Btn
            bg="gradient"
            type="box7"
            href={"/"}
            title={"placeanorderforwebsitedesign"}
          ></Btn>
        </div>
        <div className="hidden md:flex text-[18px] shadow-btn">
          <Btn
            bg="gradient"
            type="box2"
            href={"/"}
            title={"placeanorderforwebsitedesign"}
          ></Btn>
        </div>
      </div>
    </div>
  );
}
