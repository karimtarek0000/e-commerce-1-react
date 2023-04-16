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
