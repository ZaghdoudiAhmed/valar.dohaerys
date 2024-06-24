import { Products } from '@/utils/products';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  description: string;
}

const ProductSection = ({ title, description }: ProductSectionProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 my-10">
        <header className="text-center">
          <h2 className="text-xl font-IBMPlex font-bold text-valar1 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 font-LuckiestGuy max-w-md text-valar2">
            {description}
          </p>
        </header>
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              currency={product.currency}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSection;
