"use client";

import { useCart } from "@/context/cart-provider";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cart } from "@/interfaces/cart";
import { useRouter } from "next/navigation";

interface ClientCartProps {
  checkout: (cart: Cart, basePath: string) => void;
}

export default function ClientCart({ checkout }: ClientCartProps) {
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

  function handleCheckout(cart: Cart) {
    checkout(cart, window.location.origin);
  }

  return (
    <div className="grid grid-col-1 place-items-center gap-4 pt-10">
      <motion.h2
        initial={{ y: 3, opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="text-[40px] font-semibold"
      >
        ตระกร้าของคุณ
      </motion.h2>
      <>
        {cart ? (
          <motion.table
            initial={{ y: 3, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            animate={{ y: 0, opacity: 1 }}
            className="table table-sm max-w-xl p-3 bg-base-200 shadow"
          >
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
                    <button
                      onClick={() => handleCheckout(cart)}
                      className="btn btn-primary w-full"
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              )}
            </tfoot>
          </motion.table>
        ) : (
          <div className="loading looading-spinner"></div>
        )}
      </>
    </div>
  );
}
