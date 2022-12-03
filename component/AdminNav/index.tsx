import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { css } from "@emotion/react";
const AdminNav = () => {
  return (
    <div
      style={{
        height: "50px",
        borderBottom: "0.5px solid rgb(231, 228, 228)",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "0.5px solid lightgray",
            padding: "3px",
          }}
        >
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
            css={css`
                placeholder: 
                     font-size: 12px;
              `}
            type="text"
            placeholder="Search..."
          />
          <SearchOutlinedIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
              position: "relative",
            }}
          >
            <LanguageOutlinedIcon style={{ fontSize: "20px" }} />
            English
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            position: "relative",
          }}
        >
          <NotificationsNoneOutlinedIcon style={{ fontSize: "20px" }} />
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "red",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: "bold",
              position: "absolute",
              top: "-5px",
              right: "-5px",
            }}
          >
            1
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            position: "relative",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "red",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: "bold",
              position: "absolute",
              top: "-5px",
              right: "-5px",
            }}
          >
            2
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            position: "relative",
          }}
        >
          <ListOutlinedIcon style={{ fontSize: "20px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            position: "relative",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AdminNav;
