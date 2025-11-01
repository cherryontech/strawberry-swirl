import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const userName = localStorage.getItem("userName");
  const location = useLocation();

  if (!userName && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;
