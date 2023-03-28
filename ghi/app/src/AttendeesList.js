import React, { useState } from "react";

function AttendeesList(props) {
  const [filter, setFilter] = useState("");

  const filteredAttendees = props.attendees.filter(
    (attendee) => attendee.conference.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by conference"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        style={{ width: "100%", maxWidth: "400px", padding: "8px" }}
      />
      <br></br>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {filteredAttendees.map((attendee) => {
            return (
              <tr key={attendee.href}>
                <td>{attendee.name}</td>
                <td>{attendee.conference}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AttendeesList;
