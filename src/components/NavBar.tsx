'use client';

import React, { useState } from 'react';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    {
      id: 1,
      title: 'home',
      href: '/home',
    },
    {
      id: 2,
      title: 'about',
      href: '/about',
    },
    {
      id: 3,
      title: 'hoodies',
      href: '/collection/hoodies',
    },
    {
      id: 3,
      title: 't-shirts',
      href: '/collection/t-shirts',
    },
    {
      id: 4,
      title: 'tote bags',
      href: '/collection/tote-bags',
    },
    {
      id: 5,
      title: 'mugs',
      href: '/collection/mugs',
    },
  ];

  return (
    <div>
      <div className="flex space-x-10">
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
      </div>
    </div>
  );
};

export default NavBar;
