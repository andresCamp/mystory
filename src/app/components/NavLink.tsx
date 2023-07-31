'use client'
import React, { useState, FC } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  name: string;
  isComplete: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, name, isComplete: initialIsComplete }) => {
  const [isComplete, setIsComplete] = useState(initialIsComplete);

  const toggleCompletion = () => {
    setIsComplete(!isComplete);
  };

  return (
    <li onClick={toggleCompletion} className="cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-600 text-white inline-flex items-center">
      <Link href={href}>
        {name}
      </Link>
      {isComplete && <FaCheckCircle className="text-green-500 ml-2" />}
    </li>
  );
};

export default NavLink;
