"use client";

import Task from "./Task";

const Tasks = ({ tasks }: any) => {
  const taskElements = tasks.map(
    (task: { id: number; title: string; body: string; priority: string }) => (
      <Task
        key={task.id}
        title={task.title}
        body={task.body}
        priority={task.priority}
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
