"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ToteCardProps {
  product: any;
}
const ToteCard = ({ product }: ToteCardProps) => {
  return (
    <li>
      <Link
        href={`/tote-bags/${product.slug}`}
        className="group block overflow-hidden"
      >
        <div className="relative h-[350px] sm:h-[450px]">
          <>
            <Image
              alt={product.name}
              src={product.picture}
              className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                product.picture2 ? "group-hover:opacity-0" : ""
              }`}
            />
            {product.picture2 && (
              <Image
                alt={product.name}
                src={product.picture2}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"
              />
            )}
          </>
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-md font-LuckiestGuy text-gray-700 group-hover:underline group-hover:underline-offset-4 group-hover:text-valar3">
            {product.name}
          </h3>
          <p className="mt-2">
            <span className="sr-only">Regular Price</span>
            <span className="tracking-wider text-gray-900 font-BlackOps text-md">
              {`${product.price} ${product.currency}`}
            </span>
          </p>
          <button
            onClick={() => console.log("Add to bag clicked")}
            className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium font-IBMPlex uppercase tracking-wide text-white"
          >
            Add to bag
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ToteCard;
