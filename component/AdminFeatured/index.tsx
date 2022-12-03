import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { css } from "@emotion/react";
const AdminFeatured = () => {
  return (
    <div
      style={{
        flex: 2,
        boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
        padding: "10px",
      }}
      css={css`
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      `}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "gray",
        }}
      >
        <h1 style={{ fontSize: "16px", fontWeight: 500 }}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p style={{ width: "100px", height: "100px" }}>
          Total sales made today
        </p>
        <p style={{ fontSize: "30px" }}>$420</p>
        <p
          style={{
            fontWeight: 300,
            fontSize: "12px",
            color: "gray",
            textAlign: "center",
          }}
        >
          Previous transactions processing. Last payments may not be included.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "gray" }}>Target</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "14px",
                color: "red",
              }}
            >
              <KeyboardArrowDownIcon fontSize="small" />
              <div style={{ fontSize: "30px" }}>$12.4k</div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "gray" }}>Last Week</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "14px",
                color: "green",
              }}
            >
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div style={{ fontSize: "30px" }}>$12.4k</div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "gray" }}>Last Month</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "14px",
                color: "green",
              }}
            >
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div style={{ fontSize: "30px" }}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFeatured;
