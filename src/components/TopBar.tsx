import Link from 'next/link';
import Image from 'next/image';
import NavBar from './NavBar';

export async function TopBar() {
  return (
    <header className="hidden p-4  bg-white md:block border-b">
      <div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
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
          <button className=" transition border border-black bg-white hover:bg-black hover:delay-25 text-black hover:text-white font-IBMPlex font-semibold  px-5 py-2  rounded-xl ">
            Checkout
          </button>
          <button className=" transition border border-black bg-valar3 hover:bg-white hover:delay-25 text-black font-IBMPlex font-semibold  px-5 py-2  rounded-xl ">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}
