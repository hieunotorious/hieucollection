import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "app/context/authContext";

type Props = {};

const Users = (props: Props) => {
  const { users } = useContext(AuthContext);
  return (
    <Flex>
      {users.map((user, index) => {
        return <div key={user.id}>{user.username}</div>;
      })}
    </Flex>
  );
};

export default Users;
