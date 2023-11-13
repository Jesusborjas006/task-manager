"use client";

import { useState } from "react";
import FormModal from "../ui/FormModal";
import Tasks from "../ui/Tasks";
import { tasksData } from "../lib/placeholder-data";
import NoTasksMessage from "../ui/NoTasksMessage";
import TaskForms from "../ui/TaskForms";

const Page = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [radioValue, setRadioValue] = useState("all");

  const addNewTask = (newTask: {
    id: number;
    title: string;
    body: string;
    priority: string;
    dueDate: string;
  }) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // const filterTasks = () => {
  //   const filteredTasks = tasks.filter((task) =)
  // }

  return (
    <div className="relative">
      {isCreatingTask && (
        <FormModal
          addNewTask={addNewTask}
          setIsCreatingTask={setIsCreatingTask}
        />
      )}

      <TaskForms
        sortBy={sortBy}
        setSortBy={setSortBy}
        tasks={tasks}
        setTasks={setTasks}
        isCreatingTask={isCreatingTask}
        setIsCreatingTask={setIsCreatingTask}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
      />

      {tasks.length ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};

export default Page;
