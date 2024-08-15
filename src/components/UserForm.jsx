import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useUsers } from '../hooks/useUsers';

export const UserForm = ({ userSelected, handlerCloseForm }) => {
  const { initialUserForm, handlerAddUser, errors } = useUsers();
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email, admin } = userForm;
  const [validEmail, setValidEmail] = useState(true);

  useEffect(() => {
    setUserForm({ ...userSelected, password: '' });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
    // Validar el formato del correo electrónico usando una expresión regular
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      setValidEmail(isValidEmail);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Verificar si el correo electrónico es válido antes de enviar la solicitud
    if (!validEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un formato de correo electrónico válido.',
      });
      return;
    }
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  //cheked viene falso por defecto y se cambia a true cuando se selecciona el checkbox
  const [checked, setChecked] = useState(userForm.admin);

  const onCheckboxChange = () => {
    //!checked se vuelve true cuando se selecciona el checkbox
    setChecked(!checked);
    //se cambia el valor de admin en el objeto userForm a true o false
    setUserForm({

      ...userForm,
      admin: checked,
    });

  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        className='form-control my-3 w-75'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <p className='text-danger'>{errors?.username}</p>

      {id > 0 || (
        <input
          type='password'
          className='form-control my-3 w-75'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onInputChange}
        />
      )}
      <p className='text-danger'>{errors?.password}</p>

      <input
        type='text'
        className={`form-control my-3 w-75 ${!validEmail ? 'is-invalid' : ''}`}
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      <div className='my-3 form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          name='admin'
          checked={admin}
          onChange={onCheckboxChange}


        />
        <label className='form-check-label'>Admin</label>

      </div>
      <p className='text-danger'>{errors?.email}</p>

      <input type='hidden' name='id' value={id} />

      <button className='btn btn-primary' type='submit'>
        {id > 0 ? 'Actualizar' : 'Crear'}
      </button>
      {!handlerCloseForm || (
        <button className='btn btn-primary mx-2 ' onClick={handlerCloseForm} type='button'>
          Cerrar
        </button>
      )}
    </form>
  );
};
