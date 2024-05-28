import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Doctor = () => {
  const [doctors ,setDoctors] = useState([]);

  useEffect(() =>{
    //get
    const fetchDoctors = async() => {
      try{
        const response = await axios.get("http://localhost:5000/doctor");
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
      <h1 className='doc'>Doctors</h1>
      {
        doctors.map(doctor => (
          <div key={doctor.id}>
              <p className='doc-details'><strong>{doctor.name}</strong>- {doctor.specialization}</p>
              <p className='doc-details'>Doctor ID : {doctor.id}</p>
          </div>
        ))
      }
      </center>
    </div>
  )
};


export default Doctor
