import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent(e) {
    e.preventDefault();

    if (!name || !rollNo || !department || marks === "") {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name,
      rollNo,
      department,
      marks,
    };

    setStudents([...students, student]);

    setName("");
    setRollNo("");
    setDepartment("");
    setMarks("");
  }

  return (
    <div style={{
      maxWidth: "650px",
      margin: "40px auto",
      padding: "25px",
      fontFamily: "Arial",
      backgroundColor: "#f4f7fb",
      borderRadius: "12px"
    }}>
      <h1>Student Information System</h1>

      <form onSubmit={addStudent}>
        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Add Student
        </button>
      </form>

      <h2>Student Details</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map((student, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginTop: "12px",
              borderRadius: "8px"
            }}
          >
            <p><b>Name:</b> {student.name}</p>
            <p><b>Roll Number:</b> {student.rollNo}</p>
            <p><b>Department:</b> {student.department}</p>
            <p><b>Marks:</b> {student.marks}</p>
          </div>
        ))
      )}
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "95%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default App;