"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];
  if (pathName.includes("dashboard")) {
    return (
      <div className="p-4 bg-green-400 text-white">Welcome to Dashboard</div>
    );
  }
  return (
    <div>
      <nav className="bg-red-500 text-white flex justify-between py-4 px-4 text-xl">
        <h3>Next Hero</h3>
        <ul className="flex gap-5">
          {links?.map((link) => (
            <li key={link.path}>
              <Link
                className={`${pathName === link.path && "text-yellow-400"}`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
