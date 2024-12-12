import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecords = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/get-recordings/');
      if (!response.ok) {
        throw new Error('Failed to fetch decibel records');
      }
      const data = await response.json();
      setRecords(data.recordings);
    } catch (err) {
      setError(err.message);
    }
  };

  const clearRecords = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/clear-recordings/', {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to clear records');
      }
      const result = await response.json();
      alert(result.message); // Notify user of success
      setRecords([]); // Clear records in the UI
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="profile-container">
      <h1>Decibel Records</h1>
      {error && <p className="error">{error}</p>}
      <table className="records-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Filename</th>
            <th>Duration (s)</th>
            <th>Decibel Level (dB)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record[0]}>
              <td>{record[0]}</td>
              <td>{record[1]}</td>
              <td>{record[2].toFixed(2)}</td>
              <td>{record[3].toFixed(2)}</td>
              <td>{record[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearRecords} className="clear-button footer-button">
        Clear Records
      </button>
    </div>
  );
}

export default Profile;
