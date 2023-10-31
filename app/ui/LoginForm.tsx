const LoginForm = () => {
  return (
    <form className="border w-[400px] pt-4 px-6 pb-20 rounded-lg relative ">
      <h3 className="text-xl font-bold">Log In</h3>
      <p className="text-sm text-gray-800">
        You can use any email and password to log in.
      </p>
      <div className="mt-4 flex flex-col">
        <label className="font-semibold text-sm mb-1">Email</label>
        <input className="border py-1" type="email" />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="font-semibold text-sm mb-1">Password</label>
        <input className="border py-1" type="password" />
      </div>
      <button className="mt-4 border py-1 px-2 absolute right-6 bottom-5 rounded font-medium">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
