import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="p-10 bg-neutral-700 text-white">
        <div className="flex gap-2 text-2xl font-bold">
          <h3 className="">پنل مدیریتی</h3>
          <h1 className="text-red-600">LOVELCODE</h1>
        </div>
        <div className="flex gap-2 mt-5">
            <Link href={'/'} className="text-yellow-500">به پنل مدیریتی لاولکد خوش آمدید</Link>
            <span>/</span>
            <Link className="underline underline-offset-4" href={'/'}>نمایش سایت شما</Link>
            <span>/</span>
            <Link className="underline underline-offset-4" href={'/'}>تغییر رمز</Link>
            <span>/</span>
            <Link className="underline underline-offset-4" href={'/'}>خروج</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
