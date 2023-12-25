export interface CreateNewEADTO {
  userId: string;
  name: string; //name
  banner: FileType;
  images: FileType[];
  description?: string;
  price: number;
  type?: string;
  asset: FileType;
}

export interface FileType {
  _type: "file" | "image";
  asset: {
    _type: string;
    _ref: string;
  };
}
