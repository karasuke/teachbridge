import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const LoginPage = () => {

  const { handlerLogin } = useAuth();
  const initialLoginForm = {
    username: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      Swal.fire("Error", "Complete los campos requeridos", "error");
      return;
    }
    handlerLogin({ username, password });
    setLoginForm(initialLoginForm);
  };

  return (
    <>
      <div className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Page</h5>
            </div>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <input
                  className="form-control my-3 w-75"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
                <input
                  className="form-control my-3 w-75"
                  placeholder="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
