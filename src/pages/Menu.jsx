import React, { useEffect, useState } from "react";
import Header from "../components/navbar";
import Body from "../components/body";
import Modal from "../components/modal";
import addData from "../services/formdata";
import getFunc from "../services/getMenus";
import Footer from "../components/footer";

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuData,setData]=useState()
  console.log("datamenu",menuData)

  const [formData, setFormData] = useState({
    menuName: "",
    menuDescription: "",
    itemName: "",
    itemDescription: "",
    price: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { menuName, menuDescription, itemName, itemDescription, price } =
      formData;

    if (
      !menuName ||
      !menuDescription ||
      !itemName ||
      !itemDescription ||
      !price
    ) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Submitted Data:", formData);
    setModalOpen(false);
    setFormData({
      menuName: "",
      menuDescription: "",
      itemName: "",
      itemDescription: "",
      price: "",
    });

    const response = await addData(formData);
    console.log("respone",response)
  };


     const callFunc=async()=>{
          
       const response= await getFunc()

       console.log("responseMenu",response)
       setData(response)


     }
   
   useEffect(()=>{
      callFunc() 
   },[modalOpen])



  return (
    <div>
      <Header />
      <Body setModalOpen={setModalOpen} menuData={menuData} />

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
          error={error}
        />
          

      )}
        <div>
          <Footer/>
        </div>
    </div>
  );
}
