import SortSelect from "../ui/SortSelect";
import RadioForm from "./RadioForm";
import CreateTaskBtn from "../ui/CreateTaskBtn";

type TaskFormsProp = {
  sortBy: any;
  setSortBy: any;
  isCreatingTask: any;
  setIsCreatingTask: any;
  radioValue: any;
  setRadioValue: any;
  displayFilteredTasks: any;
  filteredByStatus: any;
  setFilteredByStatus: any;
};

const TaskForms = ({
  sortBy,
  setSortBy,
  isCreatingTask,
  setIsCreatingTask,
  radioValue,
  setRadioValue,
  displayFilteredTasks,
  filteredByStatus,
  setFilteredByStatus,
}: TaskFormsProp) => {
  return (
    <div className="flex justify-between mx-8">
      <SortSelect
        sortBy={sortBy}
        setSortBy={setSortBy}
        filteredByStatus={filteredByStatus}
        setFilteredByStatus={setFilteredByStatus}
      />

      <RadioForm
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        displayFilteredTasks={displayFilteredTasks}
        setSortBy={setSortBy}
      />
      {!isCreatingTask && (
        <CreateTaskBtn
          setIsCreatingTask={setIsCreatingTask}
          setSortBy={setSortBy}
        />
      )}
    </div>
  );
};

export default TaskForms;
