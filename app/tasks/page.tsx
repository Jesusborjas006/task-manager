"use client";

import { useEffect, useState } from "react";
import CreateTaskBtn from "../ui/CreateTaskBtn";
import FormModal from "../ui/FormModal";
import Tasks from "../ui/Tasks";
import { tasksData } from "../lib/placeholder-data";
import NoTasksMessage from "../ui/NoTasksMessage";
import SortSelect from "../ui/SortSelect";

const priorityArray = ["Low", "Medium", "High"];

const Page = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [sortBy, setSortBy] = useState("");

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

  const sortTasks = () => {
    if (sortBy === "priority") {
      setTasks(
        [...tasks].sort((a, b) => {
          return (
            priorityArray.indexOf(a.priority) -
            priorityArray.indexOf(b.priority)
          );
        })
      );
    } else if (sortBy === "priority2") {
      setTasks(
        [...tasks].sort((a, b) => {
          return (
            priorityArray.indexOf(b.priority) -
            priorityArray.indexOf(a.priority)
          );
        })
      );
    }
  };

  useEffect(() => {
    if (sortBy === "priority") {
      setTasks(
        [...tasks].sort((a, b) => {
          return (
            priorityArray.indexOf(a.priority) -
            priorityArray.indexOf(b.priority)
          );
        })
      );
    } else if (sortBy === "priority2") {
      setTasks(
        [...tasks].sort((a, b) => {
          return (
            priorityArray.indexOf(b.priority) -
            priorityArray.indexOf(a.priority)
          );
        })
      );
    }
  }, [sortBy, tasks]);

  return (
    <div className="relative">
      {isCreatingTask && (
        <FormModal
          addNewTask={addNewTask}
          setIsCreatingTask={setIsCreatingTask}
        />
      )}

      <SortSelect sortBy={sortBy} setSortBy={setSortBy} sortTasks={sortTasks} />

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
