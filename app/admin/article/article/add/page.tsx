"use client";

import EditorComponent from "@/app/_components/modules/Editoe/Editor";

const page = () => {
  return (
    <div className="container flex flex-col gap-20">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">نویسنده:</label>
        <select className="text-black w-52 " name="" id="">
          <option value="">mohammad</option>
          <option value="">ali</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <label htmlFor="">Meta title (SEO):</label>
        <textarea
          className="rounded-md w-full max-w-[600px] text-black"
          rows={5}
          name=""
          id=""
        ></textarea>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <label htmlFor="">Meta description (SEO):</label>
        <textarea
          className="rounded-md w-full max-w-[600px] text-black"
          rows={5}
          name=""
          id=""
        ></textarea>
      </div>

      <div className="flex justify-between items-center ">
        <label htmlFor="">تاریخ ایجاد:</label>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <label htmlFor="">تاریخ:</label>
            <input
              type="text"
              className="text-black w-52"
              name=""
              id=""
            ></input>
          </div>
          <div className="flex gap-3">
            <label htmlFor="">زمان:</label>
            <input
              type="text"
              className="text-black w-52"
              name=""
              id=""
            ></input>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">دسته بندی:</label>
        <select className="text-black w-52" name="" id="">
          <option value="">mohammad</option>
          <option value="">ali</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">عنوان مقاله:</label>
        <input type="text" className="text-black w-52" name="" id=""></input>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">محتوای مقاله:</label>
        <input type="text" className="text-black w-52" name="" id=""></input>
      </div>

      <div className="text-black">
        <h1>صفحه ویرایشگر</h1>
        <EditorComponent></EditorComponent>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label className="font-bold" htmlFor="">
          تصویر شاخص:
        </label>
        <input type="file" name="" id="" />
      </div>

      <div className="">
        <label className="" htmlFor="">
          در سایت منتشر شود
        </label>
        <input type="checkbox" name="" id="" />
        <br />
        <p className="text-xs ">
          غیرفعال بودن این فیلد به معنی پیش نویس بودن مقاله و عدم انتشار آن در
          سایت می‌باشد.
        </p>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label className="font-bold" htmlFor="">
          بازدیدها:
        </label>
        <input
          className="text-black w-52 text-xl"
          type="number"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label className="font-bold" htmlFor="">
          بازدیدها:
        </label>
        <input
          className="text-black w-52 text-xl"
          type="number"
          name=""
          id=""
        />
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          هشتگ ها:
        </h3>
        <select multiple className="text-black w-52" name="" id="">
          <option value="">mohammad</option>
          <option value="">ali</option>
        </select>
      </div>
    </div>
  );
};

export default page;
