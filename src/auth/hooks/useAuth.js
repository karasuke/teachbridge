import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { onLogin, onlogout } from "../../store/slices/auth/authSlice";
import { RoutesDirections } from "../../data/libraries/Routes";

export const useAuth = () => {

  const dispatch = useDispatch();
  //Este selector hace que se renderice el componente cada vez que cambia el estado de auth
  const { user, isAdmin, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //handlerLogin hace la llamada a la api y guarda el token en el session storage
  const handlerLogin = async ({ username, password }) => {
    try {
      //response es la respuesta de la api 
      const response = await userLogin({ username, password });
      //token es el token que se recibe de la api
      const token = response.data.token;
      //claims es el token decodificado para obtener el isAdmin
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      //user es el usuario que se guarda en el estadov de redux y en el session storage
      const user = { username: claims.sub };

      //Este dispatch hace que se ejecute el reducer de authSlice.js y se guarde el usuario en el estado de redux
      dispatch(onLogin({ user, isAdmin: claims.isAdmin }));
      

      //Se guarda el usuario en el session storage
      sessionStorage.setItem("login", JSON.stringify({ isAuth: true, isAdmin: claims.isAdmin, user }));
      //Se guarda el token en el session storage
      sessionStorage.setItem("token", `Bearer ${token}`);
      //Se redirige a la página de usuarios
      navigate("/users");
    } catch (error) {
      let errorMessage = "Error de conexión";

      if (error.response) {
        switch (error.response.status) {
          case 401:
            errorMessage = "Usuario o contraseña incorrectos";
            break;
          case 403:
            errorMessage = "Usuario no autorizado";
            break;
          case 500:
            errorMessage = "Error de conexión";
            break;
          default:
            break;
        }
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };
  /*se borra el token del session storage y se redirige al login*/
  const handlerLogout = () => {
    dispatch(onlogout());
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    navigate(RoutesDirections.MAIN_ROUTE);
  };

  return { login: { user, isAdmin, isAuth }, handlerLogin, handlerLogout };
};
