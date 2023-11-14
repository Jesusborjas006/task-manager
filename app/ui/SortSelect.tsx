import { useEffect } from "react";

const priorityArray = ["Low", "Medium", "High"];

const SortSelect = ({
  sortBy,
  setSortBy,
  filteredByStatus,
  setFilteredByStatus,
}: any) => {
  const sortArray = () => {
    if (sortBy === "") {
      return;
    } else if (sortBy === "priorityLow") {
      setFilteredByStatus(
        [...filteredByStatus].sort((a, b) => {
          return (
            priorityArray.indexOf(a.priority) -
            priorityArray.indexOf(b.priority)
          );
        })
      );
    } else if (sortBy === "priorityHigh") {
      setFilteredByStatus(
        [...filteredByStatus].sort((a, b) => {
          return (
            priorityArray.indexOf(b.priority) -
            priorityArray.indexOf(a.priority)
          );
        })
      );
    } else if (sortBy === "dueDateSoon") {
      setFilteredByStatus(
        [...filteredByStatus].sort((a, b) => {
          return Date.parse(a.dueDate) - Date.parse(b.dueDate);
        })
      );
    } else if (sortBy === "dueDateLater") {
      setFilteredByStatus(
        [...filteredByStatus].sort((a, b) => {
          return Date.parse(b.dueDate) - Date.parse(a.dueDate);
        })
      );
    }
  };

  useEffect(() => {
    sortArray();
  }, [sortBy]);

  return (
    <select
      className="border rounded-md py-1"
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort by</option>
      <option value="priorityLow">Priority (Low to High)</option>
      <option value="priorityHigh">Priority (High to Low)</option>
      <option value="dueDateSoon">Due Soon</option>
      <option value="dueDateLater">Due Later</option>
    </select>
  );
};

export default SortSelect;
