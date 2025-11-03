import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ protectedContent }) => {
  const userName = localStorage.getItem("userName");
  const location = useLocation();

  if (!userName && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  return protectedContent;
};

AuthGuard.propTypes = {
  protectedContent: PropTypes.node.isRequired,
};

export default AuthGuard;
