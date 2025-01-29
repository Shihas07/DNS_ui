
  import axiosInstance from "../utilities/axiosInstance";

  const addData=async(formData)=>{
    console.log("formdatafromaxios",formData)
     
      const response=await axiosInstance.post("/addData",formData)

      console.log("fromaxiosresponse",response)
      return response
  }
  export default addData;