"use client";

import { useState } from "react";
import CreateTaskBtn from "../ui/CreateTaskBtn";
import FormModal from "../ui/FormModal";
import Tasks from "../ui/Tasks";

const Page = () => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  return (
    <div className="relative">
      {isCreatingTask && <FormModal />}
      <CreateTaskBtn setIsCreatingTask={setIsCreatingTask} />
      <Tasks />
    </div>
  );
};

export default Page;
