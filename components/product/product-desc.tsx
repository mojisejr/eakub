export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="max-w-xl py-10 flex flex-col gap-3">
      <div className="text-[20px] font-semibold">Product Description</div>
      <p>{description}</p>
    </div>
  );
}
