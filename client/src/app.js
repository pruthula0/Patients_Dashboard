import React from "react";
import Profile from "./components/Profile";
import InteractionHistory from "./components/InteractionHistory";
import DoctorInfo from "./components/DoctorInfo";

const App = () => {
  const patientId = 1; // Example patient ID
  const doctorId = 1; // Example doctor ID

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <Profile patientId={patientId} />
      <InteractionHistory patientId={patientId} />
      <DoctorInfo doctorId={doctorId} />
    </div>
  );
};

export default App;
