import DashboardLayout from "@/layout/DashboardLayout";
import DashboardPage from "@/pages/DashboardPage";
import Me from "@/pages/Me";
import Settings from "@/pages/Setting";
import { BrowserRouter, Route, Routes} from "react-router-dom";

export default function AppRoutes(){
    return (
        <BrowserRouter>
          <Routes>
             <Route element = {<DashboardLayout/>}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/users" element={<Me />} />
                <Route path="/settings" element={<Settings/>} />
             </Route>
          </Routes>
        </BrowserRouter>
    );

}