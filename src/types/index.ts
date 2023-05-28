import { ProductCart } from "./store";

// Auth
export type Login = {
  email: string;
  password: string;
};

// Order
export type Order = {
  phone: string;
  city: string;
  details: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
};

export type RootStateAuth = {
  auth: { loading: boolean; loggedIn: boolean; token: string; user: object };
};

// Products
export type ProductCardType = {
  _id: string;
  name: string;
  title: string;
  images: string[];
  imageCover: string;
  price: number;
  priceAfterDiscount: number;
  description: string;
  ratingsAverage: number;
  quantity: number;
};

export type RootStateProducts = {
  products: {
    loading: boolean;
    products: Array<ProductCardType>;
    total: number;
    product: ProductCardType;
  };
};

export type RootStateCart = {
  cart: {
    loading: boolean;
    products: ProductCart[];
    totalCartPrice: number;
    numOfCartItems: number;
    idsInCart: string[];
    ownerId: string;
  };
};

// Categories
export type CategorieCardTypes = {
  _id: string;
  name: string;
  image: string;
  slug: string;
  type: string;
};

export type RootStateCategories = {
  categories: {
    loading: boolean;
    categories: Array<CategorieCardTypes>;
    brands: Array<CategorieCardTypes>;
  };
};
