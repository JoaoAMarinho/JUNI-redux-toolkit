import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Layout.css";
import logo from "../logo.svg";

const Layout = () => {
  const { loading, error } = useSelector(state => state.general);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      setShowError(false);
    }
  }, [error]);

  return (
    <div>
      {loading && (
        <div className="loading style-2">
          <div className="loading-wheel"></div>
        </div>
      )}
      <img src={logo} className="App-logo" alt="logo" />
      <Outlet />
      {showError && error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
