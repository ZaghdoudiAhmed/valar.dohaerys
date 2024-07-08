'use client';

import { Product } from '@/utils/products';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>('#fff');

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      console.log('1');
      setSelectedColor(product.colors[0].refColor);
    }
  }, [product]);

  const handleColorChange = (colorRef: string) => {
    setSelectedColor(colorRef === selectedColor ? null : colorRef);
  };

  return (
    <li>
      <a href="#" className="group block overflow-hidden">
        <div className="relative h-[350px] sm:h-[450px]">
          {product.showColorsBasics && !product.picture2 ? (
            <>
              <Image
                alt="product"
                src={product.picture}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-100 "
              />
            </>
          ) : (
            <>
              <Image
                alt="product"
                src={product.picture}
                className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-100 ${
                  product.picture2 ? 'group-hover:opacity-0' : ''
                }`}
              />
              <Image
                alt="product"
                src={product.picture2}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"
              />
            </>
          )}
          {product.showColors && product.colors && selectedColor ? (
            <>
              {product.colors.map((colorOption) =>
                colorOption.refColor === selectedColor
                  ? colorOption.items.map((item: any) => (
                      <>
                        <Image
                          alt="product"
                          src={item.picture}
                          className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-100 ${
                            product.picture2 ? 'group-hover:opacity-0' : ''
                          }`}
                        />
                        <Image
                          alt="product"
                          src={item.picture2}
                          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"
                        />
                      </>
                    ))
                  : null
              )}
            </>
          ) : null}
        </div>
        {product.showColors && (
          <div className="mt-5 flex gap-1">
            <form>
              <fieldset>
                <legend className="sr-only">Color</legend>
              </fieldset>
              <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                {product.colors.map((color: any, index: number) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`color-${color.refColor}`}
                      className="sr-only"
                      onClick={() => handleColorChange(color.refColor)}
                      checked={selectedColor === color.refColor}
                    />
                    <label
                      htmlFor={`color-${color.refColor}`}
                      className={`block size-4 cursor-pointer border-black border rounded-full bg-[${color.refColor}] transition hover:!opacity-100`}
                    >
                      <span className="sr-only"> {color.name} </span>
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        )}

        {product.showColorsBasics && (
          <div className="mt-5 flex gap-1">
            <form>
              <fieldset>
                <legend className="sr-only">Color</legend>
              </fieldset>
              <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                <div>
                  <input type="checkbox" id="ColorSg" className="sr-only" />
                  <label
                    htmlFor="ColorSg"
                    className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Space Gray </span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="ColorS" className="sr-only" />
                  <label
                    htmlFor="ColorS"
                    className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Silver </span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="ColorP" className="sr-only" />
                  <label
                    htmlFor="ColorP"
                    className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="ColorG" className="sr-only" />
                  <label
                    htmlFor="ColorG"
                    className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="ColorSb" className="sr-only" />
                  <label
                    htmlFor="ColorSb"
                    className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}
        <div className="relative bg-white pt-3">
          <h3 className="text-md font-LuckiestGuy text-gray-700 group-hover:underline group-hover:underline-offset-4 group-hover:text-valar3">
            {product.name}
          </h3>
          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider text-gray-900 font-BlackOps text-md">
              {`${product.price} ${product.currency}`}
            </span>
          </p>
          <button
            onClick={() => console.log('aa')}
            className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium font-IBMPlex uppercase tracking-wide text-white"
          >
            Add to bag
          </button>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
