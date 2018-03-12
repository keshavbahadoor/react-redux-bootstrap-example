import axios from 'axios'; 

/**
 * Why axios is better: 
 * https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; 

class UserAPI {

    /** 
     * returns all users from database 
    */
    static getAllUsers() {
        return axios.get('/users')
            .then( response=>{
                return response.data; 
            })
            .catch( error =>{
                console.log('error', error);
                return error; 
            }); 
    }
}

export default UserAPI; 