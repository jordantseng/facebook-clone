export interface AuthFormValues {
  name?: string;
  email: string;
  password: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  avatar: string;
  userToken: { token: string; expiresIn: number };
}
