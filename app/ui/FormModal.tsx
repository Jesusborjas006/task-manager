const FormModal = () => {
  return (
    <div className="border w-[400px] mx-auto rounded-xl py-4 px-8">
      <h3 className="font-semibold text-lg mb-8">Add New Task</h3>
      <div className="flex flex-col space-y-1 mb-8">
        <label className="font-medium text-sm">Title</label>
        <input className="border rounded-md py-1 px-2" type="text" />
      </div>

      <div className="flex flex-col space-y-1 mb-8">
        <label className="font-medium text-sm">Description</label>
        <input className="border rounded-md py-1 px-2" type="text" />
      </div>

      <button className="bg-blue-500 text-white w-full py-2 rounded-lg font-semibold">
        Create Task
      </button>
    </div>
  );
};

export default FormModal;