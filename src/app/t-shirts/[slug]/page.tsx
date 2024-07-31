"use client";
import React from "react";
import { TSHIRTS } from "@/utils/t-shirts";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import defaut from "@/assets/default.png";
export default function Tshirt({ params: { slug } }: any) {
  const tshirt = TSHIRTS.find((tshirt) => tshirt.slug === slug);

  const breadCrumbItems: any = [
    {
      name: "Homepage",
      link: `/`,
      icon: (
        <svg
          className="w-3 h-3 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),
    },
    {
      name: `T-shirts`,
      link: `/t-shirts`,
      icon: (
        <svg
          className="rtl:rotate-180 w-3 h-3 text-black mx-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      ),
    },
    {
      name: `${tshirt?.slug}`,
      link: `/t-shirts/${tshirt?.slug}`,
      underline: true,
      icon: (
        <svg
          className="rtl:rotate-180 w-3 h-3 text-black mx-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      ),
    },
  ];

  const renderImages = () => {
    return (
      <>
        <Image
          alt={tshirt ? tshirt.name : "default alt"}
          src={tshirt ? tshirt.picture : defaut}
          className={`    absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105 ${
            tshirt?.picture2 ? "hover:opacity-0" : ""
          }`}
        />
        {tshirt?.picture2 && (
          <Image
            alt={tshirt.name}
            src={tshirt.picture2}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105 opacity-0 hover:opacity-100"
          />
        )}
      </>
    );
  };

  return (
    <>
      <div className={`flex pt-4 lg:pl-36 lg:pt-10 w-full `}>
        <Breadcrumb items={breadCrumbItems} />
      </div>

      <section className="text-gray-700 font-IBMPlex body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto lg:flex  ">
            <div className=" relative flex-1 ">{renderImages()}</div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm font-IBMPlex title-font text-gray-500 tracking-widest uppercase">
                VALAR DOHAERYS - t-shirts
              </h2>
              <h1 className="text-gray-900 text-3xl font-IBMPlex title-font font-medium mb-1">
                {tshirt?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <div className="space-y-5">
                <p className="leading-relaxed font-IBMPlex">
                  Introducing our versatile t-shirt, crafted for comfort and
                  style!
                </p>
                <ul className="font-IBMPlex list-disc ml-5 space-y-5">
                  <li>
                    <strong>Fit:</strong> Regular fit – Perfectly balanced for a
                    relaxed, yet flattering silhouette.
                  </li>
                  <li>
                    <strong>Material:</strong> 100% cotton – Soft, breathable,
                    and gentle on the skin.
                  </li>
                  <li>
                    <strong>Sizes Available:</strong>
                    <ul className=" list-disc ml-10 space-y-5 mt-5">
                      <li>
                        <strong>Adults:</strong> S, M, L, XL, XXL
                      </li>
                      <li>
                        <strong>Kids:</strong> Sizes from 4 years to 14 years –
                        Ideal for growing children.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="leading-relaxed font-IBMPlex">
                  Whether for casual wear or everyday adventures, this t-shirt
                  offers a classic look and exceptional comfort for both adults
                  and kids.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-900 font-IBMPlex">
                  Color
                </h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <div className="flex items-center space-x-3">
                    <label
                      aria-label="White"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        defaultValue="White"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                      />
                    </label>
                    {/* Active and Checked: "ring ring-offset-1" */}
                    <label
                      aria-label="Gray"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        defaultValue="Gray"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"
                      />
                    </label>
                    {/* Active and Checked: "ring ring-offset-1" */}
                    <label
                      aria-label="Black"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        defaultValue="Black"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 font-IBMPlex">
                      Size
                    </h3>
                  </div>
                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="S"
                          className="sr-only"
                        />
                        <span>S</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="M"
                          className="sr-only"
                        />
                        <span>M</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="L"
                          className="sr-only"
                        />
                        <span>L</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="XL"
                          className="sr-only"
                        />
                        <span>XL</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="2XL"
                          className="sr-only"
                        />
                        <span>2XL</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-4xl font-BlackOps text-gray-900">
                  {`${tshirt?.price} ${tshirt?.currency}`}
                </span>

                <button
                  onClick={() => console.log("Add to bag clicked")}
                  className="flex ml-auto bg-black px-6 py-3 text-xs font-medium font-IBMPlex uppercase tracking-wide text-white"
                >
                  Add to bag
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
