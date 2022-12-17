import {
  Gender,
  Role,
  SignupType,
  UpdateUser,
  User,
} from "../api/auth/models/user";
import React, { useState, createContext, useEffect, useCallback } from "react";
import { DefaultProduct } from "app/api/auth/data";
import { ListItem } from "@mui/material";
import { userlist } from "../api/auth/data";
import { Console } from "console";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "app/services/UserService";
type UserType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  updateProfile: (info: UpdateUser) => void;
  createUser: (info: SignupType) => void;
};

export const AuthContext = createContext<UserType>({
  user: undefined,
  setUser: () => {},
  users: [],
  setUsers: () => {},
  createUser: (info: SignupType) => {},
  updateProfile: (info: UpdateUser) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [users, setUsers] = useState<User[]>(userlist);

  const authUser = useCallback(async () => {
    const newUser = await getUser();
    if (newUser) {
      setUser(newUser);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      authUser();
    }
  }, [authUser, user]);

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
        role: Role.user,
        id: uuidv4(),
      };
      setUsers((prevState) => [...prevState, newUser]);
      setUser(newUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        createUser,
        setUsers,
        user,
        updateProfile,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
