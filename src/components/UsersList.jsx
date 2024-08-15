
import { UserRow } from "./UserRow";
import { Container, Table } from "react-bootstrap";

import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersList = () => {

  const { users } = useUsers()
  const { login } = useAuth()
  return (

    <Container>

      <Table className="table table-hover table-striped">


        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            {!login.isAdmin || <>
              <th>Update</th>
              <th>Update Route</th>
              <th>Remove</th>

            </>}


          </tr>
        </thead>
        <tbody>
          <>
            {users.map((user) => (
              <UserRow

                key={user.id}


                {...user}
              />
            ))}
          </>
        </tbody>
      </Table>
    </Container>

  );
};
