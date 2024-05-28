import React,{useState, useEffect } from "react";
import axios from "axios";

const EditPatient = ({ patientId, onClose , onUpdate}) => {
  const[patientData,setPatientData] = useState({});

  useEffect(() => {
    //get
    const fetchPatientData = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/patient/${patientId}`);
        setPatientData(response.data);
      }catch(error){
        console.error('Error fetching patient Data for Editing :',error);
      }
    };

    fetchPatientData();
  },[patientId]);

  const handleUpdate = async () => {
    try{
      await axios.put(`http://localhost:5000/patient/${patientId}`,patientData);
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
      <input type="text" name="weight" value={patientData.weight || ""} onChange={handleChange}/>

      <label>Gender :</label>
      <input type="text" name="gender" value={patientData.gender || ""} onChange={handleChange}/>

      <label>Age :</label>
      <input type="text" name="age" value={patientData.age || ""} onChange={handleChange}/>

      <label>Disease :</label>
      <input type="text" name="disease" value={patientData.disease || ""} onChange={handleChange}/>
      <br/>

      {/* <label>DoctorId :</label>
      <input type="text" name="name" value={patientData.doctorid || ""} onChange={handleChange}/> */}

        <div className="update-grp">
          <button onClick={handleUpdate} className="update-btn">Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>

      
    </div>
  )

};

export default EditPatient;