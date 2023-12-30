"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "@clerk/nextjs";
import { EA } from "@/interfaces/ea";
import { Cart, CartItem } from "@/interfaces/cart";

type CartContextType = {
  cart: Cart | undefined;
  getCart: () => Cart | undefined;
  addToCart: (ea: EA) => void;
  increment: (eaId: string, qty: number) => void;
  decrement: (eaId: string, qty: number) => void;
  removeItem: (eaId: string) => void;
  removeCart: () => void;
};

const defaultCartContext = {
  cart: undefined,
  getCart: () => undefined,
  addToCart: () => {},
  increment: () => {},
  decrement: () => {},
  removeItem: () => {},
  removeCart: () => {},
};

const CartContext = createContext<CartContextType>(defaultCartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const { userId } = useAuth();
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    createCart();
    if (!userId) {
      setCart(undefined);
    }
    setCart(getCart());
  }, [userId]);

  function createCart() {
    if (!userId) {
      return;
    }

    if (
      localStorage.getItem(`cart_${userId}`) != undefined ||
      localStorage.getItem(`cart_${userId}`) != null
    ) {
      return;
    }

    //create empty cart
    localStorage.setItem(
      `cart_${userId}`,
      JSON.stringify({ userId, item: [], email: "", subtotal: 0 })
    );

    setCart(getCart());
  }

  function getCart() {
    return parseCartObject();
  }

  function addToCart(ea: EA) {
    const cart = getCart();
    let item = cart.item;

    if (isAdded(ea)) {
      const updatedItem = item?.map((i) => {
        if (i.product._id === ea._id) {
          return {
            ...i,
            qty: i.qty + 1,
          };
        }
      }) as CartItem[];

      updatItemInCart(updatedItem!);
    } else {
      item?.push({ product: ea, qty: 1 });
      console.log(item);
      updatItemInCart(item!);
    }
  }

  function isAdded(ea: EA) {
    const cart = getCart();
    const item = cart.item;

    const found = item?.find((value) => value.product._id === ea._id);
    if (found != null || found != undefined) {
      return true;
    } else {
      return false;
    }
  }

  function increment(eaId: string, qty: number) {
    const cart = getCart();

    const updatedItem = cart.item?.map((i) => {
      if (i.product._id == eaId) {
        return {
          ...i,
          qty: i.qty + qty,
        };
      } else {
        return i;
      }
    }) as CartItem[];

    updatItemInCart(updatedItem);
  }

  function decrement(eaId: string, qty: number) {
    const cart = getCart();

    const updatedItem = cart.item?.map((i) => {
      if (i.product._id == eaId) {
        return {
          ...i,
          qty: i.qty <= 1 ? 1 : i.qty - 1,
        };
      } else {
        return i;
      }
    }) as CartItem[];

    updatItemInCart(updatedItem);
  }

  function removeItem(eaId: string) {
    const cart = getCart();

    const updatedItem = cart.item?.filter(
      (i) => i.product._id != eaId
    ) as CartItem[];

    updatItemInCart(updatedItem!);
  }

  function removeCart() {
    localStorage.removeItem(`cart_${userId}`);
  }

  function parseCartObject() {
    return JSON.parse(localStorage.getItem(`cart_${userId}`)!) as Cart;
  }
  function updatItemInCart(itemInCart: CartItem[]) {
    console.log(itemInCart);
    const cart = getCart();

    const subtotal = cart
      ?.item!.map((i) => i.product.price * i.qty)
      .reduce((a, b) => a + b, 0);

    localStorage.setItem(
      `cart_${userId}`,
      JSON.stringify({
        ...cart,
        item: itemInCart,
        subtotal: subtotal,
      })
    );

    setCart(getCart());
  }

  const value = {
    cart,
    getCart,
    addToCart,
    increment,
    decrement,
    removeItem,
    removeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
