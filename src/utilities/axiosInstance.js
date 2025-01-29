import axios from "axios"
const baseUrl = "https://backenddns-1.onrender.com";

const axiosInstance=axios.create({ 
       baseURL:baseUrl,
       headers:{
        "Content-Type": "application/json",
       }
})


export default axiosInstance 