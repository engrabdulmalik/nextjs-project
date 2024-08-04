"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "text-yellow-400" : "text-white"}`}
    >
      {children}
    </Link>
  );
};


export default NavLink;
