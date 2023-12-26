import EAMarketCard from "@/components/market/card";
import { EA } from "@/interfaces/ea";

interface ClientMarketProps {
  ea: EA[];
}
export default function ClientMarket({ ea }: ClientMarketProps) {
  return (
    <div>
      {ea.length <= 0 ? (
        <div>"NA"</div>
      ) : (
        <div className="grid grid-cols-3 gap-6 max-w-[1440px]">
          {ea.map((e) => (
            <EAMarketCard key={e._id} ea={e} />
          ))}
        </div>
      )}
    </div>
  );
}
