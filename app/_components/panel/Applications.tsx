import React from "react";
import Application from "./allApp/Application";
import { ApplicationArr } from "@/app/_types/types"; 

const Applications = () => {
  const allAplications: ApplicationArr[] = [
    {
      id: 1,
      title: "ACCOUNTS",
      Link: "/",
      allFeaturesApp: [
        {
          id: 1,
          title: "کاربران",
          addLink: "admin/account/user/add",
          editLink: "admin/account/user/edit",
        },
        {
          id: 2,
          title: "کدهای تایید",
          addLink: "admin/account/verify-code/add",
          editLink: "admin/account/verify-code/edit",
        },
      ],
    },
    {
      id: 2,
      title: "ARTICLES",
      Link: "/",
      allFeaturesApp: [
        {
          id: 1,
          title: "مقالات",
          addLink: "admin/articles/article/add",
          editLink: "admin/articles/article/edit",
        },
        {
          id: 2,
          title: "دسته بندی ها",
          addLink: "admin/articles/category/add",
          editLink: "admin/articles/category/edit",
        },
        {
          id: 3,
          title: "دیدگاه ها",
          addLink: "admin/articles/comment/add",
          editLink: "admin/articles/comment/edit",
        },
        {
          id: 4,
          title: "هشتک ها",
          addLink: "admin/articles/tag/add",
          editLink: "admin/articles/tag/edit",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-2">
        {allAplications.map((item: ApplicationArr) => (
          <Application
            key={item.id}
            title={item.title}
            link={item.Link}
            allFeaturesApp={item.allFeaturesApp}
          ></Application>
        ))}
      </div>
    </>
  );
};

export default Applications;
