import Link from "next/link";

interface BuyTableProps {
  data: BuyTableData[];
}

interface BuyTableData {
  name: string;
  user: string;
  link: string;
  type: string;
  createdAt: string;
}

export default function BuyTable({ data }: BuyTableProps) {
  return (
    <table className="table text-white">
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>ประเภท</th>
          <th>โดย</th>
          <th>วันที่ซื้อ</th>
          <th>ลิงค์</th>
        </tr>
      </thead>
      <tbody>
        {data.length <= 0 ? (
          <div>ไม่มีช้อมูล</div>
        ) : (
          data.map((ea, index) => (
            <tr key={index}>
              <td>{ea.name}</td>
              <td>{ea.type}</td>
              <td>{ea.user.slice(0, 12)}...</td>
              <td>{ea.createdAt}</td>
              <td>
                <Link href={ea.link}>link</Link>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
