"use client";

import { useState } from "react";

// type FormModalProps = {

// }

const FormModal = ({ addNewTask }: any) => {
  const [form, setForm] = useState({ title: "", body: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: form.title,
      body: form.body,
      priority: "High",
    };

    addNewTask(newTask);
  };

  return (
    <form className="border w-[400px] mx-auto rounded-xl py-4 px-8">
      <h3 className="font-semibold text-lg mb-8">Add New Task</h3>
      <div className="flex flex-col space-y-1 mb-8">
        <label className="font-medium text-sm">Title</label>
        <input
          className="border rounded-md py-1 px-2"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col space-y-1 mb-8">
        <label className="font-medium text-sm">Description</label>
        <input
          className="border rounded-md py-1 px-2"
          type="text"
          name="body"
          value={form.body}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-blue-500 text-white w-full py-2 rounded-lg font-semibold"
        onClick={handleSubmit}
      >
        Create Task
      </button>
    </form>
  );
};

export default FormModal;
