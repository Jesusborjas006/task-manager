"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const getBtnStyling = () => {
    if (form.email !== "" && form.password !== "") {
      return "opacity-100";
    } else {
      return "opacity-50";
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
    } else if (emailRegex.test(form.email) && form.password === "") {
      setError("Please enter your password");
    } else {
      setError("");
      router.push("/tasks");
    }
  };

  const handleForm = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateEmail();
  };

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
        />
      </div>
      {error && (
        <div className="bg-red-500 mt-4 p-1 px-2 font-bold text-white text-sm">
          {error}
        </div>
      )}
      <button
        className={`mt-4 border py-1 px-2 absolute right-6 bottom-5 rounded font-medium ${getBtnStyling()} `}
        onClick={handleSubmit}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
