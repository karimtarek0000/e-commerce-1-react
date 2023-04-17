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

// Categories
export type CategorieCardTypes = {
  _id: string;
  name: string;
  image: string;
  slug: string;
};

export type RootStateCategories = {
  categories: { loading: boolean; categories: Array<CategorieCardTypes> };
};
