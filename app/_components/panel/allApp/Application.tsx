"use client";
import Link from "next/link";
import React, { useState } from "react";
import FeaturesApp from "./FeaturesApp";
import { ApplicationProps } from "@/app/_types/types"; 

const Accounts = [
  { id: 1, title: "کاربران", addLink: "/", editLink: "/" },
  { id: 1, title: "کدهای تایید", addLink: "/", editLink: "/" },
];
const Application: React.FC<ApplicationProps> = ({
  title,
  link,
  allFeaturesApp,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="">
        <div className="header p-2 bg-green-700 rounded-md text-white">
          <div className="flex gap-3">
            {isActive ? (
              <i
                onClick={() => setIsActive((priv) => !priv)}
                className="bi bi-plus-lg cursor-pointer p-1"
              ></i>
            ) : (
              <i
                onClick={() => setIsActive((priv) => !priv)}
                className="bi bi-dash-lg cursor-pointer p-1"
              ></i>
            )}
            <Link href={link}>{title}</Link>
          </div>
        </div>
        <div
          className={`p-2 font-bold flex flex-col gap-2 divide-y-2 ${
            isActive ? "hidden" : ""
          }`}
        >
          {allFeaturesApp.map((item) => (
            <FeaturesApp
              title={item.title}
              addLink={item.addLink}
              editLink={item.editLink}
              key={item.id}
            ></FeaturesApp>
          ))}
        </div>
      </div>
    </>
  );
};

export default Application;
