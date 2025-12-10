import Sidebar from "@/components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />   {/* this renders nested route pages */}
      </main>
    </div>
  );
}
