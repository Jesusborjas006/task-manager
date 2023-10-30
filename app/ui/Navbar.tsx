"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
