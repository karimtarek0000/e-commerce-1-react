// Auth
export type Login = {
  email: string;
  password: string;
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
  name: string;
  title: string;
  image: string;
  priceAfterDiscount: number;
  description: string;
  ratingsAverage: number;
};

export type RootStateProducts = {
  products: {
    loading: boolean;
    products: Array<ProductCardType>;
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
