import { TSHIRTS } from "@/utils/t-shirts";
import TshirtCard from "./TshirtCard";

interface TshirtSectionProps {
  title: string;
  description: string;
}

const TshirtSection = ({ title, description }: TshirtSectionProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 my-5">
        {/* <header className="text-center">
          <h2 className="text-xl font-IBMPlex font-bold text-valar1 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 font-LuckiestGuy max-w-md text-valar2">
            {description}
          </p>
        </header> */}
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TSHIRTS.map((product) => (
            <TshirtCard key={product.slug} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TshirtSection;
