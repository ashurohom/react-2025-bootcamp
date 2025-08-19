import React, { useState } from 'react';

function Student() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ashu Rohom", age: 20 },
    { id: 2, name: "Sanket P", age: 22 },
    { id: 3, name: "Alice Johnson", age: 21 },
    { id: 4, name: "John Doe", age: 23 },
    { id: 5, name: "Jane Smith", age: 21 },
  ]);

  // Step 1: State for form inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "") {
      alert("Please fill all fields!");
      return;
    }

    // Create new student object
    const newStudent = {
      id: students.length + 1,
      name: name,
      age: parseInt(age),
    };

    // Update students list
    setStudents([...students, newStudent]);

    // Clear form
    setName("");
    setAge("");
  };

    // ✅ Delete student
  const handleDeleteStudent = (id) => {
    const updatedList = students.filter((student) => student.id !== id);
    setStudents(updatedList);
  };

  // Step 3: Render the component
  return (
    <div style={{ padding: "20px" }}>
      <h2>Students Page 🎓</h2>

      {/* Student List */}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})

             <button
              onClick={() => handleDeleteStudent(student.id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>

      {/* Add Student Form */}
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Student;
