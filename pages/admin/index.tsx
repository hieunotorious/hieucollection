import AdminFeatured from "app/component/AdminFeatured";

import { css } from "@emotion/react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "app/context/authContext";
import { Role } from "app/api/auth/models/user";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (user && user.role === Role.admin) {
    } else {
      router.push("/");
    }
  }, [user, router]);
  return (
    <Flex w="full" direction="column">
      <div style={{ padding: "5px 20px" }}>
        <AdminFeatured />
      </div>
      <div
        style={{
          boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div style={{ fontWeight: 500, color: "gray", marginBottom: "15px" }}>
          Latest Transactions
        </div>
      </div>
    </Flex>
  );
};

export default Admin;
