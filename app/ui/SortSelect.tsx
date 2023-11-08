const SortSelect = ({ setSortBy }: any) => {
  const handleChange = (e: any) => {
    setSortBy(e.target.value);
  };

  return (
    <select className="border ml-10" onChange={handleChange}>
      <option value="">Sort by</option>
      <option value="priority">Priority (Low to High)</option>
      <option value="priority2">Priority (High to Low)</option>
    </select>
  );
};

export default SortSelect;
