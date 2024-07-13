import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorInfo = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      const response = await axios.get(`/api/doctors/${doctorId}`);
      setDoctor(response.data);
    };
    fetchDoctor();
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div>
      <h2>Doctor Information</h2>
      <p>Name: {doctor.Name}</p>
      <p>Specialty: {doctor.Specialty}</p>
    </div>
  );
};

export default DoctorInfo;
