export default function ProductImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="max-w-[300px]">
      <img src={imageUrl} className="object-contain" />
    </div>
  );
}
