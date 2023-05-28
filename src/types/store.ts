export type AllProductsType = { products?: object; total?: number };

export type PayloadGetCart = {
  data: { totalCartPrice: number; products: ProductCart[]; _id: string };
  numOfCartItems: number;
};

export type Products = {
  id: string;
  type: string;
  numPage: number;
  filter?: string;
};

export type AddToCart = {
  message: string;
  data: PayloadGetCart;
  numOfCartItems: number;
};

export type ProductCart = {
  _id: string;
  count: number;
  price: number;
  product: {
    _id: string;
    id: string;
    title: string;
    quantity: number;
    imageCover: string;
    ratingsAverage: number;
    brand: {
      name: string;
      slug: string;
      _id: string;
    };
    category: {
      name: string;
      slug: string;
      _id: string;
    };
  };
};
