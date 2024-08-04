"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

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

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  className: "text-lg font-semibold leading-6",
};

export default NavLink;
