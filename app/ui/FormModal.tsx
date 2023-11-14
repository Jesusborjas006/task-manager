"use client";

import { useState } from "react";

const FormModal = ({ addNewTask, setIsCreatingTask }: any) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
    priority: "Low",
    dueDate: "",
    completed: false,
  });
  const [inputsFilled, setInputsFilled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePriority = (e: { target: { value: string } }) => {
    setForm({ ...form, priority: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.title && form.body && form.dueDate) {
      setInputsFilled(true);

      const newTask = {
        id: Date.now(),
        title: form.title,
        body: form.body,
        priority: form.priority,
        dueDate: form.dueDate,
        completed: false,
      };

      addNewTask(newTask);
      resetInputs();
      setIsCreatingTask(false);
    } else {
      setInputsFilled(false);
    }
  };

  const resetInputs = () => {
    setForm({
      title: "",
      body: "",
      priority: "Low",
      dueDate: "",
      completed: false,
    });
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-60 z-50">
      <form className="border w-[340px] sm:w-[450px]  mx-auto rounded-xl py-4 px-8 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-xl ">Add New Task</h3>
          <p
            className="font-medium text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setIsCreatingTask(false)}
          >
            X
          </p>
        </div>
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
          Priority Status
          <select
            name="priority"
            className="w-full border mb-6 p-2 rounded-md"
            onChange={handlePriority}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label className="font-medium text-sm">
          Due Date
          <input
            type="date"
            className="w-full border mb-6 py-1 px-2 rounded-md"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
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
    </div>
  );
};

export default FormModal;
