import React from "react";
import Title from "../../../Title";

const AddUser = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">اضافه کردن کاربر</h1>
        <p className="">
          ابتدا یک نام کاربری و گذرواژه وارد کنید. سپس می توانید مشخصات دیگر
          کاربر را ویرایش کنید.
        </p>
        <Title title="اطلاعات ورود"></Title>
        <div className="flex flex-col md:flex-row gap-5 border-b pb-3 md:items-center w-full">
          <label className="w-32" htmlFor="name">
            نام کاربری:
          </label>
          <input className="border rounded-md p-2 w-80" type="text" id="name" />
        </div>
        <div className="border-b pb-3 w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-5 md:items-center ">
            <label className="font-bold w-32" htmlFor="name">
              گذرواژه:
            </label>
            <input
              className="border rounded-md p-2 w-80"
              type="text"
              id="name"
            />
          </div>
          <p className="text-sm w-96 md:mr-40">
            گذرواژه شما نمی‌تواند شبیه سایر اطلاعات شخصی شما باشد. رمز عبور شما
            می‌بایست حداقل از 8 حرف تشکیل شده باشد. گذرواژه شما نمی تواند یک
            گذرواژه معمول باشد. گذرواژه شما نمی تواند کلا عدد باشد
          </p>
        </div>
        <div className="border-b pb-3 w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-5 md:items-center ">
            <label className="font-bold w-32" htmlFor="name">
              تایید گذرواژه:
            </label>
            <input
              className="border rounded-md p-2 w-80"
              type="text"
              id="name"
            />
          </div>
          <p className="text-sm w-96 md:mr-40">
            برای تائید، رمز عبور قبلی را وارد کنید.
          </p>
        </div>
        <Title title="اطلاعات شخصی"></Title>
        <div className="flex flex-col md:flex-row gap-5 border-b pb-3 md:items-center w-full">
          <label className="w-32" htmlFor="name">
            نام :
          </label>
          <input className="border rounded-md p-2 w-80" type="text" id="name" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-b pb-3 md:items-center w-full">
          <label className="w-32" htmlFor="name">
            نام خانوادگی:
          </label>
          <input className="border rounded-md p-2 w-80" type="text" id="name" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-b pb-3 md:items-center w-full">
          <label className="w-32" htmlFor="name">
            جنسیت:
          </label>
          <select className="p-2 w-44 border rounded-md">
            <option value="man">مرد</option>
            <option value="woman">زن</option>
            <option value="other">سایر</option>
          </select>
        </div>
        <div className="border-b pb-3 w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-5 md:items-center ">
            <label className=" w-32" htmlFor="name">
              عکس پروفایل:
            </label>
            <input className="" type="file" id="name" />
          </div>
          <p className="text-sm w-96 md:mr-40">
            ابعاد عکس میبایست 1x1 (مربعی) و حجم آن کمتر از 2 مگابایت باشد.
          </p>
        </div>
        <Title title="دسترسی ها"></Title>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">فعال</label>
          </div>
          <p>
            نشان می‌دهد که آیا این کاربر اجازهٔ فعالیت دارد یا خیر. به جای حذف
            کاربر این تیک را بردارید.
          </p>
        </div>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">وضعیت کارمندی</label>
          </div>
          <p>
            نشان می‌دهد که آیا این کاربر می‌تواند وارد این وبگاه مدیریت شود یا
            خیر.
          </p>
        </div>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">نویسنده</label>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">دسترسی به فاکتورها</label>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">مدیر دسترسی کامل دارد.</label>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">ابرکاربر</label>
          </div>
          <p>
            نشان می‌دهد که این کاربر همهٔ اجازه‌ها را دارد بدون آنکه به صراحت به
            او اختصاص داده شده باشد.
          </p>
        </div>
      </div>
    </>
  );
};

export default AddUser;
