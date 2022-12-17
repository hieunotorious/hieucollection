import {
  Gender,
  Role,
  SignupType,
  UpdateUser,
  User,
} from "../api/auth/models/user";
import React, { useState, createContext, useEffect, useCallback } from "react";
import { ListItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "app/services/UserService";
type UserType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  updateProfile: (info: UpdateUser) => void;
};

export const AuthContext = createContext<UserType>({
  user: undefined,
  setUser: () => {},
  updateProfile: (info: UpdateUser) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

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

  return (
    <AuthContext.Provider
      value={{
        user,
        updateProfile,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
