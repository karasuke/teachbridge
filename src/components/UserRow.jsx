import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRow = ({ id, username, email, admin }) => {

  const { handlerUserSelectedForm, handlerDeteteUser } = useUsers()
  const { login } = useAuth();


  return (
    <tr >
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      {!login.isAdmin ||

        <>
          <td>
            <button type="button"
              className="btn btn-warning"
              onClick={() => handlerUserSelectedForm({
                id,
                username,
                email,
                admin

              })}>
              Actualizar
            </button>
          </td>
          <td>
            <NavLink className={'btn btn-secondary'} to={'/users/edit/' + id} >Update Route</NavLink>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handlerDeteteUser(id)}
            >
              Eliminar
            </button>
          </td>

        </>
      }




    </tr>
  );
};
