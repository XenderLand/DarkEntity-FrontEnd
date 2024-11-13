import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdLayout() {
  return (
    <div>
      <AdminHeader />

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
