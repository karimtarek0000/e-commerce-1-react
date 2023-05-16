export type AllProductsType = { products?: object; total?: number };

export type PayloadGetCart = {
  numOfCartItems: number;
  data: { totalCartPrice: number; products: ProductCart[] };
};

export type Products = {
  id: string;
  type: string;
  numPage: number;
  filter?: string;
};

export type AddToCart = {
  message: string;
};

export type ProductCart = {
  _id: string;
  count: number;
  product: {
    _id: string;
    id: string;
    title: string;
    quantity: number;
    imageCover: string;
    ratingsAverage: number;
  };
};
