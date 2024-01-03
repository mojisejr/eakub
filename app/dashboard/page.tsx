import Account from "@/components/dashboard/account";
import BuyTable from "@/components/dashboard/buy-table";
import DashbordNav from "@/components/dashboard/dashboard-nav";
import SellTable from "@/components/dashboard/sell-table";
import BaseLayout1 from "@/components/shared/base-layout";
import { getUserOwnerEA, getUserPerchasedEA } from "@/services/ea.service";
import { auth } from "@clerk/nextjs";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { tab: string };
}) {
  const { userId } = auth();
  const buyData = await getUserPerchasedEA(userId!);
  const sellData = await getUserOwnerEA(userId!);
  const { tab } = searchParams;

  return (
    <BaseLayout1>
      <DashbordNav selectedTab={tab} />
      {tab == "buy" ? <BuyTable data={buyData} /> : null}
      {tab == "sell" ? <SellTable data={sellData} /> : null}
      {tab == "account" ? <Account /> : null}
    </BaseLayout1>
  );
}
