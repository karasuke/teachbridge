import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const UserNav = () => {

  const { login, handlerLogout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Usuarios
              </NavLink>
            </li>
            {!login.isAdmin || <li className="nav-item">

              <NavLink className="nav-link" to="/users/register">
                Register
              </NavLink>
            </li>}

          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="logout">
          <span className="nav-item nav-link text-primary mx-3">
            Bienvenido {login.user.username}


          </span>

          <div className="d-flex">
            <button className="btn btn-outline-danger" onClick={handlerLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
