import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const RequiredAuthPage = ({ allowPermissions = [] }) => {
//   const { user } = useSelector((state) => state.auth);
//   const userPermissions = user?.permissions || [];
//   const location = useLocation();
//   return userPermissions.find((p) => allowPermissions?.includes(p)) ||
//     allowPermissions.length <= 0 ? (
//     <Outlet></Outlet>
//   ) : user && user.id ? (
//     <Navigate to="/unauthorize" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.id) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user || !user.id) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
