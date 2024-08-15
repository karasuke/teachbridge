import axios from 'axios';

//aqui se hace la peticion al servidor para logear al usuario
export const userLogin = async ({ username, password }) => {



    try {

        return await axios.post(`${import.meta.env.VITE_API_URL}/login`, { username, password })

    } catch (error) {

        
        
        throw error;
    }



}