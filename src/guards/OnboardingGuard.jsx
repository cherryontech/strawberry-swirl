import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const OnboardingGuard = ({ children }) => {
  const userName = localStorage.getItem("userName");

  if (userName) {
    return <Navigate to="/start" replace />;
  }

  return children;
};

OnboardingGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OnboardingGuard;
