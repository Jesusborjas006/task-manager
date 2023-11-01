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

  return <div>{taskElements}</div>;
};

export default Tasks;
