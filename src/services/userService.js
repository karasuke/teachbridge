import { usersApi } from "../apis/usersApi";


//api url esta vacio porque la url base ya se encuentra en el archivo usersApi.js
const API_URL = '';



/* findAll devuelve una promesa con todos los usuarios*/
export const findAll = async () => {
    try {
        const response = await usersApi.get(API_URL);
        return response;

    } catch (error) {
        console.error(error);
    }
    return null;
}

/* findAll devuelve una promesa con todos los usuarios*/
export const findAllPages = async (page = 0) => {
    try {
        const response = await usersApi.get(`${API_URL}/page/${page}`);
        return response;

    } catch (error) {
        console.error(error);
    }
    return null;
}

/*save guarda un usuario en la base de datos y devuelve una promesa con el usuario guardado*/
export const save = async ({ username, email, password, admin }) => {
    try {
        const response = await usersApi.post(API_URL, { username, email, password, admin });
        return response;

    } catch (error) {
        throw error;
    }

}

/* update devuelve una promesa con el usuario actualizado*/
export const update = async ({ id, username, email, admin }) => {
    try {
        //nothing es para indicar que no se va a cambiar la contraseña en el backend 
        return await usersApi.put(`${API_URL}/${id}`, { username, email, admin });
    } catch (error) {
        throw error;
    }


}

/* remove elimina un usuario de la base de datos*/
export const remove = async (id) => {
    try {
        await usersApi.delete(`${API_URL}/${id}`);


    } catch (error) {
        throw error;
    }

}

// Agrega un comentario a la base de datos y devuelve una promesa con el comentario guardado
// Agrega un comentario a la base de datos y devuelve una promesa con el comentario guardado
export const saveComment = async ({ userName, userComment }) => {
    try {
        const response = await usersApi.post(`${API_URL}/create/comments`, { userName, userComment });
        return response;
    } catch (error) {
        throw error;
    }
};
export const getComments = async () => {
    try {
        const response = await usersApi.get(`${API_URL}/get/comments`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
};





