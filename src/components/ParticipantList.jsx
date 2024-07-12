// src/components/ParticipantList.jsx

import React, { useState, useEffect } from 'react';

function ParticipantList() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = () => {
    fetch('http://127.0.0.1:5000/participants')
      .then(response => response.json())
      .then(data => {
        setParticipants(data);
      })
      .catch(error => {
        console.error('Error fetching participants:', error);
      });
  };

  return (
    <div>
      <h2>Participant List</h2>
      <ul>
        {participants.map(participant => (
          <li key={participant.id}>
            <strong>User ID:</strong> {participant.user_id} - <strong>Survey ID:</strong> {participant.survey_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
