"use client";
import React from "react";

interface NavBarProps {
  props?: string;
}
const NavBar = ({ props }: NavBarProps) => {
  const links = [
    {
      id: 1,
      title: "home",
      href: "/",
    },
    {
      id: 2,
      title: "t-shirts",
      href: "/t-shirts",
    },
    {
      id: 3,
      title: "tote bags",
      href: "/tote-bags",
    },
    {
      id: 4,
      title: "mugs",
      href: "/mugs",
    },
    {
      id: 5,
      title: "hoodies",
      href: "/hoodies",
    },
    {
      id: 6,
      title: "about",
      href: "/about",
    },
  ];

  return (
    <ul tabIndex={0} className={props && `${props}`}>
      <li className="flex items-center justify-center lg:space-x-10 ">
        {links.map((link) => (
          <a
            href={link.href}
            role="button"
            tabIndex={0}
            key={link.id}
            className={`transition font-IBMPlex capitalize  hover:text-valar3 hover:underline hover:cursor-pointer hover:delay-25 `}
          >
            {link.title}
          </a>
        ))}
      </li>
    </ul>
  );
};

export default NavBar;
