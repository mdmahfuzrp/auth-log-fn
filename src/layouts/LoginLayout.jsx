import { Outlet } from "react-router-dom";
import "../App.css";

function LoginLayout() {
  return (
    <div className="App">
      <div className="AppGlassLogin">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
