"use client";
import Breadcrumb from "@/components/Breadcrumb";
import TshirtSection from "@/components/TshirtSection";
import React from "react";

export default function Page() {
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
  return (
    <>
      <div className={`flex pt-4 lg:pl-36 lg:pt-10 w-full `}>
        <Breadcrumb items={breadCrumbItems} />
      </div>

      <TshirtSection
        title={"Our T-shirts collection is out !!"}
        description={"Can't wait "}
      />
    </>
  );
}
