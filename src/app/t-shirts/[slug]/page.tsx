"use client";
import React from "react";
import { Products } from "@/utils/products";
import Image from "next/image";

export default function Tshirt({ params: { slug } }: any) {
  const product = Products.find((product) => product.slug === slug);
  return (
    // <div className="w-full p-6 sm:w-full xl:w-full justify-center items-center">
    //   <div className="bg-white">
    //     <div className="pt-6">
    //       <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    //         <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
    //           <Image
    //             alt="picture"
    //             src={product?.picture}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //         {/* <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    //           <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //             <img
    //               alt={product.images[1].alt}
    //               src={product.images}
    //               className="h-full w-full object-cover object-center"
    //             />
    //           </div>
    //           <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //             <img
    //               alt={product.images[2].alt}
    //               src={product.images[2].src}
    //               className="h-full w-full object-cover object-center"
    //             />
    //           </div>
    //         </div>
    //         <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
    //           <img
    //             alt={product.images[3].alt}
    //             src={product.images[3].src}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div> */}
    //       </div>

    //       {/* Product info */}
    //       <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    //         <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //           <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
    //             {product?.name}
    //           </h1>
    //         </div>

    //         {/* Options */}
    //         <div className="mt-4 lg:row-span-3 lg:mt-0">
    //           <h2 className="sr-only">Product information</h2>
    //           <p className="text-3xl tracking-tight text-gray-900">
    //             {product?.price}
    //           </p>

    //           <form className="mt-10">
    //             {/* Colors */}
    //             <div>
    //               <h3 className="text-sm font-medium text-gray-900">Color</h3>

    //               {/* <fieldset aria-label="Choose a color" className="mt-4">
    //                 <RadioGroup
    //                   value={selectedColor}
    //                   onChange={setSelectedColor}
    //                   className="flex items-center space-x-3"
    //                 >
    //                   {product.colors.map((color) => (
    //                     <Radio
    //                       key={color.name}
    //                       value={color}
    //                       aria-label={color.name}
    //                       className={classNames(
    //                         color.selectedClass,
    //                         "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
    //                       )}
    //                     >
    //                       <span
    //                         aria-hidden="true"
    //                         className={classNames(
    //                           color.class,
    //                           "h-8 w-8 rounded-full border border-black border-opacity-10"
    //                         )}
    //                       />
    //                     </Radio>
    //                   ))}
    //                 </RadioGroup>
    //               </fieldset> */}
    //             </div>

    //             {/* Sizes */}
    //             <div className="mt-10">
    //               <div className="flex items-center justify-between">
    //                 <h3 className="text-sm font-medium text-gray-900">Size</h3>
    //                 <a
    //                   href="#"
    //                   className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    //                 >
    //                   Size guide
    //                 </a>
    //               </div>

    //               {/* <fieldset aria-label="Choose a size" className="mt-4">
    //                 <RadioGroup
    //                   value={selectedSize}
    //                   onChange={setSelectedSize}
    //                   className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
    //                 >
    //                   {product.sizes.map((size) => (
    //                     <Radio
    //                       key={size.name}
    //                       value={size}
    //                       disabled={!size.inStock}
    //                       className={classNames(
    //                         size.inStock
    //                           ? "cursor-pointer bg-white text-gray-900 shadow-sm"
    //                           : "cursor-not-allowed bg-gray-50 text-gray-200",
    //                         "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
    //                       )}
    //                     >
    //                       <span>{size.name}</span>
    //                       {size.inStock ? (
    //                         <span
    //                           aria-hidden="true"
    //                           className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
    //                         />
    //                       ) : (
    //                         <span
    //                           aria-hidden="true"
    //                           className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
    //                         >
    //                           <svg
    //                             stroke="currentColor"
    //                             viewBox="0 0 100 100"
    //                             preserveAspectRatio="none"
    //                             className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
    //                           >
    //                             <line
    //                               x1={0}
    //                               x2={100}
    //                               y1={100}
    //                               y2={0}
    //                               vectorEffect="non-scaling-stroke"
    //                             />
    //                           </svg>
    //                         </span>
    //                       )}
    //                     </Radio>
    //                   ))}
    //                 </RadioGroup>
    //               </fieldset> */}
    //             </div>

    //             <button
    //               type="submit"
    //               className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >
    //               Add to bag
    //             </button>
    //           </form>
    //         </div>

    //         <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
    //           {/* Description and details */}
    //           <div>
    //             <h3 className="sr-only">Description</h3>

    //             <div className="space-y-6">
    //               <p className="text-base text-gray-900">{product?.name}</p>
    //             </div>
    //           </div>

    //           <div className="mt-10">
    //             <h3 className="text-sm font-medium text-gray-900">
    //               Highlights
    //             </h3>

    //             {/* <div className="mt-4">
    //               <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
    //                 {product.highlights.map((highlight) => (
    //                   <li key={highlight} className="text-gray-400">
    //                     <span className="text-gray-600">{highlight}</span>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div> */}
    //           </div>

    //           <div className="mt-10">
    //             <h2 className="text-sm font-medium text-gray-900">Details</h2>

    //             <div className="mt-4 space-y-6">
    //               {/* <p className="text-sm text-gray-600">{product.details}</p> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="product"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product?.picture}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm font-IBMPlex title-font text-gray-500 tracking-widest">
              VALAR DOHAERYS
            </h2>
            <h1 className="text-gray-900 text-3xl font-IBMPlex title-font font-medium mb-1">
              {product?.name}
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
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl font-BlackOps text-gray-900">
                {`${product?.price} ${product?.currency}`}
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
  );
}
