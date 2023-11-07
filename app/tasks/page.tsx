"use client";

import { useState } from "react";
import CreateTaskBtn from "../ui/CreateTaskBtn";
import FormModal from "../ui/FormModal";
import Tasks from "../ui/Tasks";
import { tasksData } from "../lib/placeholder-data";
import NoTasksMessage from "../ui/NoTasksMessage";

const Page = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

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

  return (
    <div className="relative">
      {isCreatingTask && (
        <FormModal
          addNewTask={addNewTask}
          setIsCreatingTask={setIsCreatingTask}
        />
      )}

      {!isCreatingTask && (
        <CreateTaskBtn setIsCreatingTask={setIsCreatingTask} />
      )}

      {tasks.length ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};

export default Page;
