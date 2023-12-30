import AddToCartButton from "@/components/product/addToCart-button";
import ProductCarousel from "@/components/product/product-carousel";
import ProductComment from "@/components/product/product-comment";
import ProductDescription from "@/components/product/product-desc";
import ProductImage from "@/components/product/product-image";
import PriceTags from "@/components/product/product-price-tag";
import ProductDetailTitle from "@/components/product/product-title";
import RatingStars from "@/components/product/rating-stars";
import VerifiedBadge from "@/components/product/verified-badge";
import BaseLayout1 from "@/components/shared/base-layout";
import { getEAById } from "@/services/ea.service";

export default async function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  const ea = await getEAById(params.productId);
  return (
    <BaseLayout1>
      <div className="flex justify-center py-10">
        <div className="max-w-[1440px] min-h-screen">
          <div className="grid grid-cols-2 place-items-center">
            <div className="flex flex-col gap-3">
              <ProductDetailTitle title={ea.name} />
              <ProductImage imageUrl={ea.banner} />
              <div className="flex items-center justify-between">
                <VerifiedBadge />
                <RatingStars />
              </div>
              <div className="flex items-center justify-between">
                <PriceTags price={ea.price} />
                <AddToCartButton ea={ea} />
              </div>
              <div className="flex flex-col gap-2">
                <ProductComment />
                <ProductComment />
                <ProductComment />
                <ProductComment />
              </div>
            </div>
            <div className="self-start">
              <ProductCarousel images={ea.images!} />
              <ProductDescription description={ea.description!} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout1>
  );
}
