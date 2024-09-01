import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useAuth } from "../auth/hooks/useAuth";
import { RoutesDirections } from "../data/libraries/Routes";
import { LandingPage } from "../components/LandingPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { UsersPage } from "../pages/UsersPage";
import { UserNav } from "../components/layout/UserNav";
import { Classes } from "../pages/Classes";

/**
 * Componente que define las rutas de la aplicación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa las rutas de la aplicación.
 */
export const AppRoutes = () => {

  //Hook que trae la función login del contexto AuthContext para saber si el usuario está autenticado o no
  const { login } = useAuth();

  //rutas de la pagina
  return (
    <Routes>
      <Route path={RoutesDirections.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={RoutesDirections.MAIN_ROUTE} element={<LandingPage />} />
      <Route path={RoutesDirections.CLASSES_ROUTE} element={<Classes />} />

      {login?.isAuth ? (
        <>
          <Route path="users" element={<><UserNav /><UsersPage /></>} />
          <Route path="users/page/:page" element={<><UserNav /><UsersPage /></>} />
          {login.isAdmin && (
            <>
              <Route path="users/register" element={<><UserNav /><RegisterPage /></>} />
              <Route path="users/edit/:id" element={<><UserNav /><RegisterPage /></>} />
            </>
          )}
          
        </>
      ) : (
        <Route path="*" element={<Navigate to={RoutesDirections.MAIN_ROUTE} />} />
      )}
    </Routes>
  );
};