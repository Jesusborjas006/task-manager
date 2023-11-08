"use client";

import Task from "./Task";

const Tasks = ({ tasks, deleteTask }: any) => {
  const taskElements = tasks.map(
    (task: {
      id: number;
      title: string;
      body: string;
      priority: string;
      dueDate: string;
    }) => (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        body={task.body}
        priority={task.priority}
        dueDate={task.dueDate}
        deleteTask={deleteTask}
      />
    )
  );

  return (
    <div className="px-8 gap-x-5 md:grid grid-cols-2 xl:grid-cols-3 py-14">
      {taskElements}
    </div>
  );
};

export default Tasks;
