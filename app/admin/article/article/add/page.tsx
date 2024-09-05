'use client'
import { CKEditor } from "ckeditor4-react";

const page = () => {
  return (
    <div className="container flex flex-col gap-3">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">نویسنده:</label>
        <select className="text-black w-52" name="" id="">
          <option value="">mohammad</option>
          <option value="">ali</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">Meta title (SEO):</label>
        <textarea className="rounded-md" rows={5} name="" id=""></textarea>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">Meta description (SEO):</label>
        <textarea className="rounded-md" rows={5} name="" id=""></textarea>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <label htmlFor="">نویسنده:</label>
        <div className="flex gap-3">
          <label htmlFor="">تاریخ:</label>
          <input type="text" className="text-black w-52" name="" id=""></input>
        </div>
        <div className="flex gap-3">
          <label htmlFor="">زمان:</label>
          <input type="text" className="text-black w-52" name="" id=""></input>
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

      
      <CKEditor></CKEditor>
    </div>
  );
};

export default page;
