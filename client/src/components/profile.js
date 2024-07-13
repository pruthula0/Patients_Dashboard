import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ patientId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`http://localhost:5000/api/patients/${patientId}`);
      setProfile(response.data);
    };
    fetchProfile();
  }, [patientId]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.Name}</h1>
      <p>Email: {profile.Email}</p>
      <p>Date of Birth: {profile.DateOfBirth}</p>
    </div>
  );
};

export default Profile;
