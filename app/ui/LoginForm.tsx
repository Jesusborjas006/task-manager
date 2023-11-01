"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleForm = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (form.email !== "" && form.password !== "") {
      setIsAuthenticated(true);
    }
  }, [form.email, form.password]);

  return (
    <form className="border w-[400px] pt-4 px-6 pb-20 rounded-lg relative ">
      <h3 className="text-xl font-bold">Log In</h3>
      <p className="text-sm text-gray-800">
        You can use any email and password to log in.
      </p>
      <div className="mt-4 flex flex-col">
        <label className="font-semibold text-sm mb-1">Email</label>
        <input
          className="border py-1"
          type="email"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="font-semibold text-sm mb-1">Password</label>
        <input
          className="border py-1"
          type="password"
          name="password"
          value={form.password}
          onChange={handleForm}
          required
        />
      </div>
      <Link
        href={isAuthenticated ? "/tasks" : "/login"}
        className={`mt-4 border py-1 px-2 absolute right-6 bottom-5 rounded font-medium ${
          form.email !== "" && form.password !== ""
            ? "opacity-100"
            : "opacity-50 "
        } `}
      >
        Log In
      </Link>
    </form>
  );
};

export default LoginForm;
