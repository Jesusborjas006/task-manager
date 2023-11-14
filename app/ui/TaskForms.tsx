import SortSelect from "../ui/SortSelect";
import RadioForm from "./RadioForm";
import CreateTaskBtn from "../ui/CreateTaskBtn";

type TaskFormsProp = {
  sortBy: any;
  setSortBy: any;
  tasks: any;
  setTasks: any;
  isCreatingTask: any;
  setIsCreatingTask: any;
  radioValue: any;
  setRadioValue: any;
  displayFilteredTasks: any;
};

const TaskForms = ({
  sortBy,
  setSortBy,
  tasks,
  setTasks,
  isCreatingTask,
  setIsCreatingTask,
  radioValue,
  setRadioValue,
  displayFilteredTasks,
}: TaskFormsProp) => {
  return (
    <div className="flex justify-between mx-8">
      <SortSelect
        sortBy={sortBy}
        setSortBy={setSortBy}
        tasks={tasks}
        setTasks={setTasks}
      />

      <RadioForm
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        tasks={tasks}
        displayFilteredTasks={displayFilteredTasks}
      />
      {!isCreatingTask && (
        <CreateTaskBtn setIsCreatingTask={setIsCreatingTask} />
      )}
    </div>
  );
};

export default TaskForms;
