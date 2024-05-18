import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Doctor = () => {
  const [doctors ,setDoctors] = useState([]);

  useEffect(() =>{
    //get
    const fetchDoctors = async() => {
      try{
        const response = await axios.get("https://backendhospital-ji3g.onrender.com/doctors");
        setDoctors(response.data);
      }catch (error) {
        console.error("Error fetcching Doctors : ",error);
      }
    };

    fetchDoctors();
  },[]);


  return (
    <div>
      <center>
      <h1>Doctors</h1>
      {
        doctors.map(doctor => (
          <div key={doctor.id}>
              <p><strong>{doctor.name}</strong>- {doctor.specialization}</p>
              <p>Doctor ID : {doctor.id}</p>
          </div>
        ))
      }
      </center>
    </div>
  )
};


export default Doctor
