type TaskProps = {
  title: string;
  body: string;
  priority: string;
};

const Task = ({ title, body, priority }: TaskProps) => {
  return (
    <div className="border">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{priority}</p>
    </div>
  );
};

export default Task;
