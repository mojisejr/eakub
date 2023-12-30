import { EA } from "./ea";

export interface Cart {
  userId: string;
  email?: string;
  item?: CartItem[];
}

export interface CartItem {
  product: EA;
  qty: number;
}
