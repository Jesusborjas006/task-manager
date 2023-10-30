import { users } from "../lib/placeholder-data";

const Users = () => {
  return (
    <div className="flex justify-center space-x-5">
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
