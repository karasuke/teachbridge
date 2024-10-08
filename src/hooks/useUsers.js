
import Swal from 'sweetalert2';
import { findAllPages, remove, save, update, saveComment, getComments, uploadVideo, getVideos } from '../services/userService';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  initialUserForm,
  addUser,
  deleteUser,
  updateUser,
  loadingUsers,
  onUserSelectedForm,
  onOpenForm,
  onCloseForm,
  loadingError
} from '../store/slices/users/usersSlice';
import { useAuth } from '../auth/hooks/useAuth';

export const useUsers = () => {
  const { users, userSelected, errors, visibleForm, isLoading, paginator } = useSelector(state => state.users);
  const { login, handlerLogout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUsers = async (page = 0) => {
    try {
      const users = await findAllPages(page);
      dispatch(loadingUsers(users.data));

    } catch (error) {
      if (error.response?.status === 401) {
        handlerLogout();
      }
    }
  };


  const handlerAddUser = async (user) => {
    if (!login.isAdmin) return;
    try {
      const response = user.id === 0 ? await save(user) : await update(user);
      dispatch(user.id === 0 ? addUser(response.data) : updateUser(response.data));

      Swal.fire({
        icon: 'success',
        title: user.id === 0 ? 'Usuario agregado' : 'Usuario actualizado',
        text: user.id === 0 ? 'Usuario ha sido creado con éxito' : 'El usuario ha sido actualizado con éxito',
      });

      handlerCloseForm();
      navigate('/users');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch(loadingError(error.response.data));
      } else if (error.response && error.response.status === 500 && error.response.data?.message?.includes('constraint')) {
        if (error.response.data?.message?.includes('UK_username')) {
          dispatch(loadingError({ username: 'El nombre de usuario ya existe' }));
        }
        if (error.response.data?.message?.includes('UK_email')) {
          dispatch(loadingError({ email: 'El email ya existe' }));
        }
      } else if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        handlerLogout();
      } else {
        throw error;
      }
    }
  };

  const handlerDeteteUser = (id) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el usuario?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await remove(id);
          dispatch(deleteUser(id));
          Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
        } catch (error) {
          if (error.response?.status === 401 || error.response.status === 403) {
            handlerLogout();
          }
        }
      }
    });
  };

  const handlerAddComment = async (userName, userComment) => {
    try {
        await saveComment({ userName, userComment });
        // Eliminada la alerta de Swal
    } catch (error) {
        if (error.response && error.response.status === 400) {
            dispatch(loadingError(error.response.data));
        } else if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Manejo de errores 401 y 403
        } else {
            throw error;
        }
    }
};

  const handlerGetComments = async () => {
    try {
      const comments = await getComments();
      return comments.data;
    } catch (error) {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        handlerLogout();
      } else {
        throw error;
      }
    }
  };

  const handlerUploadFile = async (file) => {
    try {
        const data = await uploadVideo(file);
        Swal.fire({
            icon: 'success',
            title: 'Archivo subido con éxito',
            text: 'El archivo se ha subido correctamente.',
        });
        return data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al subir el archivo.',
        });
        throw error;
    }
};
const handleGetVideos = async () => {
  try {
      const videos = await getVideos();
     
      return videos;
  } catch (error) {
      console.error("Error al obtener los videos:", error);
  }
};
  //user necesita esparcirse porque es un array de objetos y no un objeto solo
  const handlerUserSelectedForm = (user) => {
    dispatch(onUserSelectedForm(user));
  };

  const handlerOpenForm = () => {
    dispatch(onOpenForm(true));
  };

  const handlerCloseForm = () => {
    dispatch(onCloseForm());
    dispatch(loadingError({}));
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    isLoading,
    paginator,
    handlerAddUser,
    handlerDeteteUser,
    handlerUserSelectedForm,
    handlerGetComments,
    handlerOpenForm,
    handlerCloseForm,
    handlerAddComment,
    getUsers,
    handleGetVideos,
    handlerUploadFile
  };
};
