import React,{useState, useEffect } from "react";
import axios from "axios";

const EditPatient = ({ patientId, onClose , onUpdate}) => {
  const[patientData,setPatientData] = useState({});

  useEffect(() => {
    //get
    const fetchPatientData = async () => {
      try{
        const response = await axios.get(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`);
        setPatientData(response.data);
      }catch(error){
        console.error('Error fetching patient Data for Editing :',error);
      }
    };

    fetchPatientData();
  },[patientId]);

  const handleUpdate = async () => {
    try{
      await axios.put(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`,patientData);
      onClose();
      onUpdate();
    }catch (error){
      console.error("error updating patient :",error);
    }
  }

  const handleChange = (e) => {
    const{name,value} = e.target;
    setPatientData({...patientData,[name]:value});
  };

  return(
    <div>
      <h2>Edit Patient</h2>

      <label>Name :</label>
      <input type="text" name="name" value={patientData.name || ""} onChange={handleChange}/>

      <label>Weight :</label>
      <input type="text" name="name" value={patientData.weight || ""} onChange={handleChange}/>

      <label>Gender :</label>
      <input type="text" name="name" value={patientData.gender || ""} onChange={handleChange}/>

      <label>Age :</label>
      <input type="text" name="name" value={patientData.age || ""} onChange={handleChange}/>

      <label>Disease :</label>
      <input type="text" name="name" value={patientData.disease || ""} onChange={handleChange}/>

      {/* <label>DoctorId :</label>
      <input type="text" name="name" value={patientData.doctorid || ""} onChange={handleChange}/> */}

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )

};

export default EditPatient;