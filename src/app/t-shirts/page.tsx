import ProductSection from '@/components/ProductSection';
import ShopingCart from '@/components/ShoppingCart';

export default function Page() {
  return (
    <>
      <ProductSection title={'products collection'} description="hello" />
      <ShopingCart />
    </>
  );
}
