type TaskProps = {
  title: string;
  body: string;
  priority: string;
};

const Task = ({ title, body, priority }: TaskProps) => {
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
    <div className="border p-2 px-4 rounded-xl space-y-2 my-6 md:my-3 relative">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className=" text-gray-700 pb-10">{body}</p>
      <p
        className={`absolute right-[-1px] bottom-[-1px] font-semibold rounded-xl rounded-tr-none rounded-bl-none py-1 px-2 ${getStyling()} text-sm`}
      >
        {priority} priority
      </p>
    </div>
  );
};

export default Task;
