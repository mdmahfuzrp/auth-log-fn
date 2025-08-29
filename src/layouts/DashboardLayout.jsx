import { Outlet } from "react-router-dom";
import "../App.css";
import RightSide from "../components/RigtSide/RightSide";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        {/* Outlet will render the nested route component */}
        <div className="MainContent">
          <Outlet />
        </div>
        <RightSide />
      </div>
    </div>
  );
}

export default DashboardLayout;
