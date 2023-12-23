"use client";
import Hero from "@/components/hero/hero";
import MainPageProductTitle from "@/components/product/mp-header";
import ProductGrid from "@/components/product/mp-product-grid";
import BaseLayout1 from "@/components/shared/base-layout";
import BaseLayout2 from "@/components/shared/base-layout2";

export default function ClientHomePage() {
  return (
    <div>
      <BaseLayout1>
        <Hero />
      </BaseLayout1>
      <img className="object-fill w-full" src="/images/Ads1.png" />
      <BaseLayout2>
        <MainPageProductTitle />
        <ProductGrid />
      </BaseLayout2>
    </div>
  );
}
