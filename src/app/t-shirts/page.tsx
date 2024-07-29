"use client";

import ProductSection from "@/components/ProductSection";
import ShoppingCart from "@/components/ShoppingCart";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  useEffect(() => {
    console.log(openCart);
  }, [openCart]);
  return (
    <>
      <ProductSection
        title={"Our T-shirts collection is out !!"}
        description={"Can't wait "}
      />
      {openCart && (
        <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} />
      )}
    </>
  );
}
