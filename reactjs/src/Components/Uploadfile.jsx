import React, { useState } from 'react';

export default function UploadFile() {
  const [text, setText] = useState(""); // for username input
  const [file, setFile] = useState(null); // for file input

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission

    const formData = new FormData();
    formData.append("username", text); // attach username to formData
    formData.append("file", file); // attach the file to formData

    // Send data to backend
    fetch("http://localhost:3500/upload", {
      method: "POST",
      body: formData, // Send formData as body
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "File uploaded and data saved successfully") {
          alert("File uploaded successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error uploading the file.");
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}
