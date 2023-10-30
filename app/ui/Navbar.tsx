import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 text-white py-4 px-6">
      <Logo />
      <Link href="/login" className="text-xl">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
