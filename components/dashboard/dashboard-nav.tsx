import Link from "next/link";

interface DashboardNavProps {
  selectedTab: string;
}

export default function DashbordNav({ selectedTab }: DashboardNavProps) {
  return (
    <div className="navbar bg-white bg-opacity-30 rounded-b-sm">
      <div className="navbar-start">
        <div className="join">
          <Link
            href="/dashboard?tab=buy"
            className={`btn ${
              selectedTab == "buy" ? "btn-primary" : "btn-ghost"
            } join-item`}
          >
            ซื้อแล้ว
          </Link>
          <Link
            href="/dashboard?tab=sell"
            className={`btn ${
              selectedTab == "sell" ? "btn-primary" : "btn-ghost"
            } join-item`}
          >
            รายการขาย
          </Link>
          <Link
            href="/dashboard?tab=account"
            className={`btn ${
              selectedTab == "account" ? "btn-primary" : "btn-ghost"
            } join-item`}
          >
            บัญชี
          </Link>
          <Link
            href="/dashboard?tab=setting"
            className={`btn ${
              selectedTab == "setting" ? "btn-primary" : "btn-ghost"
            } join-item`}
          >
            ตั้งค่า
          </Link>
        </div>
      </div>
    </div>
  );
}
