import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for user input and search result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Search function
  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase(),
    );

    if (found) {
      setResult(` ${found.meaning}`);
    } else {
      setResult(`Word not found in the dictionary.`);
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
        Search
      </button>
      <h3>Definition:</h3>
      <p style={{ marginTop: "20px" }}>{result}</p>
    </div>
  );
}
