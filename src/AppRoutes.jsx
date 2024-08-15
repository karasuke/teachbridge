import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useAuth } from "./auth/hooks/useAuth";
import { RoutesDirections } from "./data/libraries/Routes";
import { LandingPage } from "./components/LandingPage";


export const AppRoutes = () => {

    const { login } = useAuth();

    return (
        <Routes>
            {login?.isAuth ? (
                <Route
               
                    path="/*"
                    element={<UserRoutes />} />
            ) : (
                <>
                    <Route path={RoutesDirections.LOGIN_ROUTE} element={<LoginPage />} />
                   
                    <Route path={RoutesDirections.MAIN_ROUTE} element={<LandingPage />} />
                   
                </>
            )}
        </Routes>
    );
}
