import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { UserNav } from "../components/layout/UserNav";
import { RegisterPage } from "../pages/RegisterPage";
import { useAuth } from "../auth/hooks/useAuth";
import { RoutesDirections } from "../data/libraries/Routes";
import { LandingPage } from "../components/LandingPage";

export const UserRoutes = () => {
  const { login } = useAuth();
  return (

    
    <Routes>
      <Route path="users" element={<><UserNav /><UsersPage /></>} />
      <Route path="users/page/:page" element={<><UserNav /><UsersPage /></>} />
      {login.isAdmin && (
        <>
          <Route path="users/register" element={<><UserNav /><RegisterPage /></>} />
          <Route path="users/edit/:id" element={<><UserNav /><RegisterPage /></>} />
        </>
      )}
      <Route path={RoutesDirections.MAIN_ROUTE} element={<LandingPage />} />
    </Routes>
    
  );
 
};
