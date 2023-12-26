import BaseLayout1 from "@/components/shared/base-layout";
import ClientMarket from "./clientPage";
import { getEA } from "@/services/ea.service";
import SearchBar from "@/components/market/search";

export default async function Market() {
  const ea = await getEA();
  return (
    <BaseLayout1>
      <div className="flex flex-col items-center">
        <div className="py-10">
          <SearchBar />
        </div>
        <ClientMarket ea={ea} />
      </div>
    </BaseLayout1>
  );
}
