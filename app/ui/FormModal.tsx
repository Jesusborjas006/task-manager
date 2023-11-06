"use client";

import { useState } from "react";

const FormModal = ({ addNewTask }: any) => {
  const [form, setForm] = useState({ title: "", body: "", priority: "low" });
  const [inputsFilled, setInputsFilled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePriority = (e: { target: { value: string } }) => {
    setForm({ ...form, priority: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.title && form.body) {
      setInputsFilled(true);

      const newTask = {
        id: Date.now(),
        title: form.title,
        body: form.body,
        priority: form.priority,
      };

      addNewTask(newTask);
      resetInputs();
    } else {
      setInputsFilled(false);
    }
  };

  const resetInputs = () => {
    setForm({ title: "", body: "", priority: "" });
  };

  return (
    <form className="border w-[400px] mx-auto rounded-xl py-4 px-8">
      <h3 className="font-semibold text-lg mb-6">Add New Task</h3>
      <div className="flex flex-col space-y-1 mb-6">
        <label className="font-medium text-sm">Title</label>
        <input
          className="border rounded-md py-1 px-2"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col space-y-1 mb-6">
        <label className="font-medium text-sm">Description</label>
        <input
          className="border rounded-md py-1 px-2"
          type="text"
          name="body"
          value={form.body}
          onChange={handleChange}
          required
        />
      </div>

      <label className="font-medium text-sm">
        Priority
        <select
          name="priority"
          className="w-full border mb-6 p-1 rounded-md"
          value={form.priority}
          onChange={handlePriority}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      {!inputsFilled && (
        <p className="bg-red-300 text-red-600 py-1 px-2 mb-4 rounded-md">
          Please fill out all inputs
        </p>
      )}

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
