import { ProductType } from "app/api/auth/models/product";
export type LoginType = {
  username: string;
  password: string;
};
export type SignupType = {
  username: string;
  password: string;
  dob: string;
  email: string;
  confirm: string;
};
export type User = {
  username: string;
  password: string;
  email: string;
  displayName: string;
  id: string;
  address: string;
  phonenumber: string;
  dob: string;
  gender: Gender;
  cart: UserCart[];
  role: Role;
};

export type UpdateUser = {
  username: string;
  displayName: string;
  address: string;
  phonenumber: string;
  dob: string;
  gender: Gender;
};
export type UserCart = {
  product_id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  sale?: number;
};
export enum Gender {
  male = "MALE",
  female = "FEMALE",
  other = "OTHER",
}

export enum Role {
  user = "USER",
  admin = "ADMIN",
}

export enum SocialProvider {
  facebook = "FACEBOOK",
  google = "GOOGLE",
  github = "GITHUB",
  default = "DEFAULT",
}

export type SocialPayload = {
  email: string | null;
  username: string | null;
  socialProvider: SocialProvider;
  displayName: string | null;
  phoneNumber: string | null;
  uid: string;
};
