import AdminFeatured from "app/component/AdminFeatured";
import AdminNav from "app/component/AdminNav";
import AdminSide from "app/component/AdminSide";

const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSide />
      <div>
        <AdminNav />
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
      </div>
    </div>
  );
};

export default Admin;
