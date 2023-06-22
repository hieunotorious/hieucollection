import React, { useContext, useEffect, useState } from "react";
import { Gender, UpdateUser } from "../../api/auth/models/user";
import { AuthContext } from "app/context/authContext";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  Select,
  Input,
  useToast,
  Button,
  Flex,
  Box,
  Card,
  Stack,
  Avatar,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import { updateSelfUser } from "app/services/UserService";
import Breadcrumb from "app/component/Breadcrumb";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import Container from "app/component/Container";
import TransgenderIcon from "@mui/icons-material/Transgender";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Profile() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  const { user, setUser } = useContext(AuthContext);
  const [tempuser, setTempUser] = useState<UpdateUser>({
    username: "",
    dob: "",
    phonenumber: "",
    address: "",
    displayName: "",
    gender: Gender.other,
  });
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const data = await updateSelfUser(tempuser);
    if (data) {
      setUser(data);
      toast({
        title: t("update_successful"),
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setTempUser({
      username: user?.username ?? "",
      dob: user?.dob ?? "",
      phonenumber: user?.phonenumber ?? "",
      address: user?.address ?? "",
      displayName: user?.displayName ?? "",
      gender: user?.gender ?? Gender.other,
    });
  }, [user]);

  return (
    <Flex direction="column" w="full" marginTop={isMobile ? "2rem" : "5rem"}>
      <Breadcrumb
        links={[
          { title: t("home"), href: "/" },
          { title: t("profile"), href: "/profile" },
        ]}
        current={t("profile")}
      />
      <Container alignItems="center" justifyContent="center">
        <Card
          height={isMobile ? "600px" : "350px"}
          width="900px"
          marginTop="1rem"
        >
          <Flex
            direction={isMobile ? "column" : "row"}
            marginTop="2rem"
            alignItems="center"
            justifyContent="center"
            gap={isMobile ? "none" : "10rem"}
          >
            <Stack gap={isMobile ? "none" : "1rem"}>
              <Text variant={isMobile ? "h6_mobile" : "h6"}>
                {t("profile")}
              </Text>
              <Avatar
                size="2xl"
                name="user"
                src="https://bbts1.azureedge.net/images/p/full/2023/06/e93bbc9a-4ee5-4675-a54d-63c737bf9a2d.jpg"
              />

              <Stack>
                <Text variant={isMobile ? "h4_mobile" : "h4"}>
                  {t("changePass")}
                </Text>
                <Card>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder={t("oldPass")}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder={t("newPass")}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Card>
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  colorScheme="yellow"
                  width="100px"
                >
                  {t("update")}
                </Button>
              </Stack>
            </Stack>
            <Stack gap="1rem" marginTop="6rem">
              <Button colorScheme="yellow" width="100px" onClick={onOpen}>
                {t("edit")}
              </Button>
              <Modal
                size={isMobile ? "md" : "5xl"}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <Text textAlign="center" marginTop="2rem" variant="h7">
                    {t("profile")}
                  </Text>
                  <ModalCloseButton />
                  <ModalBody>
                    <form onSubmit={submitForm}>
                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("username")}
                      </Text>
                      <div>
                        <input
                          style={{
                            borderRadius: " 0.25rem",
                            border: "1px solid black",
                            padding: "0.25rem 0.5rem",
                            width: isMobile ? 250 : 600,
                          }}
                          type="text"
                          value={tempuser.username}
                          onChange={(event) => {
                            setTempUser((prevState) => ({
                              ...prevState,
                              username: event.target.value,
                            }));
                          }}
                          required
                        ></input>
                      </div>

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("displayname")}
                      </Text>
                      <div>
                        <input
                          style={{
                            borderRadius: " 0.25rem",
                            border: "1px solid black",
                            padding: "0.25rem 0.5rem",
                            width: isMobile ? 250 : 600,
                          }}
                          type="text"
                          value={tempuser.displayName}
                          onChange={(event) => {
                            setTempUser((prevState) => ({
                              ...prevState,
                              displayName: event.target.value,
                            }));
                          }}
                          required
                        ></input>
                      </div>

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("phonenumber")}
                      </Text>
                      <div>
                        <input
                          style={{
                            borderRadius: " 0.25rem",
                            border: "1px solid black",
                            padding: "0.25rem 0.5rem",
                            width: isMobile ? 250 : 600,
                          }}
                          type="text"
                          value={tempuser.phonenumber}
                          onChange={(event) => {
                            setTempUser((prevState) => ({
                              ...prevState,
                              phonenumber: event.target.value,
                            }));
                          }}
                          required
                        ></input>
                      </div>

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {" "}
                        {t("birthday")}
                      </Text>
                      <div
                        style={{
                          borderRadius: " 0.25rem",
                          border: "1px solid black",
                          padding: "0.25rem 0.5rem",
                          width: isMobile ? 250 : 600,
                        }}
                      >
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="datetime-local"
                          value={tempuser.dob}
                          onChange={(event) => {
                            setTempUser((prevState) => ({
                              ...prevState,
                              dob: event.target.value,
                            }));
                          }}
                        />
                      </div>

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {" "}
                        {t("gender")}
                      </Text>

                      <div
                        style={{
                          borderRadius: " 0.25rem",
                          border: "1px solid black",
                          padding: "0.25rem 0.5rem",
                          width: isMobile ? 250 : 600,
                        }}
                      >
                        <Select
                          placeholder="Choose"
                          value={tempuser.gender}
                          onChange={(event) => {
                            const gender: Gender = event.target.value as any;
                            setTempUser((prevState) => ({
                              ...prevState,
                              gender,
                            }));
                          }}
                        >
                          <option value={Gender.male}>Male</option>
                          <option value={Gender.female}>Female</option>
                          <option value={Gender.other}>Other</option>
                        </Select>
                      </div>

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("address")}
                      </Text>
                      <div>
                        <input
                          style={{
                            borderRadius: " 0.25rem",
                            border: "1px solid black",
                            padding: "0.25rem 0.5rem",
                            width: isMobile ? 250 : 600,
                          }}
                          type="text"
                          value={tempuser.address}
                          onChange={(event) => {
                            setTempUser((prevState) => ({
                              ...prevState,
                              address: event.target.value,
                            }));
                          }}
                          required
                        ></input>
                      </div>

                      <ModalFooter>
                        <Button
                          width="100px"
                          colorScheme="blue"
                          mr={3}
                          onClick={onClose}
                        >
                          <Text color="white !important" variant="h7">
                            {t("close")}
                          </Text>
                        </Button>
                        <Button
                          width="100px"
                          type="submit"
                          isLoading={isLoading}
                          variant="ghost"
                        >
                          <Text variant="h7">{t("update")}</Text>
                        </Button>
                      </ModalFooter>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Flex gap="2rem" direction={isMobile ? "column" : "row"}>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <EmailIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>email</Text>
                </Card>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <PersonOutlineIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {tempuser.username}
                  </Text>
                </Card>
              </Flex>
              <Flex gap="2rem" direction={isMobile ? "column" : "row"}>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <LocalPhoneIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {tempuser.phonenumber}
                  </Text>
                </Card>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <BadgeIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {tempuser.displayName}
                  </Text>
                </Card>
              </Flex>
              <Flex gap="2rem" direction={isMobile ? "column" : "row"}>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <TransgenderIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {tempuser.gender}
                  </Text>
                </Card>
                <Card
                  width="210px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="1rem"
                >
                  <CakeIcon />
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    31/01/2001
                  </Text>
                </Card>
              </Flex>
              <Card
                width={isMobile ? "210px" : "440px"}
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="1rem"
              >
                <HomeIcon />
                <Text variant={isMobile ? "h4_mobile" : "h4"}>
                  {tempuser.address}
                </Text>
              </Card>
            </Stack>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}

export default Profile;
