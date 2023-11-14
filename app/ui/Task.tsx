import { useEffect, useState } from "react";

type TaskProps = {
  id: number;
  title: string;
  body: string;
  priority: string;
  dueDate: string;
  completed: boolean;
  deleteTask: any;
};

const Task = ({
  id,
  title,
  body,
  priority,
  dueDate,
  completed,
  deleteTask,
}: TaskProps) => {
  const [completionStatus, setCompletionStatus] = useState(completed);

  const getStyling = () => {
    if (priority === "High") {
      return "bg-red-300 text-red-600";
    } else if (priority === "Medium") {
      return "bg-blue-300 text-blue-600";
    } else {
      return "bg-green-300 text-green-600";
    }
  };

  return (
    <div className="border py-3 px-4 rounded-xl space-y-2 my-6 md:my-3 relative">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p
          className="font-medium text-xl hover:text-red-500 cursor-pointer"
          onClick={() => deleteTask(id)}
        >
          X
        </p>
      </div>
      <p className=" text-gray-700 pb-20">{body}</p>
      <p
        className={`absolute right-[-1px] bottom-[-1px] font-semibold rounded-xl rounded-tr-none rounded-bl-none py-1 px-2 ${getStyling()} text-sm`}
      >
        {priority} priority
      </p>

      {completionStatus ? (
        <div className="flex absolute bottom-10 space-x-2">
          <p className=" bg-green-300 px-2 py-1 rounded-md text-sm font-medium">
            Completed
          </p>
          <button className="border px-2 py-1 rounded-md text-sm font-medium hover:bg-red-400 ">
            Undo
          </button>
        </div>
      ) : (
        <button className="border px-2 py-1 absolute bottom-10 rounded-md text-sm font-medium">
          Complete Task
        </button>
      )}

      <p className="absolute bottom-1 font-medium text-[15px] text-gray-700">
        <span className="">Due:</span> {dueDate}
      </p>
    </div>
  );
};

export default Task;
