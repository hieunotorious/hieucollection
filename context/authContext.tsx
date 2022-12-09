import { Gender, SignupType, UpdateUser, User } from "../api/auth/models/user";
import React, { useState, createContext } from "react";
import { DefaultProduct } from "app/api/auth/data";
import { ListItem } from "@mui/material";
import { userlist } from "../api/auth/data";
import { Console } from "console";
import { v4 as uuidv4 } from "uuid";
type UserType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  updateUserCartQuantity: (id: string, isPlus?: boolean) => void;
  removeUserCart: (id: string) => void;
  addUserCart: (id: string) => void;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  updateProfile: (info: UpdateUser) => void;
  createUser: (info: SignupType) => void;
  removeAllCart: () => void;
};

export const AuthContext = createContext<UserType>({
  user: undefined,
  setUser: () => {},
  users: [],
  updateUserCartQuantity: (id: string) => {},
  removeAllCart: () => {},
  removeUserCart: (id: string) => {},
  addUserCart: (id: string) => {},
  setUsers: () => {},
  createUser: (info: SignupType) => {},
  updateProfile: (info: UpdateUser) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [users, setUsers] = useState<User[]>(userlist);

  const updateUserCartQuantity = (id: string, isPlus?: boolean) => {
    if (user) {
      const newCart = [...user.cart];
      const itemIndex = newCart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        newCart[itemIndex].quantity += isPlus ? 1 : -1;
        setUser((prevState) => {
          if (prevState) {
            return { ...prevState, cart: newCart };
          }
          return prevState;
        });
      }
    }
  };

  const removeUserCart = (id: string) => {
    if (user) {
      const newCart = user.cart.filter((item) => item.id !== id);

      setUser((prevState) => {
        if (prevState) {
          return { ...prevState, cart: newCart };
        }
        return prevState;
      });
    }
  };
  const removeAllCart = () => {
    if (user) {
      setUser((prevState) => {
        if (prevState) {
          return { ...prevState, cart: [] };
        }
        return prevState;
      });
    }
  };

  const addUserCart = (id: string) => {
    if (user) {
      const newCart = [...user.cart];
      const itemIndex = newCart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        updateUserCartQuantity(id, true);
      } else {
        const newItem = DefaultProduct.find((item) => item.id === id);
        if (newItem) newCart.push({ ...newItem, quantity: 1 });
        setUser((prevState) => {
          if (prevState) {
            return { ...prevState, cart: newCart };
          }
          return prevState;
        });
      }
    }
  };

  const updateProfile = (info: UpdateUser) => {
    if (user) {
      setUser((prevState) => {
        if (prevState) {
          return { ...prevState, ...info };
        }
        return prevState;
      });
    }
  };

  const createUser = (info: SignupType) => {
    const userIndex = users.findIndex((item) => item.email === info.email);
    if (userIndex > -1) {
      console.log("User already exist");
    } else {
      const newUser: User = {
        username: info.username,
        password: info.password,
        email: info.email,
        dob: info.dob,
        gender: Gender.other,
        cart: [],
        phonenumber: "",
        displayName: "",
        address: "",
        id: uuidv4(),
      };
      setUsers((prevState) => [...prevState, newUser]);
      setUser(newUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        removeAllCart,
        users,
        createUser,
        setUsers,
        addUserCart,
        removeUserCart,
        updateUserCartQuantity,
        user,
        updateProfile,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
