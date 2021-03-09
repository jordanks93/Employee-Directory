import axios from 'axios';

// Export an object containing a method used to access the randomuser API
export default {
    getEmployees: () => {
        return axios.get('https://randomuser.me/api/?results=100');
    }
};