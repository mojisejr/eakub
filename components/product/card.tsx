import VerifiedBadge from "./verified-badge";
import RatingStars from "./rating-stars";

export default function ProductCard() {
  return (
    <div className="card w-96 bg-[#222040] shadow">
      <figure className="bg-slate-300 p-3">
        <img src="/images/logo.png" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">SMA-200-Auto-Action</h2>
        <RatingStars rating={3} />
        <p className="py-2">If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex justify-between py-2">
          <VerifiedBadge />
          <button className="btn btn-primary hover:bg-accent  font-semibold">
            details
          </button>
        </div>
      </div>
    </div>
  );
}
