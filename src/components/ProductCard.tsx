"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ProductCardProps {
  product: any;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>("#fff");

  const BasicsColors = [
    { id: "ColorSg", color: "#595759", name: "Space Gray" },
    { id: "ColorS", color: "#d2d3d4", name: "Silver" },
    { id: "ColorP", color: "#d89f97", name: "Pink" },
    { id: "ColorG", color: "#afbfab", name: "Green" },
    { id: "ColorSb", color: "#91a5bb", name: "Sky Blue" },
  ];
  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].refColor);
    }
  }, [product]);

  const handleColorChange = (colorRef: string) => {
    setSelectedColor(colorRef === selectedColor ? null : colorRef);
  };

  const renderImages = () => {
    if (product.showColors && selectedColor) {
      const selectedColorOption = product.colors.find(
        (color: any) => color.refColor === selectedColor
      );
      return selectedColorOption?.items.map((item: any) => (
        <React.Fragment key={item.id}>
          <Image
            alt={product.name}
            src={item.picture}
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
              product.picture2 ? "group-hover:opacity-0" : ""
            }`}
          />
          <Image
            alt={product.name}
            src={item.picture2}
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100`}
          />
        </React.Fragment>
      ));
    } else {
      return (
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
      );
    }
  };

  return (
    <li>
      <Link
        href={`/t-shirts/${product.slug}`}
        className="group block overflow-hidden"
      >
        <div className="relative h-[350px] sm:h-[450px]">{renderImages()}</div>

        {(product.showColorsBasics || product.showColors) && (
          <div className="mt-5 flex gap-1">
            <form>
              <fieldset>
                <legend className="sr-only">Color</legend>
              </fieldset>
              <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                {product.showColors ? (
                  product.colors.map((color: any) => (
                    <div key={color.id}>
                      <input
                        type="checkbox"
                        id={color.refColor}
                        className="sr-only"
                        onChange={() => handleColorChange(color.refColor)}
                        checked={selectedColor === color.refColor}
                      />
                      <label
                        htmlFor={color.refColor}
                        className={`block size-4 cursor-pointer border-black border rounded-full ${color.refColor} transition hover:!opacity-100`}
                      >
                        <span className="sr-only">{color.name}</span>
                      </label>
                    </div>
                  ))
                ) : (
                  <>
                    {BasicsColors.map(({ id, color, name }) => (
                      <div key={id}>
                        <input type="checkbox" id={id} className="sr-only" />
                        <label
                          htmlFor={id}
                          className={`block size-4 cursor-pointer rounded-full bg-[${color}] transition hover:!opacity-100`}
                        >
                          <span className="sr-only">{name}</span>
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </form>
          </div>
        )}
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

export default ProductCard;
