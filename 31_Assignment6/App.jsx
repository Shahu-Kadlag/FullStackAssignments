import { useState } from "react";

function StudentForm({ setStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [dept, setDept] = useState("");
  const [marks, setMarks] = useState("");

  function submit(e) {
    e.preventDefault();
    setStudent({ name, roll, dept, marks });
  }

  return (
    <form onSubmit={submit}>
      <h2>Student Form</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} required /><br /><br />
      <input placeholder="Roll Number" onChange={e => setRoll(e.target.value)} required /><br /><br />
      <input placeholder="Department" onChange={e => setDept(e.target.value)} required /><br /><br />
      <input type="number" placeholder="Marks" min="0" max="100" onChange={e => setMarks(e.target.value)} required /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

function StudentDetails({ student }) {
  return student && (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Roll Number: {student.roll}</p>
      <p>Department: {student.dept}</p>
      <p>Marks: {student.marks}</p>
    </div>
  );
}

export default function App() {
  const [student, setStudent] = useState(null);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Student Information Application</h1>
      <StudentForm setStudent={setStudent} />
      <StudentDetails student={student} />
    </div>
  );
}