// Header.jsx
import { React } from "react";
import "./AdHeader.css";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
//  const auth = JSON.parse(localStorage.getItem('user'));
//  const Logout = () => {
//   localStorage.removeItem('user');
//   window.location.href = '/'; // Redirect to login page after logout
// };
const AdminHeader = () => {
  return (
    <div className="AdHead">
      <header>
        <ul
          style={{
            display: "flex",
            gap: "4rem",
            fontSize: "1rem",
            listStyle: "none",
          }}
        >
          <h1>
            Admin Dashboard <AdminPanelSettingsIcon fontSize="" />
          </h1>

          <div className="side-btn">
            <div className="light_btn">
              <Link to="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Logout <LogoutIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default AdminHeader;
