"use client";
import React, { useState } from "react";

const page = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    const data = {
      usernameOrEmail,
      password,
    };
    fetch("https://lovel-code.liara.run/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col items-end gap-2">
          <label htmlFor="">userName OR email</label>
          <input
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className="text-black text-left px-2 py-1 rounded-md"
            type="text"
            name=""
            id="userNameOrEmail"
          />
        </div>
        <div className="flex flex-col items-end gap-2">
          <label htmlFor="">userName OR email</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black text-left px-2 py-1 rounded-md"
            type="text"
            name=""
            id="userNameOrEmail"
          />
          <div className="flex justify-center w-full mt-3 ">
            <button
              type="button"
              onClick={submitHandler}
              className="bg-green-500 px-8 py-2 rounded-md"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
