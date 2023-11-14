import { useEffect } from "react";

const RadioForm = ({
  radioValue,
  setRadioValue,
  displayFilteredTasks,
  setSortBy,
}: any) => {
  const handleChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    displayFilteredTasks();
    setSortBy("");
  }, [radioValue]);

  return (
    <form className="rounded-md py-1 space-x-6 hidden md:flex">
      <div>
        <input
          type="radio"
          id="all"
          name="radioValue"
          className="mr-1"
          value="all"
          checked={radioValue === "all"}
          onChange={handleChange}
        />
        <label>All</label>
      </div>
      <div>
        <input
          className="mr-1"
          type="radio"
          id="completed"
          name="radioValue"
          value="completed"
          checked={radioValue === "completed"}
          onChange={handleChange}
        />
        <label>Completed</label>
      </div>
      <div>
        <input
          className="mr-1"
          type="radio"
          id="not-completed"
          name="radioValue"
          value="not completed"
          checked={radioValue === "not completed"}
          onChange={handleChange}
        />
        <label>Not Completed</label>
      </div>
    </form>
  );
};

export default RadioForm;
