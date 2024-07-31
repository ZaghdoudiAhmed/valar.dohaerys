"use client";
import Image from "next/image";
import Link from "next/link";

interface TshirtCardProps {
  product: any;
}
const TshirtCard = ({ product }: TshirtCardProps) => {
  const BasicsColors = [
    { id: "ColorSg", color: "#595759", name: "Space Gray" },
    { id: "ColorS", color: "#d2d3d4", name: "Silver" },
    { id: "ColorP", color: "#d89f97", name: "Pink" },
    { id: "ColorG", color: "#afbfab", name: "Green" },
    { id: "ColorSb", color: "#91a5bb", name: "Sky Blue" },
  ];

  const renderImages = () => {
    return (
      <>
        <Image
          alt={product.name}
          src={product.picture}
          className={`absolute inset-0 h-full w-full lg:object-cover object-contain transition duration-500 group-hover:scale-105 ${
            product.picture2 ? "group-hover:opacity-0" : ""
          }`}
        />
        {product.picture2 && (
          <Image
            alt={product.name}
            src={product.picture2}
            className="absolute inset-0 h-full w-full lg:object-cover object-contain transition duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"
          />
        )}
      </>
    );
  };

  return (
    <li>
      <Link
        href={`/t-shirts/${product.slug}`}
        className="group block overflow-hidden"
      >
        <div className="relative h-[350px] sm:h-[450px]">{renderImages()}</div>

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

export default TshirtCard;
