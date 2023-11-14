import { Dispatch, SetStateAction } from "react";

type CreateTaskBtnProps = {
  setIsCreatingTask: Dispatch<SetStateAction<boolean>>;
  setSortBy: any;
};

const CreateTaskBtn = ({
  setIsCreatingTask,
  setSortBy,
}: CreateTaskBtnProps) => {
  return (
    <button
      className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg "
      onClick={() => {
        setIsCreatingTask(true);
      }}
    >
      Create Task
    </button>
  );
};

export default CreateTaskBtn;
