import Sidebar from "@/components/sidebar/SideBar";
import { Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  
  // Show sidebar only on these routes
  const showSidebar = ["/users", "/settings", "/be-my-members", "/dashboard"].includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <main className={showSidebar ? "flex-1 p-6" : "w-full"}>
        <Outlet />   {/* this renders nested route pages */}
      </main>
    </div>
  );
}
