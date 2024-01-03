export interface EA {
  _id: string;
  name: string;
  type: string;
  price: number;
  user: string;
  verified: boolean;
  banner: string;
  images?: string[] | null;
  description?: string;
  updatedAt?: string;
  createdAt?: string;
}
