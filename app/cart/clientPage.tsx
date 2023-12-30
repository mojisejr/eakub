"use client";

import { useCart } from "@/context/cart-provider";
import Link from "next/link";

export default function ClientCart() {
  const { cart, increment, decrement, removeItem } = useCart();

  function handleIncrement(eaId: string, qty: number) {
    increment(eaId, qty);
  }

  function handleDecrement(eaId: string, qty: number) {
    decrement(eaId, qty);
  }

  function handleRemoveItem(eaId: string) {
    removeItem(eaId);
  }

  return (
    <div className="grid grid-col-1 place-items-center gap-4 pt-10">
      <h2 className="text-[40px] font-semibold">ตระกร้าของคุณ</h2>
      <>
        {cart ? (
          <table className="table table-sm max-w-xl p-3 bg-base-200 shadow">
            <thead>
              <tr>
                <th>del</th>
                <th>no</th>
                <th>name</th>
                <th>qty</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.item?.length! <= 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    ตระกร้าของคุณว่างเปล่า
                  </td>
                </tr>
              ) : (
                <>
                  {cart?.item!.map((i, index) => (
                    <tr>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(i.product._id)}
                          className="btn btn-xs btn-error"
                        >
                          del
                        </button>
                      </td>
                      <td>{index + 1}</td>
                      <td>{i.product.name}</td>
                      <td>{i.qty}</td>
                      <td>{i.product.price * i.qty}</td>
                      <td>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleIncrement(i.product._id, 1)}
                            className="btn btn-xs btn-accent"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleDecrement(i.product._id, 1)}
                            className="btn btn-xs btn-accent"
                          >
                            -
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
            <tfoot>
              {cart.item?.length! <= 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Link
                      className="text-primary hover:underline"
                      href={"/market"}
                    >
                      ไปชมสิ่งที่น่าสนใจ
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-primary text-[20px] font-semibold"
                  >
                    Total: ฿
                    {cart.item
                      ?.map((i) => i.product.price * i.qty)
                      .reduce((a, b) => a + b, 0)}
                  </td>
                  <td colSpan={2}>
                    <button className="btn btn-primary w-full">Checkout</button>
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        ) : (
          <div className="loading looading-spinner"></div>
        )}
      </>
    </div>
  );
}
