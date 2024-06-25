'use client';
import React from 'react';

const NavBar = () => {
  const links = [
    {
      id: 1,
      title: 'home',
      href: '/',
    },
    {
      id: 2,
      title: 'about',
      href: '/about',
    },
    {
      id: 3,
      title: 'hoodies',
      href: '/hoodies',
    },
    {
      id: 3,
      title: 't-shirts',
      href: '/t-shirts',
    },
    {
      id: 4,
      title: 'tote bags',
      href: '/tote-bags',
    },
    {
      id: 5,
      title: 'mugs',
      href: '/mugs',
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
