import React from "react";

const students = [
  {
    id: 1,
    name: "Tyeon",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={student.id}>{student.id}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;