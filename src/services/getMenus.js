import axiosInstance from "../utilities/axiosInstance";


  const getFunc=async()=>{
      
        const response=await  axiosInstance.get("getData")

        return response.data
  }

  export default getFunc