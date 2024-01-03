import Link from "next/link";

interface SellTableProps {
  data: SellTableData[];
}

interface SellTableData {
  type: string;
  price: number | null;
  buyer: number | null;
  total: number | null;
  name: string;
}

export default function SellTable({ data }: SellTableProps) {
  return (
    <table className="table text-white">
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>ประเภท</th>
          <th>ชายได้</th>
          <th>ยอดรวม</th>
          <th>ดำเนินการ</th>
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
              <td>{ea.buyer}</td>
              <td>{ea.total}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <button className="btn btn-warning btn-xs">แก้ไข</button>
                  <button className="btn btn-error btn-xs">ลบ</button>
                  <button className="btn btn-info btn-xs">อันลิส</button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
