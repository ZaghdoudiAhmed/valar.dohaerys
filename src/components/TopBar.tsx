"use client";
import Link from "next/link";
import NavBar from "./NavBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

interface TopBarProps {
  itemCount: number;
}
export async function TopBar({ itemCount }: TopBarProps) {
  const router = useRouter();
  return (
    <>
      <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"></Script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
      />

      <div className="bg-gray-100 px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-center">
          <button
            className="swiper-prev-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 rtl:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-gray-900">
                  Love Alpine JS?
                  <a href="#" className="block underline sm:inline-block">
                    Check out this new course!
                  </a>
                </p>
              </div>

              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-gray-900">
                  Love Tailwind CSS?
                  <a href="#" className="block underline sm:inline-block">
                    Check out this new course!
                  </a>
                </p>
              </div>

              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-gray-900">
                  Love Laravel?
                  <a href="#" className="block underline sm:inline-block">
                    Check out this new course!
                  </a>
                </p>
              </div>
            </div>
          </div>

          <button
            className="swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 rtl:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-base-100">
        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <NavBar props="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" />
          </div>
          <a>
            <Link prefetch={false} href="/">
              <Image
                src={require("@/assets/VALAR-DOHAERYS.png")}
                alt="valar"
                height={60}
              />
            </Link>
          </a>
        </div>
        <div className=" hidden lg:flex">
          <NavBar />
        </div>
        <div className=" flex flex-row">
          <button className="flex transition border border-black bg-white hover:bg-black hover:delay-25 text-black hover:text-white font-IBMPlex font-semibold  px-5 py-2 rounded-xl mr-2  ">
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
            {itemCount > 0 && (
              <div className="ml-2  bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </div>
            )}
          </button>

          <button
            onClick={() => router.push("/contact")}
            className=" transition border border-black bg-valar3 hover:bg-white hover:delay-25 text-black font-IBMPlex font-semibold  px-4 py-2  rounded-xl "
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
