// NavBarWrapper.js
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const NavBarWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldRenderNavBar = !["/login", "/register"].includes(
    location.pathname
  );

  // If you want to exclude the NavBar on the "/" route, you can add the condition:
  if (location.pathname === "/") {
    return children;
  }

  return (
    <>
      {shouldRenderNavBar && <NavBar />}
      {children}
    </>
  );
};

export default NavBarWrapper;
