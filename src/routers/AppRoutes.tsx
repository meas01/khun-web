import DashboardLayout from "@/layout/DashboardLayout";
import BeMyMembers from "@/pages/BeMyMembers";
import CVPage from "@/pages/CVPage";
import DashboardPage from "@/pages/DashboardPage";
import MainPage from "@/pages/MainPage";
import Me from "@/pages/Me";
import Settings from "@/pages/Setting";
import { BrowserRouter, Route, Routes} from "react-router-dom";

export default function AppRoutes(){
    return (
        <BrowserRouter>
          <Routes>
             <Route element = {<DashboardLayout/>}>
                <Route path="/" element={<MainPage/>} />
                <Route path="/cv" element={<CVPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/users" element={<Me />} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/be-my-members" element={<BeMyMembers/>} />
             </Route>
          </Routes>
        </BrowserRouter>
    );

}