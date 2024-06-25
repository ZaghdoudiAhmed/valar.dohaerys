'use client';
import Link from 'next/link';
import NavBar from './NavBar';
import { useRouter } from 'next/navigation';

export async function TopBar() {
  const router = useRouter();
  return (
    <header className="hidden p-4  bg-white md:block border-b ">
      <div className="max-w-containesr-lg mx-auto flex items-center justify-between px-4">
        <Link
          prefetch={false}
          href="/"
          className="text-2xl font-bold font-IBMPlex text-valar1 hover:text-valar2"
        >
          Valar.dohaerys
        </Link>
        <div>
          <NavBar />
        </div>
        <div className="flex space-x-2 border-l pl-5">
          <button className=" flex  transition border border-black bg-white hover:bg-black hover:delay-25 text-black hover:text-white font-IBMPlex font-semibold  px-5 py-2  rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Checkout
          </button>
          <button
            onClick={() => router.push('/contact')}
            className=" transition border border-black bg-valar3 hover:bg-white hover:delay-25 text-black font-IBMPlex font-semibold  px-5 py-2  rounded-xl "
          >
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}
