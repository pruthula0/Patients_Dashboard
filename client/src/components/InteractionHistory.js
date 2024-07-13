import React, { useEffect, useState } from "react";
import axios from "axios";

const InteractionHistory = ({ patientId }) => {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const fetchInteractions = async () => {
      const response = await axios.get(`/api/interactions/${patientId}`);
      setInteractions(response.data);
    };
    fetchInteractions();
  }, [patientId]);

  return (
    <div>
      <h2>Interaction History</h2>
      <ul>
        {interactions.map((interaction) => (
          <li key={interaction.InteractionID}>
            <p>Query: {interaction.Query}</p>
            <p>Response: {interaction.Response}</p>
            <p>Date: {interaction.InteractionDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractionHistory;
