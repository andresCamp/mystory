import React from 'react';
import Link from 'next/link';   // Importing Link from next.js
import Image from 'next/image'; // Importing Image from next.js
import NavLink from './NavLink';

const SideBar = () => {
  return (
    <div className="bg-[#2868B3] h-screen w-64 fixed flex flex-col items-center py-8">
      <div className="mb-10">
        <Image src="/MyStoryLight.svg" alt="Logo" width={150} height={150} /> {/* Assuming logo.png is in your public folder */}
      </div>
      <ul className="space-y-2 text-lg flex flex-col gap-4">
        <NavLink href="/" name="Home" isComplete={false} />
        <NavLink href="/step1" name="Step 1" isComplete={false} />
        <NavLink href="/step2" name="Step 2" isComplete={false} />
        <NavLink href="/step3" name="Step 3" isComplete={false} />
        <NavLink href="/step4" name="Step 4" isComplete={false} />
      </ul>
    </div>
  );
}

export default SideBar;
