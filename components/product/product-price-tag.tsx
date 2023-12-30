export default function PriceTags({ price }: { price: number }) {
  return (
    <div>
      <div className="text-sm font-semibold">price</div>
      <div className="text-[25px]  font-semibold">฿{price}</div>
    </div>
  );
}
