export default function ProductDetailTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="text-[35px] font-semibold">{title}</div>
      <div className="text-[25px] text-slate-300">{subtitle}</div>
    </div>
  );
}
