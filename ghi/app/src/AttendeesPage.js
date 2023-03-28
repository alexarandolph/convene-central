import { useState, useEffect } from 'react';
import AttendeesList from './AttendeesList';

function AttendeesPage() {
  const [attendees, setAttendees] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [selectedConference, setSelectedConference] = useState(null);

  useEffect(() => {
    async function fetchAttendees() {
      const response = await fetch('http://localhost:8000/api/attendees/');
      if (response.ok) {
        const data = await response.json();
        setAttendees(data.attendees);
      }
    }

    async function fetchConferences() {
      const response = await fetch('http://localhost:8000/api/conferences/');
      if (response.ok) {
        const data = await response.json();
        setConferences(data.conferences);
      }
    }

    fetchAttendees();
    fetchConferences();
  }, []);

  function handleSelectChange(event) {
    const value = event.target.value;
    setSelectedConference(value);
  }

  let filteredAttendees = attendees;
  if (selectedConference) {
    filteredAttendees = attendees.filter((attendee) => attendee.conference === selectedConference);
  }

  return (
    <div>
      <h1>Attendees</h1>
      <label htmlFor="conference">Conference:</label>
      <select id="conference" name="conference" onChange={handleSelectChange}>
        <option value="">All Conferences</option>
        {conferences.map((conference) => (
          <option key={conference.href} value={conference.name}>
            {conference.name}
          </option>
        ))}
      </select>
      <AttendeesList attendees={filteredAttendees} />
    </div>
  );
}

export default AttendeesPage;
