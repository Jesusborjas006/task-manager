"use client";

import { useState } from "react";
import { tasksData } from "../lib/placeholder-data";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksData);

  const taskElements = tasks.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      body={task.body}
      priority={task.priority}
    />
  ));

  return (
    <div className="px-8 gap-x-5 md:grid grid-cols-2 xl:grid-cols-3 py-14">
      {taskElements}
    </div>
  );
};

export default Tasks;
