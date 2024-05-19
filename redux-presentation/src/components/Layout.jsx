import { Outlet } from "react-router-dom";
import "./Layout.css";
import logo from "../logo.svg";

/* TODO: loading, showError with useEffect */
const Layout = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Outlet />
    </div>
  );
};

export default Layout;
