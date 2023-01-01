import { useContext, useEffect, useState } from "react";
import { Gender, UpdateUser } from "../../api/auth/models/user";
import { AuthContext } from "app/context/authContext";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Select, Input, useToast, Button } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import { updateSelfUser } from "app/services/UserService";
function Signup() {
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
    <div
      style={{
        background: "white",
        margin: "0 auto",
        minHeight: isMobile ? 610 : 795,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <div
          style={{
            padding: "1.25rem",
            borderRadius: "0.5rem",
            border: " 1px solid black",
            display: "grid",
            gap: "1rem",
            marginTop: " 4rem",
            width: "300px",
            background: "white",
          }}
        >
          <h1 style={{ textAlign: "center" }}> {t("profile")}</h1>
          <label style={{}}> {t("username")}</label>
          <form onSubmit={submitForm}>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
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

            <label style={{}}> {t("displayname")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
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

            <label style={{}}> {t("phonenumber")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
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

            <label>{t("birthday")}</label>
            <div
              style={{
                borderRadius: " 0.25rem",
                border: "1px solid black",
                padding: "0.25rem 0.5rem",
                width: 275,
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

            <label> {t("gender")}</label>

            <div
              style={{
                borderRadius: " 0.25rem",
                border: "1px solid black",
                padding: "0.25rem 0.5rem",
                width: 275,
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

            <label style={{}}> {t("address")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
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
            <Button
              style={{
                marginTop: "2rem",
                borderRadius: " 0.25rem",
                fontWeight: "300",
                transition: " all .3s ease-in-out",
                cursor: "pointer",
                border: "none",
                textTransform: "uppercase",
                width: 275,
                background: "#3399FF",
                color: "white",
              }}
              type="submit"
              isLoading={isLoading}
            >
              {t("update")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
