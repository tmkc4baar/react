import { useState } from "react";
import React from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Combine full name using JSX expression
  const fullName = `${firstName} ${lastName}`;

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>👤 Fullname using JSX</h2>

      <input
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />

      <h3>
        Full Name: <span style={{ color: "blue" }}>{fullName}</span>
      </h3>
    </div>
  );
}

export default App;