import axios from "axios";


const instance = axios.create({
    baseURL: "https://assignment-11-one.vercel.app/api/v1",
    withCredentials : true,
})

const useAxios = () => {
    
    
    return instance;
};

export default useAxios;