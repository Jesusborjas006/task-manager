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
  const [filteredByStatus, setFilteredByStatus] = useState(tasks);

  const addNewTask = (newTask: {
    id: number;
    title: string;
    body: string;
    priority: string;
    dueDate: string;
  }) => {
    setTasks([...tasks, newTask]);
    setFilteredByStatus([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    const completedTasks = filteredTasks.filter(
      (task) => task.completed === true
    );
    const notCompletedTasks = filteredTasks.filter(
      (task) => task.completed === false
    );

    if (radioValue === "completed" && completedTasks.length === 0) {
      setTasks(filteredTasks);
      setFilteredByStatus([]);
    } else if (
      radioValue === "not completed" &&
      notCompletedTasks.length === 0
    ) {
      setTasks(filteredTasks);
      setFilteredByStatus([]);
    } else {
      setTasks(filteredTasks);
      setFilteredByStatus(filteredTasks);
    }
  };

  const displayFilteredTasks = () => {
    if (radioValue === "all") {
      setFilteredByStatus(tasks);
    } else if (radioValue === "completed") {
      const filteredTasks = tasks.filter((task) => task.completed === true);
      setFilteredByStatus(filteredTasks);
    } else if (radioValue === "not completed") {
      const filteredTasks = tasks.filter((task) => task.completed === false);
      setFilteredByStatus(filteredTasks);
    }
  };

  return (
    <div className="relative">
      {isCreatingTask && (
        <FormModal
          addNewTask={addNewTask}
          setIsCreatingTask={setIsCreatingTask}
          setRadioValue={setRadioValue}
          setSortBy={setSortBy}
        />
      )}

      <TaskForms
        sortBy={sortBy}
        setSortBy={setSortBy}
        setIsCreatingTask={setIsCreatingTask}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        displayFilteredTasks={displayFilteredTasks}
        filteredByStatus={filteredByStatus}
        setFilteredByStatus={setFilteredByStatus}
      />

      {filteredByStatus.length ? (
        <Tasks
          tasks={tasks}
          filteredByStatus={filteredByStatus}
          deleteTask={deleteTask}
        />
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};

export default Page;
