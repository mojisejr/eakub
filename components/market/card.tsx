import { EA } from "@/interfaces/ea";
import RatingStars from "../product/rating-stars";
import VerifiedBadge from "../product/verified-badge";
import Link from "next/link";

interface EAMarketCardProps {
  ea: EA;
}

export default function EAMarketCard({ ea }: EAMarketCardProps) {
  return (
    <div className="card w-[320px] bg-[#222040] shadow hover:-translate-y-1 transition-all 1.2s ease-in">
      <figure className="bg-slate-300 w-full h-[170px]">
        <img src={ea.banner} className="object-fit" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ea.name}</h2>
        <RatingStars rating={3} />
        <p className="py-2">{`${ea.description?.slice(0, 80)}`}</p>
        <div className="font-sembold">฿{ea.price}</div>
        <div className="flex justify-between py-2">
          {ea.verified ? <VerifiedBadge /> : <div></div>}
          <Link
            href={`/market/${ea._id}`}
            className="btn btn-primary hover:bg-accent  font-semibold"
          >
            details
          </Link>
        </div>
        <div className="text-sm text-right text-slate-400">
          by {ea.user.slice(0, 15)}...
        </div>
      </div>
    </div>
  );
}
