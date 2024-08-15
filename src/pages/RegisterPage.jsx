import React, { useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

export const RegisterPage = () => {
  const { users = [], initialUserForm } = useUsers()
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find((u) => u.id == id) || initialUserForm;
      setUserSelected(user);
    }

  }, [id]);

  const isEditing = userSelected.id > 0;

  return (
    <div className="container my-4">
      <h4>{isEditing ? "Editar Usuario" : "Registrar Usuario"}</h4>
      <div className="row"></div>
      <div className="col">
        <UserForm
          userSelected={userSelected}
        />
      </div>
    </div>
  );
};
