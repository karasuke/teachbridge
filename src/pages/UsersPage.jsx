import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { Paginator } from "../components/paginator";


export const UsersPage = () => {


  //este params sirve para obtener el numero de pagina que se esta mostrando en la url
  const { page } = useParams();



  const {
    users,
    visibleForm,
    isLoading,
    paginator,
    handlerOpenForm,
    getUsers,
  } = useUsers()

  const { login } = useAuth()

  useEffect(() => {
    getUsers(page)
  }, [, page])

  if (isLoading) {
    Swal.fire({
      title: "Cargando...",
      text: "Espere un momento por favor",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,

    });
    setTimeout(() => {
      Swal.close();
    }, 400);

  }


  return (
    <>

      {/*si visibleForm es true muestra el modal y si es false no hace nada*/}
      {!visibleForm || (
        <UserModalForm

        />
      )}
      <div className="container my-4">
        <h1>Usuarios</h1>
        <div className="row">
          <div className="col">
            {/*si visibleForm es true no hace nada y si es false muestra el boton*/}
            {(visibleForm || !login.isAdmin) || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-info">
                No hay usuarios registrados
              </div>
            ) :
              <>

                <UsersList />
                <Paginator url="/users/page" paginator={paginator} />


              </>

            }
          </div>
        </div>
      </div>
    </>
  );
};
